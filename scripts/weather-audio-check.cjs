const fs=require('node:fs'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
(async()=>{
 const out='docs/acceptance/weather-audio';fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgpu','--ignore-gpu-blocklist','--autoplay-policy=user-gesture-required']});
 const checks=[],errors=[];
 try{
  const page=await browser.newPage({viewport:{width:1440,height:1000}});page.on('pageerror',e=>errors.push(e.message));
  await page.addInitScript(()=>{
   window.__audioMeters=[];const Native=window.AudioContext;
   window.AudioContext=new Proxy(Native,{construct(target,args){const ctx=new target(...args),meter=ctx.createAnalyser();meter.fftSize=4096;meter.connect(ctx.destination);const connect=AudioNode.prototype.connect;
    const destination=ctx.destination;AudioNode.prototype.connect=function(node,...rest){return connect.call(this,node===destination?meter:node,...rest)};
    window.__audioMeters.push({ctx,meter});return ctx;}});
  });
  await page.goto((process.env.HIKE_URL||'http://127.0.0.1:5189')+'/tests/hike-harness.html?quality=smooth');
  await page.waitForFunction(()=>window.__hikeFixture?.game.forest&&window.__hikeFixture.game.session.phase==='running',null,{timeout:90000});
  await page.waitForTimeout(3000);
  const blocked=await page.evaluate(()=>({contexts:window.__audioMeters.map(m=>m.ctx.state),pressed:document.querySelector('#storm-sound').getAttribute('aria-pressed')}));
  if(blocked.contexts.some(s=>s!=='running'))assert.equal(blocked.pressed,'false','blocked output must not pretend to be playing');
  if(blocked.pressed!=='true')await page.locator('#storm-sound').click();
  await page.waitForFunction(()=>document.querySelector('#storm-sound').getAttribute('aria-pressed')==='true'&&window.__audioMeters.every(m=>m.ctx.state==='running'),null,{timeout:20000});
  checks.push('real audio context becomes running after trusted click; blocked autoplay is not labelled playing');
  async function measure(){return page.evaluate(async()=>{let energy=0,count=0,peak=0;for(let i=0;i<10;i++){for(const{ctx,meter}of window.__audioMeters){if(ctx.state==='closed')continue;const data=new Float32Array(meter.fftSize);meter.getFloatTimeDomainData(data);for(const x of data){energy+=x*x;peak=Math.max(peak,Math.abs(x));count++}}await new Promise(r=>setTimeout(r,40))}return{rms:Math.sqrt(energy/Math.max(1,count)),peak}})}
  await page.waitForTimeout(1800);const clear=await measure();assert.ok(clear.rms>.002,'sunny forest must produce measurable ambience: '+JSON.stringify(clear));assert.ok(clear.peak<.98);
  checks.push('sunny ambience uses decoded local recordings plus a continuous canopy bed, below digital clipping');
  await page.evaluate(()=>window.__hikeFixture.game.forest.setWeather('rain'));await page.waitForTimeout(1800);const rain=await measure();assert.ok(rain.rms>.005,'rain output must be audible-level: '+JSON.stringify(rain));assert.ok(rain.peak<.98);
  checks.push('rain mode produces continuous measurable output without clipping');
  await page.locator('#sound-volume').fill('20');await page.waitForTimeout(800);const low=await measure();assert.ok(rain.rms>low.rms*2,'volume slider must change output level');
  await page.locator('#sound-volume').fill('80');await page.waitForTimeout(800);const restored=await measure();assert.ok(restored.rms>low.rms*2);
  checks.push('20% and 80% volume settings measurably change the output');
  await page.locator('#storm-sound').click();await page.evaluate(()=>window.__hikeFixture.game.forest.setWeather('clear'));await page.waitForTimeout(4000);const muted=await measure();assert.ok(muted.rms<.0001,'weather switch must preserve mute: '+JSON.stringify(muted));assert.equal(await page.locator('#storm-sound').getAttribute('aria-pressed'),'false');
  checks.push('mute remains silent after weather switches');
  await page.locator('#storm-sound').click();await page.waitForTimeout(1800);const resumed=await measure();assert.ok(resumed.rms>.002);
  await page.screenshot({path:out+'/controls-synthetic.png'});
  await page.evaluate(()=>window.__hikeFixture.game.dispose());await page.waitForTimeout(300);assert.ok(await page.evaluate(()=>window.__audioMeters.every(m=>m.ctx.state==='closed')));
  checks.push('unmute restores ambience; disposing the scene closes its shared context');
  await page.close();
  const gate=await browser.newPage({viewport:{width:1440,height:1000}});gate.on('pageerror',e=>errors.push(e.message));
  await gate.addInitScript(()=>{
   window.__allowAudio=false;window.__gatedContexts=[];const Native=window.AudioContext;
   for(const name of ['pointerdown','keydown'])document.addEventListener(name,e=>{if(e.isTrusted)window.__allowAudio=true},true);
   // Explicitly simulate a resume that remains blocked until trusted input.
   window.AudioContext=new Proxy(Native,{construct(target,args){const ctx=new target(...args);void ctx.suspend();const resume=ctx.resume.bind(ctx);ctx.resume=()=>window.__allowAudio?resume():new Promise(()=>{});window.__gatedContexts.push(ctx);return ctx;}});
  });
  await gate.goto((process.env.HIKE_URL||'http://127.0.0.1:5189')+'/tests/hike-harness.html?quality=smooth');
  await gate.waitForFunction(()=>document.querySelector('#storm-sound')?.textContent==='点击开启环境声音',null,{timeout:90000});
  assert.equal(await gate.locator('#storm-sound').getAttribute('aria-pressed'),'false');
  await gate.locator('#storm-sound').click();
  await gate.waitForFunction(()=>document.querySelector('#storm-sound').getAttribute('aria-pressed')==='true'&&window.__gatedContexts.every(c=>c.state==='running'),null,{timeout:15000});
  checks.push('explicitly simulated blocked resume times out honestly and a trusted click recovers the same context');
  await gate.evaluate(()=>window.__hikeFixture.game.dispose());await gate.close();
  assert.deepEqual(errors,[]);
  const report={input:'Real Web Audio output and local recordings; synthetic gaze harness only, no human microphone or camera recording',checks,levels:{clear,rain,low,restored,muted,resumed},initial:blocked,errors,listeningAcceptance:'Human hardware and listening not measured'};
  fs.writeFileSync(out+'/checks.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});

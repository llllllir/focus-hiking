const fs=require('node:fs'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
const {media,fixture}=require('./gaze-upgrade-browser-check.cjs');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgpu','--ignore-gpu-blocklist']});
 const errors=[],checks=[];
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1000}});await context.addInitScript(media);await context.addInitScript(fixture);
  await context.addInitScript(()=>{const getMedia=navigator.mediaDevices.getUserMedia.bind(navigator.mediaDevices);navigator.mediaDevices.getUserMedia=async constraints=>{const stream=await getMedia(constraints);for(const track of stream.getVideoTracks()){const settings=track.getSettings.bind(track);track.getSettings=()=>({...settings(),deviceId:'audio-fixture-camera'});}return stream;};});
  await context.addInitScript(()=>{window.__entryContexts=[];const Native=window.AudioContext;window.AudioContext=new Proxy(Native,{construct(target,args){const c=new target(...args);window.__entryContexts.push(c);return c;}})});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));
  await page.goto((process.env.HIKE_URL||'http://127.0.0.1:5188')+'/?quality=smooth');
  await page.evaluate(async()=>{
   // Seed synthetic retry eligibility solely to exercise production audio entry.
   // This is not evidence of three completed real tests or gaze precision.
   const digest=await crypto.subtle.digest('SHA-256',new TextEncoder().encode('audio-fixture-camera'));
   const deviceKey=[...new Uint8Array(digest)].map(b=>b.toString(16).padStart(2,'0')).join('');
   localStorage.setItem('here-in-the-mountains.environments.v1',JSON.stringify({version:1,profiles:[{id:'audio-entry-fixture',name:'Synthetic audio entry',attempts:3,saved:null,latest:null,savedAt:null,signature:{screenWidth:screen.width,screenHeight:screen.height,width:innerWidth,height:innerHeight,pixelRatio:devicePixelRatio,videoWidth:640,videoHeight:480,deviceKey}}]}));
  });
  await page.reload();await page.locator('.environment-enter').click();
  await page.waitForFunction(()=>window.__entryContexts.length===1&&window.__entryContexts[0].state==='running',null,{timeout:10000});
  checks.push('trusted production environment-entry click unlocks one shared context before asynchronous forest preparation');
  await page.waitForFunction(()=>document.querySelector('.hike-hud')?.hidden===false||/存档不同|需要允许|加载失败|模型.*超时/.test(document.querySelector('.gaze-status')?.textContent??''),null,{timeout:45000}).catch(async e=>{console.error(await page.evaluate(()=>({status:document.querySelector('.gaze-status')?.textContent,begin:document.querySelector('.hike-begin')?.textContent,sound:document.querySelector('#storm-sound')?.textContent,error:document.querySelector('.error:not([hidden])')?.textContent})));throw e;});
  assert.equal(await page.locator('.hike-hud').isVisible(),true,await page.locator('.gaze-status').textContent().catch(()=>''));
  await page.waitForFunction(()=>document.querySelector('#storm-sound')?.getAttribute('aria-pressed')==='true',null,{timeout:15000});
  assert.equal(await page.locator('#sound-volume').inputValue(),'80');
  await page.locator('#hike-stop').click();await page.locator('.hike-result .hike-exit').click();
  await page.locator('.environment-enter').click();await page.waitForFunction(()=>document.querySelector('.hike-hud')?.hidden===false&&document.querySelector('#storm-sound')?.getAttribute('aria-pressed')==='true',null,{timeout:90000});
  assert.deepEqual(await page.evaluate(()=>window.__entryContexts.map(c=>c.state)),['running']);
  checks.push('automatic game entry plays audio at 80%; returning home and re-entering reuses the unlocked context without duplication');
  assert.deepEqual(errors,[]);
  const report={input:'Production bundle; explicitly seeded synthetic retry profile and Canvas/Worker, not real camera acceptance',checks,errors};
  fs.mkdirSync('docs/acceptance/weather-audio',{recursive:true});fs.writeFileSync('docs/acceptance/weather-audio/production-entry.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});

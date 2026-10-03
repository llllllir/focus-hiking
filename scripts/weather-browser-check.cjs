const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
(async()=>{
 const out=path.resolve('docs/acceptance/v-island-upgrade/weather');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgpu','--ignore-gpu-blocklist']});
 const errors=[];const checks=[];
 try {
 const page=await browser.newPage({viewport:{width:1600,height:900}});
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('404'))errors.push(m.text());});
 await page.addInitScript(()=>{
   const Native=window.AudioContext;window.__audioContexts=[];
   window.AudioContext=class extends Native{constructor(...args){super(...args);window.__audioContexts.push(this);}};
   const create=URL.createObjectURL.bind(URL);URL.createObjectURL=b=>{window.__sceneReport=b;return create(b);};HTMLAnchorElement.prototype.click=function(){};
 });
 await page.goto('http://127.0.0.1:5175/?seed=42&view=cabin');await page.waitForFunction(()=>document.querySelector('#start')?.disabled===false,null,{timeout:90000});
 const record=async()=>{await page.evaluate(()=>document.querySelector('#report').click());return page.evaluate(async()=>JSON.parse(await window.__sceneReport.text()));};
 const clear=await record();await page.locator('#weather').selectOption('rain');await page.waitForTimeout(12000);
 const rainy=await record();assert.equal(rainy.weather,'rain');assert.deepEqual(rainy.bodyPosition,clear.bodyPosition);assert.match(rainy.gpu,/v-island-webgpu/);checks.push('weather retains body position and WebGPU backend');
 const audio=await page.evaluate(()=>window.__audioContexts.map(c=>({state:c.state,sampleRate:c.sampleRate})));assert.ok(audio.some(c=>c.state==='running'));checks.push('native audio context started from user gesture; listening still required');
 const css=await page.addStyleTag({content:'#app > :not(.scene-host){display:none!important}'});await page.screenshot({path:path.join(out,'cabin-rain.png')});await css.evaluate(e=>e.remove());
 await page.locator('#storm-sound').click();assert.equal(await page.locator('#storm-sound').getAttribute('aria-pressed'),'false');checks.push('mute toggle');
 await page.locator('#weather').selectOption('clear');await page.waitForTimeout(1500);const restored=await record();assert.equal(restored.weather,'clear');assert.deepEqual(restored.bodyPosition,clear.bodyPosition);checks.push('clear restores mode and keeps position');
 await page.goto('http://127.0.0.1:5175/?seed=42&view=wetland&weather=rain');await page.waitForFunction(()=>document.querySelector('#start')?.disabled===false,null,{timeout:90000});await page.waitForTimeout(22000);
 await page.addStyleTag({content:'#app > :not(.scene-host){display:none!important}'});await page.screenshot({path:path.join(out,'wetland-rain.png')});
 assert.deepEqual(errors,[]);
 fs.writeFileSync(path.join(out,'checks.json'),JSON.stringify({checks,audio,errors,source:'scripted UI, no camera',visualAcceptance:'not-reviewed',audioAcceptance:'not-listened'},null,2));console.log(JSON.stringify({checks,errors}));
 } finally{fs.writeFileSync(path.join(out,'errors.json'),JSON.stringify(errors,null,2));await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});

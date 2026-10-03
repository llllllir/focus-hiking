const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
(async()=>{
 const out=path.resolve('docs/acceptance/v-island-upgrade/ecology');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgpu','--ignore-gpu-blocklist']});
 const errors=[],assets=[],checks=[];
 try{
  const page=await browser.newPage({viewport:{width:1600,height:900}});
  page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('404'))errors.push(m.text());});
  page.on('response',r=>{if(r.url().includes('/audio/forest/'))assets.push({file:r.url().split('/').at(-1),status:r.status()});});
  await page.addInitScript(()=>{
   const Native=window.AudioContext;window.__audioContexts=[];
   window.AudioContext=class extends Native{constructor(...args){super(...args);this.sourceCount=0;window.__audioContexts.push(this);}createBufferSource(){this.sourceCount++;return super.createBufferSource();}};
   const create=URL.createObjectURL.bind(URL);URL.createObjectURL=b=>{window.__sceneReport=b;return create(b);};HTMLAnchorElement.prototype.click=function(){};
  });
  await page.goto('http://127.0.0.1:5175/?seed=42');await page.waitForFunction(()=>document.querySelector('#start')?.disabled===false,null,{timeout:90000});
  await page.locator('#start').click();await page.waitForTimeout(26000);
  const record=async()=>{await page.locator('#report').click();return page.evaluate(async()=>JSON.parse(await window.__sceneReport.text()));};
  const clear=await record(),audio=await page.evaluate(()=>window.__audioContexts.map(c=>({state:c.state,sources:c.sourceCount,sampleRate:c.sampleRate})));
  assert.ok(assets.length===8&&assets.every(a=>a.status===200));assert.ok(audio.length===2&&audio.every(c=>c.state==='running'));assert.ok(audio.some(c=>c.sources>=3));checks.push('eight local recordings load; sunny loops and a scheduled bird snippet start from a user gesture');
  assert.equal(new Set(clear.wildlife.map(a=>a.species)).size,11);assert.ok(clear.wildlife.some(a=>a.age==='juvenile'));assert.ok(clear.ecology.counts.grass>15000&&clear.ecology.ancientTrees>10);checks.push('eleven rigged species, age variants and dense ecology are present in the running scene');
  const marker=await page.locator('#map-position').evaluate(e=>[Number(e.getAttribute('cx')),Number(e.getAttribute('cy'))]);assert.ok(Math.abs(marker[0]-clear.bodyPosition[0])<.01&&Math.abs(marker[1]-clear.bodyPosition[2])<.01);assert.ok(clear.trackStatus.includes('路线'));checks.push('map marker matches body position and exposes route distance');
  await page.locator('#map-follow').click();assert.equal((await record()).mapFollow,false);await page.locator('#map-follow').click();assert.equal((await record()).mapFollow,true);checks.push('overview and position-follow modes toggle');
  await page.screenshot({path:path.join(out,'track-clear.png')});
  await page.locator('#weather').selectOption('rain');await page.waitForTimeout(11000);const rain=await record();assert.equal(rain.weather,'rain');assert.deepEqual(rain.bodyPosition,clear.bodyPosition);checks.push('weather changes preserve navigation position');
  await page.screenshot({path:path.join(out,'track-rain.png')});await page.locator('#weather').selectOption('clear');await page.waitForTimeout(1200);assert.equal((await record()).weather,'clear');
  await page.locator('#storm-sound').click();assert.equal(await page.locator('#storm-sound').getAttribute('aria-pressed'),'false');checks.push('clear restoration and mute');assert.deepEqual(errors,[]);
  fs.writeFileSync(path.join(out,'checks.json'),JSON.stringify({sceneRevision:clear.sceneRevision,checks,assets,audio,ecology:clear.ecology,wildlife:clear.wildlife,loadedMs:clear.loadedMs,errors,input:'scripted manual UI, no camera',visualAcceptance:'not-reviewed',audioAcceptance:'not-listened'},null,2));console.log(JSON.stringify({checks,errors,loadedMs:clear.loadedMs}));
 }finally{fs.writeFileSync(path.join(out,'errors.json'),JSON.stringify(errors,null,2));await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});


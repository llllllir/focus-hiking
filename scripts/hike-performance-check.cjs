const fs=require('node:fs');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
(async()=>{
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgpu','--ignore-gpu-blocklist']});
 try{
  const page=await browser.newPage({viewport:{width:1600,height:1000}}),errors=[];
  page.on('pageerror',e=>errors.push(e.message));
  await page.goto((process.env.HIKE_URL||'http://127.0.0.1:5177')+'/tests/hike-harness.html');
  await page.waitForFunction(()=>window.__hikeFixture?.game.forest&&document.querySelector('.hike-hud')?.hidden === false,null,{timeout:90000});
  await page.locator('.hike-hud').waitFor({ state: 'visible' });
  await page.waitForTimeout(20000);console.log('Warm-up complete; measuring 60 seconds of simulated walking');
  await page.evaluate(()=>{window.__perfFrames=[];window.__perfStart=performance.now();let previous=performance.now();function collect(now){window.__perfFrames.push(now-previous);previous=now;window.__perfRequest=requestAnimationFrame(collect)}window.__perfRequest=requestAnimationFrame(collect)});
  for(let i=0;i<3;i++){await page.waitForTimeout(20000);console.log(`Measured ${(i+1)*20} seconds`)}
  await page.waitForFunction(()=>window.__hikeFixture.game.session.phase==='running');
  const result=await page.evaluate(()=>{cancelAnimationFrame(window.__perfRequest);const f=window.__perfFrames.slice(1),sorted=[...f].sort((a,b)=>a-b),g=window.__hikeFixture.game;return {source:'simulated; no real camera or model inference',warmupSeconds:20,measurementSeconds:60,phase:g.session.phase,elapsedMs:g.session.elapsedMs,samples:f.length,averageFps:f.length*1000/f.reduce((a,b)=>a+b,0),frameP95Ms:sorted[Math.floor(sorted.length*.95)],framesOver50Ms:f.filter(x=>x>50).length,drawingBuffer:[g.forest.renderer.domElement.width,g.forest.renderer.domElement.height],autoLevel:g.forest.scene.userData.hike?.autoLevel,gpu:g.forest.renderer.gpuDescription}});
  result.errors=errors;fs.writeFileSync('docs/acceptance/gaze-hike/performance.json',JSON.stringify(result,null,2));console.log(JSON.stringify(result));if(errors.length||result.phase!=='running'||result.elapsedMs<79000)process.exitCode=1;
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});

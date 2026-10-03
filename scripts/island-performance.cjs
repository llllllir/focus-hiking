const fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
(async()=>{
 const out=path.resolve('docs/acceptance/v-island-upgrade/browser');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgpu','--ignore-gpu-blocklist']});
 try {
 const page=await browser.newPage({viewport:{width:1920,height:1200}});const errors=[];
 page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('404'))errors.push(m.text());});
 await page.addInitScript(()=>{const create=URL.createObjectURL.bind(URL);URL.createObjectURL=b=>{window.__sceneReport=b;return create(b);};HTMLAnchorElement.prototype.click=function(){};});
 await page.goto('http://127.0.0.1:5175/?seed=42');await page.waitForFunction(()=>document.querySelector('#start')?.disabled===false,null,{timeout:90000});
 await page.locator('#start').click();await page.waitForTimeout(3000);
 const record=async()=>{await page.locator('#report').click();return page.evaluate(async()=>JSON.parse(await window.__sceneReport.text()));};
 const first=await record();const offset=first.frameTimesMs.length;
 await page.locator('#mode').click();await page.locator('[data-destination="trail"]').click();await page.locator('#depart').click();
 const started=Date.now();for(let i=0;i<6;i++){await page.waitForTimeout(10000);console.log('Measured '+(i+1)*10+' seconds');}
 const last=await record();const times=last.frameTimesMs.slice(offset),sorted=[...times].sort((a,b)=>a-b);
 const result={durationMs:Date.now()-started,input:'manual (scripted mouse destination)',cameraInputConnected:last.cameraInputConnected,
  viewport:last.cssViewport,drawingBuffer:last.drawingBuffer,gpu:last.gpu,loadedMs:last.loadedMs,samples:times.length,
  averageFps:times.length*1000/times.reduce((a,b)=>a+b,0),frameP95Ms:sorted[Math.floor(sorted.length*.95)],
  renderInfo:last.renderInfo,bodyStart:first.bodyPosition,bodyEnd:last.bodyPosition,errors,visualAcceptance:'not-reviewed'};
 fs.writeFileSync(path.join(out,'performance.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result));if(errors.length)process.exitCode=1;
 } finally{await browser.close();}
})().catch(e=>{console.error(e);process.exit(1);});

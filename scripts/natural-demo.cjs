const fs=require('node:fs'),path=require('node:path');const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
(async()=>{
 const output=path.resolve('docs/acceptance/scene-2.0-natural/browser');
 const browser=await chromium.launch({headless:true,channel:'msedge',args:['--enable-webgl','--ignore-gpu-blocklist']});
 const context=await browser.newContext({viewport:{width:1280,height:800},recordVideo:{dir:output,size:{width:1280,height:800}}});
 const page=await context.newPage();const errors=[];page.on('pageerror',e=>errors.push(e.message));
 await page.goto('http://127.0.0.1:5174/?seed=42&quality=high');await page.waitForSelector('#start');await page.waitForFunction(()=>!document.querySelector('#start').disabled);
 await page.locator('#start').click();await page.locator('#mode').click();await page.locator('[data-destination="ridge"]').click();await page.locator('#depart').click();
 await page.waitForTimeout(35000);
 const pending=page.waitForEvent('download');await page.locator('#report').click();await (await pending).saveAs(path.join(output,'demo-report.json'));
 const video=page.video();await context.close();await video.saveAs(path.join(output,'forest-walk-35s.webm'));await video.delete();
 await browser.close();fs.writeFileSync(path.join(output,'demo.json'),JSON.stringify({source:'manual route controls',recordedSeconds:35,viewport:[1280,800],quality:'high',pageErrors:errors,humanAcceptance:false},null,2));
 if(errors.length)throw Error(errors.join('\n'));console.log('35-second browser scene demo saved.');
})().catch(e=>{console.error(e);process.exit(1)});

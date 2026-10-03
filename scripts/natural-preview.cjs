const fs=require('node:fs');const path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE);
(async()=>{
 const out=path.resolve('docs/acceptance/scene-2.0-natural/browser');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgl','--ignore-gpu-blocklist']});
 const page=await browser.newPage({viewport:{width:1600,height:1000}});const errors=[];page.on('pageerror',e=>errors.push(e.message));
 for(const view of ['camp','trail','creek','ridge','tent-outside','animals']) {
  await page.goto('http://127.0.0.1:5174/?seed=42&view='+view);await page.waitForSelector('#start');await page.waitForFunction(()=>!document.querySelector('#start').disabled,undefined,{timeout:90000});await page.waitForTimeout(1000);
  await page.screenshot({path:path.join(out,view+'.png')});
 }
 fs.writeFileSync(path.join(out,'errors.json'),JSON.stringify(errors));await browser.close();
 if(errors.length)throw Error(errors.join('\n'));
})().catch(e=>{console.error(e);process.exit(1)});

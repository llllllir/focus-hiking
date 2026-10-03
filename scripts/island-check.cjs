const fs=require('node:fs'),path=require('node:path');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
(async()=>{
 const out=path.resolve('docs/acceptance/v-island-upgrade/browser');fs.mkdirSync(out,{recursive:true});
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgpu','--ignore-gpu-blocklist']});
 const page=await browser.newPage({viewport:{width:1600,height:900}});
 const errors=[];page.on('pageerror',e=>errors.push(e.message));page.on('console',m=>{if(m.type()==='error'&&!m.text().includes('404'))errors.push(m.text());});
 const shots=[];
 for(const view of process.env.ISLAND_VIEWS?.split(',')||['creek','canopy','moose','wetland','cabin']) {
 await page.goto('http://127.0.0.1:5175/?seed=42&view='+view);
 await page.waitForSelector('#start',{timeout:90000});
 await page.waitForFunction(()=>document.querySelector('#start')?.disabled===false||document.querySelector('.error')?.hidden===false,null,{timeout:90000});
 await page.waitForTimeout(5000);
 const status=await page.locator('.error').innerText().catch(()=>''),ready=await page.locator('#start').isEnabled();
 await page.addStyleTag({content:'#app > :not(.scene-host) {display:none!important}'});
 await page.screenshot({path:path.join(out,view+'.png')});shots.push({view,ready,status:ready?'':status});
 }
 fs.writeFileSync(path.join(out,'smoke.json'),JSON.stringify({shots,errors},null,2));console.log(JSON.stringify({shots,errors}));
 await browser.close();if(shots.some(s=>!s.ready)||errors.length)process.exitCode=1;
})().catch(e=>{console.error(e);process.exit(1);});

const fs=require('node:fs'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'playwright-core');
const {media}=require('./gaze-upgrade-browser-check.cjs');
(async()=>{
 const base=process.env.SITE_URL||'http://127.0.0.1:5193/focus-hiking/';
 const browser=await chromium.launch({channel:'msedge',headless:true,args:['--enable-webgpu','--ignore-gpu-blocklist']});
 const errors=[],failed=[],checks=[];
 try{
  const context=await browser.newContext({viewport:{width:1440,height:1000}});
  const page=await context.newPage();page.on('pageerror',e=>errors.push(e.message));page.on('response',r=>{if(r.status()>=400)failed.push({url:r.url(),status:r.status()})});
  await page.goto(base,{waitUntil:'networkidle',timeout:90000});
  assert.match(await page.title(),/此刻山间/);
  assert.equal(await page.locator('.brand').first().getAttribute('href'),'/focus-hiking/');
  const manual=page.locator('a[href="/focus-hiking/?mode=explore"]');assert.equal(await manual.count(),1);
  checks.push('homepage, cover and navigation load under repository base');
  await page.goto(base+'?mode=explore&quality=smooth',{timeout:90000});
  await page.locator('#start:enabled').waitFor({timeout:90000});await page.locator('#start').click();
  await page.waitForFunction(()=>document.querySelector('#storm-sound')?.getAttribute('aria-pressed')==='true',null,{timeout:45000});
  assert.equal(await page.locator('#sound-volume').inputValue(),'80');
  await page.locator('#weather').selectOption('rain');await page.waitForTimeout(1500);
  assert.equal(await page.locator('#storm-sound').getAttribute('aria-pressed'),'true');
  const credits=await context.request.get(base+'audio/forest/CREDITS.md');assert.equal(credits.status(),200);
  checks.push('forest model, manual entry, sunny/rain audio and credits load under repository base');
  const cameraContext=await browser.newContext();await cameraContext.addInitScript(media);
  const cameraPage=await cameraContext.newPage();cameraPage.on('pageerror',e=>errors.push(e.message));cameraPage.on('response',r=>{if(r.status()>=400)failed.push({url:r.url(),status:r.status()})});
  await cameraPage.goto(base+'?mode=gaze-test',{timeout:90000});await cameraPage.locator('[data-action="start"]').click();
  await cameraPage.waitForFunction(()=>document.querySelector('[data-action="stop"]')&&!document.querySelector('[data-action="stop"]').disabled,null,{timeout:90000});
  await cameraPage.waitForTimeout(3500);
  assert.doesNotMatch(await cameraPage.locator('.gaze-status').textContent(),/加载失败|超时|Failed|Error/i);
  checks.push('real MediaPipe Worker/model/WASM initialize with explicitly synthetic Canvas camera');
  assert.deepEqual(errors,[]);assert.deepEqual(failed,[]);
  const report={site:base,input:'Manual scene and synthetic Canvas camera; real model/Worker and WebAudio. Not human gaze or listening acceptance.',checks,errors,failed};
  fs.mkdirSync('docs/acceptance/github-pages',{recursive:true});fs.writeFileSync('docs/acceptance/github-pages/'+(base.startsWith('https:')?'live':'local')+'.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));
 }finally{await browser.close()}
})().catch(e=>{console.error(e);process.exitCode=1});

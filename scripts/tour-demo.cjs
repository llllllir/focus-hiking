const fs = require('node:fs');
const path = require('node:path');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
(async () => {
  const output = path.resolve(process.env.ACCEPTANCE_OUT || 'docs/acceptance/v0.1/browser');
  fs.mkdirSync(output, { recursive: true });
  const browser = await chromium.launch({ headless:true,channel:'msedge',args:['--enable-webgl','--ignore-gpu-blocklist'] });
  if (process.env.SKIP_DEMO !== '1') {
  const videoContext = await browser.newContext({ viewport:{width:1280,height:800},recordVideo:{dir:output,size:{width:1280,height:800}} });
  const videoPage = await videoContext.newPage();
  await videoPage.goto('http://127.0.0.1:5173');
  await videoPage.waitForFunction(() => !document.querySelector('#start').disabled);
  await videoPage.getByRole('button',{name:'开始漫步',exact:true}).click();
  await videoPage.waitForTimeout(40_000);
  const video=videoPage.video();
  await videoContext.close();
  await video.saveAs(path.join(output,'tour-40s.webm'));
  console.log('40-second actual browser demo recorded.');
  }
  const context=await browser.newContext({viewport:{width:1920,height:1200}});
  const page=await context.newPage();
  await page.goto('http://127.0.0.1:5173');
  await page.waitForFunction(() => !document.querySelector('#start').disabled);
  await page.getByRole('button',{name:'开始漫步',exact:true}).click();
  await page.locator('.end').waitFor({state:'visible',timeout:240_000});
  const result={progress:await page.locator('progress').evaluate(el=>el.value),time:await page.locator('#time').innerText(),completed:true,environment:'headless Edge real-time run; not a human acceptance'};
  fs.writeFileSync(path.join(output,'full-tour.json'),JSON.stringify(result,null,2));
  await page.screenshot({path:path.join(output,'completed.png')});
  console.log('Complete two-minute route reached the end in actual browser playback.');
  const pendingDownload=page.waitForEvent('download'); await page.locator('#end-report').click();
  const download=await pendingDownload; const recordFile=path.join(output,'tour-run.json'); await download.saveAs(recordFile);
  const record=JSON.parse(fs.readFileSync(recordFile));
  const values=record.frameTimesMs.filter(v=>v>0), sorted=[...values].sort((a,b)=>a-b);
  const benchmark={gpu:record.gpu,browser:record.browser,drawingBuffer:record.drawingBuffer,frames:values.length,measuredSeconds:values.reduce((a,b)=>a+b,0)/1000,fps:1000*values.length/values.reduce((a,b)=>a+b,0),frameTimeP95Ms:sorted[Math.floor(sorted.length*.95)],slowFramesOver33ms:values.filter(v=>v>1000/30).length,quality:'default',environment:'headless Edge automatic tour, no camera, not human joint acceptance',scene60fpsPassed:false};
  benchmark.scene60fpsPassed=benchmark.fps>=60;
  fs.writeFileSync(path.join(output,'tour-benchmark.json'),JSON.stringify(benchmark,null,2));
  await browser.close();
})().catch(error=>{console.error(error);process.exit(1)});

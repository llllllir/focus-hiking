const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright-core');
(async () => {
  const out = path.resolve(process.env.SCENE_EVIDENCE_DIR || 'docs/acceptance/scene-2.0/browser'); fs.mkdirSync(out,{recursive:true});
  const browser = await chromium.launch({headless:true,channel:'msedge',args:['--enable-webgl','--ignore-gpu-blocklist']});
  const page = await browser.newPage({viewport:{width:1920,height:1200}}); const errors=[];
  await page.addInitScript(()=>{
    const create=URL.createObjectURL.bind(URL);URL.createObjectURL=blob=>{window.__sceneReport=blob;return create(blob);};
    const click=HTMLAnchorElement.prototype.click;HTMLAnchorElement.prototype.click=function(){if(this.download)return;return click.call(this);};
  });
  page.on('pageerror',e=>errors.push(e.message));
  const base = process.env.PREVIEW_URL || 'http://127.0.0.1:5174';
  const ready = async url => { await page.goto(url); await page.waitForSelector('#start',{timeout:30000});await page.waitForFunction(()=>!document.querySelector('#start').disabled,undefined,{timeout:120000}); };
  const record = async name => {await page.locator('#report').click();const data=await page.evaluate(async()=>JSON.parse(await window.__sceneReport.text()));fs.writeFileSync(path.join(out,name+'.json'),JSON.stringify(data,null,2));return data;};
  await ready(base+'/?seed=42'); assert.match(await page.locator('.version').innerText(),/场景2.0/);
  await page.locator('#start').click(); const first=await record('initial');
  await page.locator('#quality').selectOption('smooth');const smooth=await record('quality-smooth');assert.deepEqual(smooth.bodyPosition,first.bodyPosition);assert.ok(smooth.drawingBuffer[0]<=1280);
  await page.locator('#quality').selectOption('original');
  assert.equal(first.scenery.seed,42); assert.equal(first.scenery.animals.length,6); assert.ok(first.scenery.variants>100);
  await page.keyboard.down('w'); await page.waitForTimeout(2000); await page.keyboard.up('w'); await page.waitForTimeout(500);
  const walked=await record('walked'); assert.ok(Math.hypot(walked.cameraPosition[0]-first.cameraPosition[0],walked.cameraPosition[2]-first.cameraPosition[2])>1);
  assert.notDeepEqual(walked.scenery.animals,first.scenery.animals);
  await page.locator('#mode').click(); await page.locator('[data-destination="camp"]').click();
  const planned=await record('planned'); await page.waitForTimeout(500); const waiting=await record('waiting');
  assert.ok(Math.hypot(...planned.cameraPosition.map((v,i)=>v-waiting.cameraPosition[i]))<.002);
  await page.locator('#depart').click(); await page.waitForTimeout(700); await page.locator('#pause').click();
  const paused=await record('paused'); await page.waitForTimeout(1000); const still=await record('still'); assert.deepEqual(paused.cameraPosition,still.cameraPosition);
  await page.locator('#pause').click(); await page.waitForFunction(()=>document.querySelector('#navigation-status').textContent.startsWith('已到达'),undefined,{timeout:30000});
  await page.waitForTimeout(600); const arrived=await record('arrived'); const camp=arrived.assets.viewpoints.find(v=>v.id==='camp').position;
  assert.ok(Math.hypot(...arrived.cameraPosition.map((v,i)=>v-camp[i]))<.15);
  await page.screenshot({path:path.join(out,'exploration.png')});
  for (const id of ['camp','trail','creek','ridge','tent','tent-outside']) { await ready(base+'/?view='+id+'&seed=42'); await page.waitForTimeout(1500); await page.screenshot({path:path.join(out,id+'.png')}); }
  await ready(base+'/?seed=42'); await page.locator('#start').click();
  const campRecord=await record('camp-approach'); const tent=campRecord.assets.tent;
  const walkTo = async (goal,name) => {
    const current=await record(name+'-before'); const p=current.bodyPosition;
    const heading=Math.atan2(p[0]-goal[0],p[2]-goal[2]);
    const delta=Math.atan2(Math.sin(current.cameraRotation[1]-heading),Math.cos(current.cameraRotation[1]-heading));
    await page.mouse.move(1200,450); await page.mouse.down(); await page.mouse.move(1200+delta/.003,450,{steps:8}); await page.mouse.up();
    let result=current;
    for(let step=0;step<25;step++) {
      const position=result.bodyPosition; const remaining=Math.hypot(position[0]-goal[0],position[2]-goal[2]);if(remaining<.12)break;
      await page.keyboard.down('w');await page.waitForTimeout(Math.min(1000,remaining/1.45*1000));await page.keyboard.up('w');
      const next=await record(name+'-step-'+step);
      if(Math.hypot(next.bodyPosition[0]-position[0],next.bodyPosition[2]-position[2])<.015) {result=next;break;}
      result=next;
    }
    return record(name);
  };
  await walkTo([campRecord.bodyPosition[0],0,84],'camp-trail');
  await walkTo(tent.entrance,'tent-door');
  const inside=await walkTo([tent.center[0],0,tent.center[2]+.8],'inside');
  assert.ok(Math.hypot(inside.bodyPosition[0]-tent.center[0],inside.bodyPosition[2]-tent.center[2])<1.4,'WASD can enter the tent through the doorway');
  await page.screenshot({path:path.join(out,'tent-entered.png')});
  const blocked=await walkTo([tent.center[0]+3,0,tent.center[2]+.8],'tent-wall'); assert.ok(blocked.bodyPosition[0]<tent.center[0]+1.7,'tent side wall blocks walking');
  await ready(base+'/?seed=43'); await page.locator('#start').click(); await page.waitForTimeout(300); const other=await record('other-seed'); assert.equal(other.scenery.seed,43); assert.notDeepEqual(other.scenery.animals,first.scenery.animals);
  await page.locator('#mode').click(); await page.locator('[data-destination="ridge"]').click(); await page.locator('#depart').click();
  await page.waitForTimeout(60000); const benchmark=await record('walking-60s');
  const frames=benchmark.frameTimesMs.slice(-Math.min(benchmark.frameTimesMs.length,3600));
  const sorted=[...frames].sort((a,b)=>a-b);
  fs.writeFileSync(path.join(out,'performance.json'),JSON.stringify({duration:'60-second destination walk',source:'manual',gpu:benchmark.gpu,drawingBuffer:benchmark.drawingBuffer,loadedMs:benchmark.loadedMs,frames:frames.length,meanFps:1000*frames.length/frames.reduce((a,b)=>a+b,0),frameP95Ms:sorted[Math.floor(sorted.length*.95)],visualAcceptance:'not-reviewed',jointGazeTest:false},null,2));
  assert.deepEqual(errors,[]);
  fs.writeFileSync(path.join(out,'checks.json'),JSON.stringify({version:'场景2.0',rename:true,manualWalking:true,planWaitsForConfirmation:true,pause:true,arrival:true,animalMovement:true,sessionSeeds:true,tentEntry:true,tentWallCollision:true,pageErrors:errors,visualAcceptance:'not-reviewed',source:'manual'},null,2));
  await browser.close(); console.log('Scene 2.0 browser checks passed.');
})().catch(e=>{console.error(e);process.exit(1)});

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
(async () => {
  const out = path.resolve('docs/acceptance/framework-scene-1.0/browser');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true, channel: 'msedge', args: ['--enable-webgl', '--ignore-gpu-blocklist'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1200 }, deviceScaleFactor: 1 });
  const page = await context.newPage(), errors = [];
  page.on('pageerror', e => errors.push(e.message));
  await page.goto('http://127.0.0.1:5173/');
  await page.waitForFunction(() => !document.querySelector('#start').disabled, undefined, { timeout: 120000 });
  assert.match(await page.locator('.version').innerText(), /框架场景1.0/);
  await page.locator('#start').click(); await page.locator('#pause').click();
  async function record(name) {
    const promise = page.waitForEvent('download'); await page.locator('#report').click();
    const download = await promise, file = path.join(out, name + '.json'); await download.saveAs(file);
    return JSON.parse(fs.readFileSync(file));
  }
  const initial = await record('initial');
  await page.mouse.move(1100, 600); await page.mouse.down(); await page.mouse.move(1500, 750, { steps: 12 }); await page.mouse.up();
  const rotated = await record('rotated');
  assert.deepEqual(rotated.cameraPosition, initial.cameraPosition);
  assert.notDeepEqual(rotated.cameraRotation, initial.cameraRotation);
  await page.locator('#center').click();
  const centered = await record('centered');
  assert.deepEqual(centered.cameraRotation, initial.cameraRotation);
  await page.locator('#mode').click();
  await page.keyboard.down('w'); await page.waitForTimeout(1800); await page.keyboard.up('w');
  const walked = await record('walked');
  assert.ok(Math.hypot(walked.cameraPosition[0] - centered.cameraPosition[0], walked.cameraPosition[2] - centered.cameraPosition[2]) > 1);
  await page.locator('[data-destination="trail"]').click();
  await page.waitForTimeout(4000); await page.locator('#pause').click();
  const paused = await record('paused'); await page.waitForTimeout(10000);
  const still = await record('still'); assert.deepEqual(still.cameraPosition, paused.cameraPosition);
  await page.locator('#pause').click();
  await page.waitForFunction(() => document.querySelector('#navigation-status').textContent.startsWith('已到达'), undefined, { timeout: 120000 });
  const arrived = await record('arrived');
  const destination = arrived.assets.viewpoints.find(v => v.id === 'trail').position;
  assert.ok(Math.hypot(...arrived.cameraPosition.map((v,i) => v - destination[i])) < .15);
  await page.screenshot({ path: path.join(out, 'exploration.png') });
  for (const id of ['camp','trail','creek','ridge']) {
    await page.goto('http://127.0.0.1:5173/?view=' + id);
    await page.waitForFunction(() => !document.querySelector('#start').disabled, undefined, { timeout: 120000 });
    await page.waitForTimeout(1000); await page.screenshot({ path: path.join(out, id + '.png') });
  }
  assert.deepEqual(errors, []);
  fs.writeFileSync(path.join(out, 'exploration-checks.json'), JSON.stringify({ renamed: true, dragLook: true, pausedPositionUnchanged: true, recenter: true, manualWalking: true, destinationArrival: true, pauseTenSeconds: true, source: 'manual', pageErrors: errors, visualAcceptance: 'not-reviewed', cameraImplemented: false }, null, 2));
  await browser.close(); console.log('Exploration checks passed. Real gaze and visual approval remain pending.');
})().catch(e => { console.error(e); process.exit(1); });

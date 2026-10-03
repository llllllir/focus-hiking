const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
// Uses an installed Playwright package without making it a production dependency.
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
(async () => {
  const out = path.resolve(process.env.ACCEPTANCE_OUT || 'docs/acceptance/v0.1/browser');
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ headless: true, channel: 'msedge', args: ['--enable-webgl', '--ignore-gpu-blocklist'] });
  const context = await browser.newContext({ viewport: { width: 1920, height: 1200 }, deviceScaleFactor: 1 });
  const page = await context.newPage();
  const failures = [];
  page.on('pageerror', error => failures.push(error.message));
  const url = 'http://127.0.0.1:5173';
  // Failure injection proves that a missing resource presents a retry, not a blank canvas.
  await page.route('**/forest.glb', route => route.abort());
  await page.goto(url);
  await page.locator('.error').waitFor({ state: 'visible', timeout: 60_000 });
  assert.match(await page.locator('.error').innerText(), /重新加载/);
  await page.unroute('**/forest.glb');
  await page.getByRole('button', { name: '重新加载', exact: true }).click();
  await page.waitForFunction(() => !document.querySelector('#start').disabled, undefined, { timeout: 120_000 });
  await page.screenshot({ path: path.join(out, 'start.png') });
  await page.getByRole('button', { name: '开始漫步', exact: true }).click();
  await page.waitForTimeout(1800);
  await page.getByRole('button', { name: '暂停', exact: true }).click();
  const before = await page.locator('progress').evaluate(el => el.value);
  await page.waitForTimeout(10_000);
  assert.equal(await page.locator('progress').evaluate(el => el.value), before);
  await page.getByRole('button', { name: '继续', exact: true }).click();
  await page.waitForTimeout(500);
  assert.ok(await page.locator('progress').evaluate(el => el.value) > before);
  for (let i=0; i<3; i++) {
    await page.getByRole('button', { name: '回到起点', exact: true }).click();
    await page.waitForFunction(() => document.querySelector('progress').value === 0);
    await page.getByRole('button', { name: '开始漫步', exact: true }).click();
  }
  const downloadPromise = page.waitForEvent('download');
  await page.getByRole('button', { name: '下载运行记录', exact: true }).click();
  const download = await downloadPromise;
  await download.saveAs(path.join(out, 'run.json'));
  for (const id of ['camp', 'trail', 'creek']) {
    await page.goto(`${url}/?view=${id}`);
    await page.waitForFunction(() => !document.querySelector('#start').disabled, undefined, { timeout: 120_000 });
    await page.waitForTimeout(1000);
    await page.screenshot({ path: path.join(out, id+'.png') });
  }
  fs.writeFileSync(path.join(out, 'checks.json'), JSON.stringify({ resourceFailureRetry: true, pause10Seconds: true, resume: true, restartThreeTimes: true, screenshots: ['camp','trail','creek'], pageErrors: failures, visualAcceptance: 'not-reviewed', environment: 'headless Edge; not a human desktop performance acceptance' }, null, 2));
  assert.deepEqual(failures, []);
  await browser.close();
  console.log('Browser checks passed; screenshots and measured run record saved. Visual acceptance remains pending.');
})().catch(error => { console.error(error); process.exit(1); });

const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const { chromium } = require(process.env.PLAYWRIGHT_MODULE || 'playwright');
const base = process.env.GAZE_TEST_URL || 'http://127.0.0.1:5182/?mode=gaze-scene&quality=smooth';
const out = path.resolve('docs/acceptance/gaze-upgrade/browser');
function media() {
  navigator.mediaDevices.getUserMedia = async () => {
    const canvas = document.createElement('canvas'); canvas.width = 640; canvas.height = 480;
    const ctx = canvas.getContext('2d'); ctx.fillRect(0, 0, 640, 480);
    const stream = canvas.captureStream(30); let frame = 0;
    const timer = setInterval(() => { ctx.fillStyle = frame++ % 2 ? '#010101' : '#020202'; ctx.fillRect(0, 0, 2, 2); }, 33);
    for (const track of stream.getTracks()) { const stop = track.stop.bind(track); track.stop = () => { window.__mediaStops = (window.__mediaStops || 0) + 1; clearInterval(timer); stop(); }; }
    return stream;
  };
}
function fixture() {
  document.addEventListener('DOMContentLoaded', () => {
    const badge = document.createElement('div'); badge.textContent = '自动化合成输入 · 非真人精度 / SYNTHETIC FIXTURE';
    badge.style.cssText = 'position:fixed;top:4px;left:50%;transform:translateX(-50%);z-index:99999;background:#6a321e;color:white;padding:6px 12px;font:12px sans-serif;pointer-events:none'; document.body.append(badge);
  });
  window.__fixture = { x: .5, y: .5, invalid: false, stale: false, shift: false, fatal: false };
  window.Worker = class {
    active = true;
    postMessage(message) {
      if (message.type === 'init') { setTimeout(() => { if (this.active) this.onmessage?.({ data: { type: 'ready' } }); }, window.__fixture.delayReady ? 1000 : 10); return; }
      message.bitmap.close();
      const state = window.__fixture, overlay = document.querySelector('.gaze-overlay'), target = document.querySelector('.gaze-target');
      const sampling = overlay && !overlay.hidden;
      let x = sampling ? parseFloat(target.style.left) / 100 : state.x;
      let y = sampling ? parseFloat(target.style.top) / 100 : state.y;
      if (sampling && overlay.dataset.task === 'validation' && state.validationOffset) { x += state.validationOffset.x; y += state.validationOffset.y; }
      let yaw = 0, pitch = 0;
      if (sampling && target.dataset.inside === 'false') [x, y] = [[-.55, .5], [1.55, .5], [.5, -.55], [.5, 1.55], [.5, 1.7]][Number(target.dataset.targetId.replace('away', ''))];
      if (sampling && target.dataset.targetId.startsWith('pose')) { const i = Number(target.dataset.targetId.slice(4)); yaw = i === 0 ? -5 : i === 1 ? 5 : 0; pitch = i === 2 ? -5 : i === 3 ? 5 : 0; }
      const left = { x: .5 - (x - .5) * .22 + yaw * .001, y: .5 + (y - .5) * .18 + pitch * .001, openness: .25 };
      const features = { left, right: { ...left }, yaw, pitch, roll: 0, faceX: state.shift ? .85 : .5, faceY: .5, faceScale: .4,
        vector: [left.x, left.y, left.x, left.y, .25, .25, yaw, pitch, 0, .5, .5, .4] };
      const missedScreenTarget = sampling && overlay.dataset.task === 'screen-validation' && state.missingScreenTargets?.includes(target.dataset.targetId);
      const result = state.invalid || missedScreenTarget ? { valid: false, reason: 'eyes-unavailable' } : { valid: true, features };
      setTimeout(() => { if (this.active) this.onmessage?.({ data: state.fatal ? { type: 'error', message: 'synthetic failure' } : { type: 'result', result, timestampMs: message.timestampMs - (state.stale ? 1000 : 0), processingMs: 10 } }); }, 10);
    }
    terminate() { this.active = false; }
  };
}
async function finishTask(page, timeout = 95000) {
  const end = Date.now() + timeout;
  while (Date.now() < end) {
    if (!(await page.locator('.gaze-overlay').isVisible())) return;
    const button = page.locator('[data-action="sample"]');
    if (await button.isVisible()) await button.click();
    await page.waitForTimeout(200);
  }
  throw new Error(`Task timed out: ${await page.locator('.gaze-status').innerText()}`);
}
module.exports = { media, fixture, finishTask };
if (require.main === module) (async () => {
  fs.mkdirSync(out, { recursive: true });
  const browser = await chromium.launch({ channel: 'msedge', headless: true, args: ['--use-fake-ui-for-media-stream', '--enable-webgl', '--ignore-gpu-blocklist'] });
  const report = { input: 'synthetic Canvas + Worker fixtures, NOT human camera accuracy', humanAcceptance: 'pending', checks: {}, errors: [] };
  try {
    const real = await browser.newContext({ viewport: { width: 1440, height: 1000 } }); await real.addInitScript(media);
    const rp = await real.newPage(); const requests = [];
    rp.on('request', r => requests.push(r.url())); rp.on('pageerror', e => report.errors.push(e.message));
    await rp.goto(base); await rp.locator('[data-action="start"]').click();
    await rp.waitForFunction(() => !document.querySelector('[data-action="calibrate"]').disabled, undefined, { timeout: 60000 });
    await rp.waitForFunction(() => document.querySelector('.gaze-eye-status').textContent.includes('未识别人脸'), undefined, { timeout: 20000 });
    assert.equal(await rp.locator('.gaze-screen-state').innerText(), '无法判断');
    assert.equal(await rp.locator('[data-action="scene"]').isDisabled(), true);
    assert.ok(requests.some(u => u.includes('face_landmarker.task')));
    assert.equal(requests.filter(u => !u.startsWith(new URL(base).origin)).length, 0);
    report.checks.realLocalModelNoFaceAndNoExternalRequests = true; await real.close();
    const denied = await browser.newContext(); await denied.addInitScript(() => { navigator.mediaDevices.getUserMedia = async () => { throw new DOMException('fixture', 'NotAllowedError'); }; });
    const dp = await denied.newPage(); await dp.goto(base); await dp.locator('[data-action="start"]').click();
    await dp.waitForFunction(() => document.querySelector('.gaze-status').textContent.includes('权限被拒绝'));
    report.checks.permissionDenial = true; await denied.close();
    const missing = await browser.newContext(); await missing.addInitScript(media);
    const mp = await missing.newPage(); await mp.route('**/face_landmarker.task', route => route.abort());
    await mp.goto(base); await mp.locator('[data-action="start"]').click();
    await mp.waitForFunction(() => !document.querySelector('[data-action="start"]').disabled, undefined, { timeout: 55000 });
    assert.equal(await mp.locator('[data-action="calibrate"]').isDisabled(), true);
    report.checks.missingModelAllowsRetry = true; await missing.close();

    const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, acceptDownloads: true });
    await context.addInitScript(media); await context.addInitScript(fixture);
    const page = await context.newPage(); page.on('pageerror', e => report.errors.push(e.message));
    await page.goto(base); await page.waitForSelector('.gaze-page'); await page.screenshot({ path: path.join(out, 'setup.png') });
    await page.locator('[data-action="fullscreen"]').click();
    await page.waitForFunction(() => !!document.fullscreenElement);
    await page.locator('[data-action="start"]').click(); await page.waitForFunction(() => !document.querySelector('[data-action="calibrate"]').disabled);
    await page.locator('[data-action="calibrate"]').click(); await finishTask(page);
    assert.equal(await page.locator('[data-action="validate"]').isDisabled(), false, await page.locator('.gaze-status').innerText());
    assert.equal(await page.locator('[data-action="scene"]').isDisabled(), true);
    console.log('position calibration complete');
    await page.locator('[data-action="validate"]').click(); await finishTask(page, 15000);
    assert.match(await page.locator('.gaze-report').innerText(), /达到位置门槛/);
    report.checks.positionCalibration15EpisodesAndIndependent5PointValidation = true;
    await page.locator('[data-action="screen-calibrate"]').click(); await finishTask(page);
    assert.equal(await page.locator('[data-action="screen-validate"]').isDisabled(), false, await page.locator('.gaze-status').innerText());
    console.log('screen calibration complete');
    await page.locator('[data-action="screen-validate"]').click(); await finishTask(page, 40000);
    assert.match(await page.locator('.gaze-screen-report').innerText(), /达到交互启用条件/);
    assert.equal(await page.locator('[data-action="scene"]').isDisabled(), false);
    report.checks.screenCalibration10EpisodesIndependent10EpisodeValidation = true;
    for (const action of ['export', 'screen-export']) {
      const downloadPromise = page.waitForEvent('download'); await page.locator(`[data-action="${action}"]`).click();
      const download = await downloadPromise; const csv = fs.readFileSync(await download.path(), 'utf8');
      assert.match(csv, /source/); assert.match(csv, /camera/); assert.doesNotMatch(csv, /features|irisX|base64/);
    }
    report.checks.anonymousNumericCsvExports = true;
    console.log('screen validation complete');
    for (const [state, expected] of [[{ x: 1.55, y: .5 }, '屏幕外'], [{ x: .5, y: .5, invalid: true }, '无法判断'], [{ invalid: false, stale: true }, '无法判断'], [{ stale: false, shift: true }, '无法判断'], [{ shift: false }, '屏幕内']]) {
      await page.evaluate(s => Object.assign(window.__fixture, s), state);
      await page.waitForFunction(text => document.querySelector('.gaze-screen-state').textContent === text, expected);
    }
    report.checks.offScreenBlinkStalePoseAndRecovery = true;
    await page.screenshot({ path: path.join(out, 'validated-fixture.png') });
    await page.locator('[data-action="scene"]').click();
    await page.waitForSelector('.gaze-scene-hud');
    await page.waitForFunction(() => { const b = document.querySelector('#start'); return b && !b.disabled; }, undefined, { timeout: 90000 });
    await page.locator('#start').click(); await page.locator('#mode').click();
    const goal = page.locator('[data-destination="creek"]');
    const rect = await goal.boundingBox(); const viewport = page.viewportSize();
    await page.evaluate(({ rect, viewport }) => { window.__fixture.x = (rect.x + rect.width / 2) / viewport.width; window.__fixture.y = (rect.y + rect.height / 2) / viewport.height; }, { rect, viewport });
    await page.waitForFunction(() => document.querySelector('#navigation-status').textContent.includes('沿小径前往'), undefined, { timeout: 15000 });
    report.checks.existingAttentionPortStartsActualSceneRoute = true;
    await page.screenshot({ path: path.join(out, 'scene-fixture.png') });
    const downloadPromise = page.waitForEvent('download'); await page.locator('#report').click();
    const download = await downloadPromise; const record = JSON.parse(fs.readFileSync(await download.path(), 'utf8'));
    assert.equal(record.cameraInputConnected, true); assert.equal(record.source, 'camera');
    // No camera-labelled synthetic run report is retained as acceptance evidence.
    report.checks.sceneReportsConnectedCameraSource = true;
    await page.locator('.gaze-scene-hud button').click();
    assert.equal(await page.locator('.gaze-page').isVisible(), true);
    await page.evaluate(() => document.exitFullscreen());
    await page.waitForFunction(() => document.querySelector('[data-action="scene"]').disabled);
    assert.equal(await page.locator('[data-action="validate"]').isDisabled(), true);
    report.checks.fullscreenExitInvalidatesCalibration = true;
    await page.locator('[data-action="calibrate"]').click(); await page.locator('[data-action="cancel"]').click();
    assert.equal(await page.locator('[data-action="validate"]').isDisabled(), true);
    await page.locator('[data-action="calibrate"]').click();
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => true }); document.dispatchEvent(new Event('visibilitychange')); });
    assert.equal(await page.locator('.gaze-overlay').isVisible(), true);
    assert.match(await page.locator('.gaze-task-instruction').innerText(), /已暂停/);
    await page.evaluate(() => { Object.defineProperty(document, 'hidden', { configurable: true, get: () => false }); document.dispatchEvent(new Event('visibilitychange')); });
    report.checks.cancellationAndBackgroundPreservesProgress = true;
    await page.locator('[data-action="stop"]').click();
    assert.equal(await page.locator('[data-action="start"]').isDisabled(), false);
    assert.ok(await page.evaluate(() => window.__mediaStops > 0));
    report.checks.stopAndReturnToCalibration = true;
    await page.evaluate(() => { window.__fixture.delayReady = true; });
    await page.locator('[data-action="start"]').click(); await page.locator('[data-action="stop"]').click();
    await page.waitForTimeout(1300);
    assert.equal(await page.locator('[data-action="calibrate"]').isDisabled(), true);
    await page.evaluate(() => { window.__fixture.delayReady = false; });
    await page.locator('[data-action="start"]').click(); await page.waitForFunction(() => !document.querySelector('[data-action="calibrate"]').disabled);
    await page.evaluate(() => { window.__fixture.fatal = true; });
    await page.waitForFunction(() => !document.querySelector('[data-action="start"]').disabled);
    assert.equal(await page.locator('[data-action="calibrate"]').isDisabled(), true);
    report.checks.cancelStartupAndWorkerFailure = true;
    await context.close();
    assert.deepEqual(report.errors, []);
    fs.writeFileSync(path.join(out, 'checks.json'), JSON.stringify(report, null, 2) + '\n');
    console.log(JSON.stringify(report, null, 2));
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });

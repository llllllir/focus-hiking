import test from 'node:test';
import assert from 'node:assert/strict';
import { EnvironmentStore, environmentKey, calibrationVersion, cleanSnapshot, validSnapshot, sameEnvironment, quickEntryKind } from '../src/attention/environment';
import type { CalibrationSnapshot, EnvironmentSignature } from '../src/attention/environment';
const signature: EnvironmentSignature = { screenWidth: 1440, screenHeight: 1000, width: 1440, height: 1000, pixelRatio: 1, videoWidth: 640, videoHeight: 480, deviceKey: 'a'.repeat(64) };
const coverage = { yaw: [-6, 6], pitch: [-6, 6], roll: [-7, 7], faceX: [.4, .6], faceY: [.4, .6], faceScale: [.3, .5] } as const;
function snapshot(verified = true): CalibrationSnapshot {
  return { version: calibrationVersion, positionVerified: verified, screenVerified: verified, mapping: { model: { means: Array(12).fill(0), scales: Array(12).fill(1), x: Array(13).fill(.1), y: Array(13).fill(.1), lambda: .1, basis: 'linear' }, baseline: { vector: Array(12).fill(.5), left: { x: .5, y: .5, openness: .25 }, right: { x: .5, y: .5, openness: .25 }, yaw: 0, pitch: 0, roll: 0, faceX: .5, faceY: .5, faceScale: .4 }, coverage: structuredClone(coverage) as any }, screenModel: { means: Array(9).fill(0), scales: Array(9).fill(1), weights: Array(10).fill(.1), balancedAccuracy: .8, coverage: structuredClone(coverage) as any } };
}
function storage() { const data = new Map<string, string>(); return { getItem: (k: string) => data.get(k) ?? null, setItem: (k: string, v: string) => { data.set(k, v); }, removeItem: (k: string) => { data.delete(k); } }; }
test('successful environment round-trips across reload with independent copies and no image previews', () => {
  const disk = storage(), store = new EnvironmentStore(disk), p = store.create('书桌');
  const s = snapshot(); s.mapping!.baseline.left.preview = { x: 0, y: 0, width: 1, height: 1, irisX: .5, irisY: .5 };
  store.saveSuccess(p.id, signature, s); s.mapping!.model.x[0] = 999;
  const read = new EnvironmentStore(disk).get(p.id);
  assert.equal(quickEntryKind(read), 'saved');
  assert.equal(read.saved!.mapping!.model.x[0], .1); assert.ok(!disk.getItem(environmentKey)!.includes('preview'));
  assert.equal(sameEnvironment(read.signature, signature), true);
});
test('three distinct actual attempts unlock entry and repeated callbacks count only once', () => {
  const disk = storage(), store = new EnvironmentStore(disk), p = store.create('环境A');
  for (let i = 1; i <= 3; i++) { store.recordAttempt(p.id, `attempt-${i}`, signature, snapshot(false)); store.recordAttempt(p.id, `attempt-${i}`, signature, snapshot(false)); assert.equal(store.get(p.id).attempts, i); assert.equal(quickEntryKind(store.get(p.id)), i < 3 ? null : 'retry'); }
  assert.equal(quickEntryKind(new EnvironmentStore(disk).get(p.id)), 'retry');
  store.recordAttempt(p.id, 'attempt-3', signature, snapshot()); assert.equal(store.get(p.id).attempts, 3); assert.equal(store.get(p.id).latest!.positionVerified, true);
  assert.equal(quickEntryKind(store.create('环境B')), null);
});
test('failed tests do not overwrite success and cannot be saved as successful calibration', () => {
  const store = new EnvironmentStore(storage()), p = store.create('环境');
  assert.throws(() => store.saveSuccess(p.id, signature, snapshot(false)), /只有/);
  store.saveSuccess(p.id, signature, snapshot()); store.recordAttempt(p.id, 'later', signature, snapshot(false));
  assert.equal(store.get(p.id).saved!.positionVerified, true); assert.equal(store.get(p.id).latest!.positionVerified, false);
});
test('device, viewport, scale and screen mismatches cannot reuse or mix environment counts', () => {
  const store = new EnvironmentStore(storage()), p = store.create('环境'); store.recordAttempt(p.id, 'first', signature, snapshot(false));
  for (const changed of [{ width: 1200 }, { screenWidth: 1920 }, { deviceKey: 'b'.repeat(64) }, { videoWidth: 1280 }, { pixelRatio: 2 }]) { const other = { ...signature, ...changed }; assert.equal(sameEnvironment(signature, other), false); assert.throws(() => store.recordAttempt(p.id, 'next', other, snapshot(false)), /已变化/); }
  assert.equal(store.get(p.id).attempts, 1);
});
test('corrupt storage stays intact; explicit clear repairs it; deletion removes reusable parameters', () => {
  const disk = storage(); disk.setItem(environmentKey, '{broken'); const store = new EnvironmentStore(disk); store.create('临时'); assert.equal(disk.getItem(environmentKey), '{broken'); assert.match(store.warning, /原数据已保留/);
  store.clear(); const p = store.create('恢复'); store.saveSuccess(p.id, signature, snapshot()); store.remove(p.id); assert.equal(new EnvironmentStore(disk).list().length, 0);
});
test('quota denial keeps session usable but never claims persistence', () => {
  const store = new EnvironmentStore({ getItem: () => null, setItem: () => { throw new Error('quota'); }, removeItem: () => {} }); const p = store.create('临时'); store.saveSuccess(p.id, signature, snapshot()); assert.match(store.warning, /未能保存/); assert.equal(quickEntryKind(store.get(p.id)), 'saved');
});
test('malformed coefficient dimensions, scales, missing data, and nonfinite values reject restore', () => {
  let s = snapshot(); assert.equal(validSnapshot(s), true);
  const cases = [() => { s.mapping!.model.x.pop(); }, () => { s.screenModel!.scales[0] = 0; }, () => { s.mapping!.baseline.vector[0] = NaN; }, () => { s.mapping!.coverage.yaw = [8, -8]; }];
  for (const change of cases) { s = snapshot(); change(); assert.equal(validSnapshot(s), false); assert.throws(() => cleanSnapshot(s)); }
  assert.equal(validSnapshot({ ...snapshot(), version: 'old-model' }), false);
});

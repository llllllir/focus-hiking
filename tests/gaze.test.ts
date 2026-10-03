import test from 'node:test';
import assert from 'node:assert/strict';
import { extractFeatures, eyeDisplay, poseCompatible } from '../src/attention/features';
import type { Point } from '../src/attention/features';
import { fitRidge, predict, chooseRidge } from '../src/attention/regression';
import type { CalibrationRow } from '../src/attention/regression';
import { measurementSummary, measurementsCsv, TimeSmoother } from '../src/attention/measurement';
import type { MeasurementRow } from '../src/attention/measurement';

const identity = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
function landmarks(shift = 0): Point[] {
  const points = Array.from({ length: 478 }, () => ({ x: .5, y: .5 }));
  Object.assign(points[234], { x: .2 }); Object.assign(points[454], { x: .8 });
  Object.assign(points[10], { y: .15 }); Object.assign(points[152], { y: .85 });
  for (const [a, b, up, down, indices, x] of [
    [33, 133, 159, 145, [469, 470, 471, 472], .35],
    [362, 263, 386, 374, [474, 475, 476, 477], .65],
  ] as const) {
    Object.assign(points[a], { x: x - .06, y: .4 }); Object.assign(points[b], { x: x + .06, y: .4 });
    Object.assign(points[up], { x, y: .38 }); Object.assign(points[down], { x, y: .42 });
    for (const i of indices) Object.assign(points[i], { x: x + shift, y: .4 });
  }
  return points;
}
test('eye-local features ignore face translation and preserve anatomical sides', () => {
  const original = extractFeatures(landmarks(), identity, 640, 480);
  const shifted = extractFeatures(landmarks().map(p => ({ x: p.x + .05, y: p.y + .03 })), identity, 640, 480);
  assert.ok(original.valid && shifted.valid);
  assert.ok(Math.abs(original.features.left.x - shifted.features.left.x) < 1e-9);
  assert.ok(Math.abs(original.features.right.y - shifted.features.right.y) < 1e-9);
  assert.ok(original.features.faceX !== shifted.features.faceX);
  assert.ok(original.features.vector.every(Number.isFinite));
});
test('presentation mirrors eye movement exactly once, independently of camera aspect ratio', () => {
  const a = extractFeatures(landmarks(-.02), identity, 640, 480);
  const b = extractFeatures(landmarks(.02), identity, 1280, 720);
  assert.ok(a.valid && b.valid);
  assert.ok(eyeDisplay(a.features).x > .5);
  assert.ok(eyeDisplay(b.features).x < .5);
});
test('missing face, closed eyes, nonfinite landmarks and extreme poses are invalid', () => {
  assert.equal(extractFeatures([], identity, 640, 480).valid, false);
  const closed = landmarks(); closed[145].y = closed[159].y;
  assert.equal(extractFeatures(closed, identity, 640, 480).valid, false);
  const broken = landmarks(); broken[469].x = NaN;
  assert.equal(extractFeatures(broken, identity, 640, 480).valid, false);
  const turned = [...identity]; turned[2] = Math.sin(Math.PI / 4);
  assert.equal(extractFeatures(landmarks(), turned, 640, 480).valid, false);
});
test('seat movement outside calibration coverage disables mapping', () => {
  const result = extractFeatures(landmarks(), identity, 640, 480);
  assert.ok(result.valid);
  assert.ok(poseCompatible(result.features, result.features));
  assert.equal(poseCompatible({ ...result.features, faceScale: result.features.faceScale * 1.3 }, result.features), false);
  assert.equal(poseCompatible({ ...result.features, faceX: result.features.faceX + .2 }, result.features), false);
});
test('head pose proxy removes similarity scale before yaw range checking', () => {
  const radians = 25 * Math.PI / 180;
  const matrix = [...identity];
  matrix[0] = Math.cos(radians) * .3; matrix[2] = -Math.sin(radians) * .3;
  const result = extractFeatures(landmarks(), matrix, 640, 480);
  assert.equal(result.valid, false);
  if (!result.valid) assert.equal(result.reason, 'pose-out-of-range');
});
function rows(): CalibrationRow[] {
  return [.1, .5, .9].flatMap((y, iy) => [.1, .5, .9].flatMap((x, ix) => Array.from({ length: 15 }, (_, k) => ({
    features: [x, y, .3, x, (k - 7) * .0001], x, y, targetId: `c${iy}${ix}`,
  }))));
}
test('ridge handles correlated and constant features, chooses lambda without final validation', () => {
  const model = chooseRidge(rows());
  const p = predict(model, [.25, .75, .3, .25, 0]);
  assert.ok(Math.abs(p.x - .25) < .015 && Math.abs(p.y - .75) < .015);
  assert.ok(predict(model, [2, .75, .3, 2, 0]).x > 1, 'prediction must not be clamped');
  assert.throws(() => chooseRidge(rows().filter(r => r.targetId !== 'c00')));
  assert.throws(() => fitRidge([{ features: [NaN], x: 0, y: 0, targetId: 'broken' }], 1));
});
test('validation error uses CSS pixel diagonal and includes invalid attempts in denominator', () => {
  const base: MeasurementRow = { timestampMs: 1, targetId: 'v1', targetX: .5, targetY: .5, x: .5, y: .5, valid: true, reason: null,
    width: 1600, height: 900, processingMs: 30, pipelineMs: 50 };
  const data = [base, { ...base, x: 1.5, reason: 'off-screen' }, { ...base, x: null, y: null, valid: false, reason: 'no-face' }];
  const summary = measurementSummary(data);
  assert.equal(summary.total, 3); assert.equal(summary.validRate, 2 / 3);
  assert.ok(summary.p90! > .8, 'off-screen error must not be hidden');
  assert.match(measurementsCsv(data), /camera/); assert.match(measurementsCsv(data), /no-face/);
  assert.ok(!measurementsCsv(data).includes('features'));
});
test('time smoothing restarts after signal loss and cannot apply an old position on recovery', () => {
  const smooth = new TimeSmoother(65);
  smooth.update(0, 0, 0);
  assert.ok(smooth.update(1, 1, 65).x > .6);
  smooth.reset(); assert.deepEqual(smooth.update(.9, .2, 100), { x: .9, y: .2 });
  assert.deepEqual(smooth.update(.1, .8, 1000), { x: .1, y: .8 });
});

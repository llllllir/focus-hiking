import test from 'node:test';
import assert from 'node:assert/strict';
import { stableSamples, neutralFeatures, poseCoverage } from '../src/attention/calibration';
import { OneEuroSmoother } from '../src/attention/filter';
import { chooseRidge, predict } from '../src/attention/regression';
import { fitScreen, screenEvidence, ScreenStabilizer } from '../src/attention/screen';
import type { ScreenRow } from '../src/attention/screen';
import { GazePipeline } from '../src/attention/pipeline';
import type { EyeFeatures } from '../src/attention/features';
import { extractFeatures } from '../src/attention/features';
import { DwellTracker } from '../src/attention/dwell';
import { screenSummary } from '../src/attention/measurement';

function features(x: number, y: number, yaw = 0): EyeFeatures {
  const left = { x: .5 - (x - .5) * .22, y: .5 + (y - .5) * .18, openness: .25 };
  return { left, right: { ...left }, yaw, pitch: 0, roll: 0, faceX: .5, faceY: .5, faceScale: .4,
    vector: [left.x, left.y, left.x, left.y, .25, .25, yaw, 0, 0, .5, .5, .4] };
}
const rows = [0, 1].flatMap(round => [.1, .5, .9].flatMap((y, yi) => [.1, .5, .9].flatMap((x, xi) => Array.from({ length: 14 }, () => ({ features: features(x, y).vector, x, y, targetId: `${xi}${yi}`, round })))));
const model = chooseRidge(rows);
const screenRows: ScreenRow[] = [0, 1].flatMap(round => [
  ...[[.5, .5], [.05, .05], [.95, .05], [.05, .95], [.95, .95]].map(([x, y], i) => ({ features: features(x, y), inside: true, targetId: `in${i}`, round })),
  ...[[-.55, .5], [1.55, .5], [.5, -.55], [.5, 1.55], [.5, 1.7]].map(([x, y], i) => ({ features: features(x, y), inside: false, targetId: `out${i}`, round })),
].flatMap(row => Array.from({ length: 14 }, () => row)));
const classifier = fitScreen(screenRows);
function pipeline() {
  const p = new GazePipeline(); const f = features(.5, .5);
  p.mapping = { model, baseline: f, coverage: poseCoverage([f]) }; p.screenModel = classifier;
  p.positionVerified = true; p.screenVerified = true; p.interactionEnabled = true;
  return p;
}
test('vertical feature does not move when only lids change', () => {
  const points = Array.from({ length: 478 }, () => ({ x: .5, y: .5 }));
  points[234].x = .2; points[454].x = .8; points[10].y = .1; points[152].y = .9;
  for (const [a, b, up, down, iris, x] of [[33, 133, 159, 145, [469, 470, 471, 472], .35], [362, 263, 386, 374, [474, 475, 476, 477], .65]] as const) {
    points[a] = { x: x - .06, y: .4 }; points[b] = { x: x + .06, y: .4 };
    points[up] = { x, y: .38 }; points[down] = { x, y: .42 }; for (const i of iris) points[i] = { x, y: .405 };
  }
  const matrix = [1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1];
  const a = extractFeatures(points, matrix, 640, 480);
  points[159].y = .39; points[145].y = .415; points[386].y = .39; points[374].y = .415;
  const b = extractFeatures(points, matrix, 640, 480);
  assert.ok(a.valid && b.valid); assert.equal(a.features.left.y, b.features.left.y);
  assert.notEqual(a.features.left.openness, b.features.left.openness);
});
test('stable calibration rejects a saccade outlier without dropping paired labels', () => {
  const data = Array.from({ length: 15 }, () => features(.5, .5)); data[7] = features(3, 2);
  const indices = stableSamples(data); assert.equal(indices.length, 14); assert.ok(!indices.includes(7));
  assert.deepEqual(stableSamples([features(.5, .5)]), []);
  assert.equal(neutralFeatures(data).left.x, .5);
});
test('grouped ridge preserves unseen target accuracy and unbounded coordinates', () => {
  const p = predict(model, features(.3, .7).vector);
  assert.ok(Math.abs(p.x - .3) < .02 && Math.abs(p.y - .7) < .02);
  assert.ok(predict(model, features(1.5, .5).vector).x > 1.4);
  assert.ok(model.marginX! >= .015 && model.marginY! >= .015);
  assert.equal(model.basis, 'linear', 'linear data should not select unnecessary complexity');
});
test('screen classifier separates corners from four-sided outside and keyboard episodes', () => {
  for (const [x, y] of [[.5, .5], [.14, .14], [.86, .86]]) assert.equal(screenEvidence(classifier, features(x, y), { x, y }, { x: .02, y: .02 }, true).state, 'on-screen');
  for (const [x, y] of [[-.55, .5], [1.55, .5], [.5, -.55], [.5, 1.7]]) assert.equal(screenEvidence(classifier, features(x, y), { x, y }, { x: .02, y: .02 }, true).state, 'off-screen');
  assert.equal(screenEvidence(classifier, features(.5, .5), { x: .5, y: .5 }, { x: .02, y: .02 }, false).reason, 'fullscreen-required');
  assert.equal(screenEvidence(classifier, features(.99, .5), { x: .99, y: .5 }, { x: .03, y: .03 }, true).state, 'unknown');
  assert.throws(() => fitScreen(screenRows.map(r => ({ ...r, features: features(.5, .5) }))), /区分不足/);
});
test('unknown, time gaps and clock reversal break screen-state dwell', () => {
  const s = new ScreenStabilizer(), away = { state: 'off-screen' as const, reason: 'off-screen', score: .1 };
  for (const t of [0, 100, 200, 300]) assert.equal(s.update(away, t).state, 'unknown');
  assert.equal(s.update(away, 400).state, 'off-screen');
  assert.equal(s.update({ state: 'unknown', reason: 'eyes-unavailable', score: null }, 450).state, 'unknown');
  assert.equal(s.update(away, 500).state, 'unknown');
  assert.equal(s.update(away, 900).state, 'unknown');
  assert.equal(s.update(away, 850).state, 'unknown');
});
test('unverified calibration without explicit entry consent never emits interactive samples', () => {
  const p = pipeline(); p.positionVerified = false;
  let r = p.process({ valid: true, features: features(.5, .5) }, 0, true);
  for (let t = 100; t <= 500; t += 100) r = p.process({ valid: true, features: features(.5, .5) }, t, true);
  assert.equal(r.screen.state, 'on-screen'); assert.equal(r.sample.valid, false); assert.ok(r.position);
  p.positionVerified = true; p.screenVerified = false;
  assert.equal(p.process({ valid: true, features: features(.5, .5) }, 600, true).sample.valid, false);
});
test('phase8 opt-in preserves failed validation while allowing calibrated live interaction', () => {
  const p = pipeline(); p.positionVerified = false; p.screenVerified = false;
  assert.equal(p.entryReady, false);
  p.unverifiedEntry = true;
  assert.equal(p.entryReady, true);
  let r = p.process({ valid: true, features: features(.5, .5) }, 0, true);
  for (let t = 100; t <= 500; t += 100) r = p.process({ valid: true, features: features(.5, .5) }, t, true);
  assert.equal(r.sample.valid, true);
  assert.equal(p.positionVerified, false); assert.equal(p.screenVerified, false);
  for (const reason of ['eyes-unavailable', 'no-face', 'stale-frame', 'background']) {
    assert.equal(p.process({ valid: false, reason }, 600, true).sample.valid, false);
  }
  for (let t = 700; t <= 1400; t += 100) assert.equal(p.process({ valid: true, features: features(1.55, .5) }, t, true).sample.valid, false);
  assert.equal(p.process({ valid: true, features: features(.5, .5) }, 1500, false).sample.valid, false);
  p.clear(); assert.equal(p.unverifiedEntry, false); assert.equal(p.entryReady, false);
});
test('phase8 consent cannot replace missing models or enable paused interaction', () => {
  const p = pipeline(); p.unverifiedEntry = true; p.interactionEnabled = false;
  for (let t = 0; t < 1000; t += 100) assert.equal(p.process({ valid: true, features: features(.5, .5) }, t, true).sample.valid, false);
  p.screenModel = null; assert.equal(p.entryReady, false);
  p.screenModel = classifier; p.mapping = null; assert.equal(p.entryReady, false);
});
test('camera decisions drive one scene confirmation; blink, offscreen and pause never confirm', () => {
  const p = pipeline(), dwell = new DwellTracker();
  const target = { id: 'explore-creek', x: .3, y: .3, width: .4, height: .4, enabled: true };
  dwell.setTargets([target]);
  const events = [];
  for (let t = 0; t < 2400; t += 100) events.push(...dwell.process(p.process({ valid: true, features: features(.5, .5) }, t, true).sample));
  assert.equal(events.filter(e => e.type === 'targetConfirmed').length, 1);
  dwell.setTargets([{ ...target, enabled: false }]); dwell.setTargets([target]);
  for (let t = 2400; t < 3400; t += 100) assert.equal(dwell.process(p.process({ valid: true, features: features(.5, .5) }, t, true).sample).some(e => e.type === 'targetConfirmed'), false);
  const blink = p.process({ valid: false, reason: 'eyes-unavailable' }, 3400, true);
  assert.equal(blink.screen.state, 'unknown'); assert.equal(blink.sensorValid, false); dwell.process(blink.sample);
  for (let t = 3500; t < 5500; t += 100) {
    const r = p.process({ valid: true, features: features(1.55, .5) }, t, true);
    assert.equal(r.sample.valid, false); assert.equal(dwell.process(r.sample).some(e => e.type === 'targetConfirmed'), false);
  }
  p.interactionEnabled = false;
  for (let t = 5500; t < 7500; t += 100) assert.equal(p.process({ valid: true, features: features(.5, .5) }, t, true).sample.valid, false);
});
test('out-of-coverage head pose, half-blink and fullscreen loss cannot enter the scene', () => {
  const p = pipeline();
  assert.equal(p.process({ valid: true, features: features(.5, .5, 14) }, 0, true).screen.state, 'unknown');
  const f = features(.5, .5); f.left.openness = .09;
  assert.equal(p.process({ valid: true, features: f }, 100, true).sample.invalidReason, 'eyes-unavailable');
  assert.equal(p.process({ valid: true, features: features(.5, .5) }, 200, false).sample.valid, false);
  p.clear(); assert.equal(p.positionVerified, false); assert.equal(p.screenModel, null);
});
test('screen validation cannot pass by rejecting all difficult samples', () => {
  const data = [{ inside: true, state: 'on-screen' as const }, { inside: false, state: 'unknown' as const }];
  assert.equal(screenSummary(data).falseOn, 0); assert.equal(screenSummary(data).offRecall, 0); assert.equal(screenSummary(data).passed, false);
  assert.equal(screenSummary([]).passed, false);
});
test('One Euro settles jitter, follows a step and resets after loss', () => {
  const f = new OneEuroSmoother(); f.update(.5, .5, 0);
  assert.ok(Math.abs(f.update(.51, .5, 67).x - .5) < .01);
  let p = { x: .5, y: .5 }; for (let t = 134; t < 400; t += 67) p = f.update(.9, .5, t);
  assert.ok(p.x > .85); f.reset(); assert.deepEqual(f.update(.1, .2, 500), { x: .1, y: .2 });
});

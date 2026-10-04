import test from 'node:test';
import assert from 'node:assert/strict';
import { positionCalibrationPlan, positionEntryPassed } from '../src/attention/entry-policy';
import { screenSummary, measurementsCsv } from '../src/attention/measurement';
import { chooseRidge } from '../src/attention/regression';
import { fitScreen, screenEvidence } from '../src/attention/screen';
import type { EyeFeatures } from '../src/attention/features';

const features = (x: number, y: number): EyeFeatures => {
  const left = { x: .5 - (x - .5) * .22, y: .5 + (y - .5) * .18, openness: .25 };
  return { left, right: { ...left }, yaw: 0, pitch: 0, roll: 0, faceX: .5, faceY: .5, faceScale: .4,
    vector: [left.x, left.y, left.x, left.y, .25, .25, 0, 0, 0, .5, .5, .4] };
};
test('fifteen-step plan covers all nine locations and supplies independent rounds to screen fitting', () => {
  const plan = positionCalibrationPlan();
  assert.equal(plan.length, 15); assert.equal(new Set(plan.map(t => t.id)).size, 9);
  assert.equal(new Set(plan.filter(t => t.round === 1).map(t => t.id)).size, 5);
  const data = plan.flatMap(t => Array.from({ length: 8 }, () => ({ features: features(t.x, t.y), inside: true, targetId: t.id, round: t.round })));
  const ridge = chooseRidge(data.map(r => { const t = plan.find(t => t.id === r.targetId)!; return { ...r, features: r.features.vector, x: t.x, y: t.y }; }));
  assert.ok(Number.isFinite(ridge.cvError));
  const off = [0, 1].flatMap(round => [[-.55, .5], [1.55, .5], [.5, -.55], [.5, 1.55], [.5, 1.7]].flatMap(([x, y], i) => Array.from({ length: 8 }, () => ({ features: features(x, y), inside: false, targetId: `away${i}`, round }))));
  const model = fitScreen([...data, ...off]);
  // Large coordinate CV uncertainty no longer blocks the center of the entire screen.
  assert.equal(screenEvidence(model, features(.5, .5), { x: .5, y: .5 }, { x: .6, y: .6 }, true).state, 'on-screen');
  assert.equal(screenEvidence(model, features(1.55, .5), { x: 1.55, y: .5 }, { x: .6, y: .6 }, true).state, 'off-screen');
});
test('easy position entry accepts moderate error but rejects gross error and unavailable measurements', () => {
  const csv = measurementsCsv([{ timestampMs: 0, targetId: 'v1', targetX: .5, targetY: .5, x: .6, y: .5, valid: true, reason: null, width: 1000, height: 1000, processingMs: 10, pipelineMs: 12 }]);
  assert.match(csv, /source,entryPolicy,/); assert.match(csv, /easy-entry-v1/);
  assert.equal(positionEntryPassed({ validRate: .75, median: .12, p90: .22 }), true);
  assert.equal(positionEntryPassed({ validRate: .69, median: .1, p90: .2 }), false);
  assert.equal(positionEntryPassed({ validRate: 1, median: .16, p90: .22 }), false);
  assert.equal(positionEntryPassed({ validRate: 1, median: .12, p90: .26 }), false);
  assert.equal(positionEntryPassed({ validRate: 0, median: null, p90: null }), false);
  assert.equal(positionEntryPassed({ validRate: 1, median: NaN, p90: .2 }), false);
});
test('screen entry tolerates twenty percent unknown, but missing evidence and reversed classes fail', () => {
  const data = [true, false].flatMap(inside => Array.from({ length: 10 }, (_, i) => ({ inside, state: i < 8 ? inside ? 'on-screen' as const : 'off-screen' as const : 'unknown' as const })));
  assert.equal(screenSummary(data).passed, true);
  assert.equal(screenSummary(data.map(r => ({ ...r, state: 'unknown' as const }))).passed, false);
  assert.equal(screenSummary(data.map(r => ({ ...r, state: r.inside ? 'off-screen' as const : 'on-screen' as const }))).passed, false);
  assert.equal(screenSummary(data.filter(r => r.inside)).passed, false);
});

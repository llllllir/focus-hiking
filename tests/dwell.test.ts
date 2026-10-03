import { test } from 'node:test';
import assert from 'node:assert/strict';
import { DwellTracker } from '../src/attention/dwell.ts';
import type { GazeSample } from '../src/contracts/index.ts';
const target = { id: 'sign', x: .3, y: .3, width: .4, height: .4, enabled: true };
const sample = (timestampMs: number, valid = true): GazeSample => ({ timestampMs, x: valid ? .5 : null, y: valid ? .5 : null, valid, invalidReason: valid ? null : 'lost', source: 'simulated' });
test('confirmation requires 1200ms and cannot repeat until target is re-enabled', () => {
  const tracker = new DwellTracker(); tracker.setTargets([target]);
  let confirmations = 0;
  for (let t = 0; t <= 3000; t += 50) confirmations += tracker.process(sample(t)).filter(e => e.type === 'targetConfirmed').length;
  assert.equal(confirmations, 1);
  tracker.setTargets([{ ...target, enabled: false }]); tracker.setTargets([target]);
  for (let t = 3050; t <= 4500; t += 50) confirmations += tracker.process(sample(t)).filter(e => e.type === 'targetConfirmed').length;
  assert.equal(confirmations, 2);
});
test('invalid samples reset accumulation and disabled regions cannot confirm', () => {
  const tracker = new DwellTracker(); tracker.setTargets([target]);
  for (let t = 0; t <= 1000; t += 50) tracker.process(sample(t));
  assert.equal(tracker.process(sample(1050, false))[0]?.type, 'signalLost');
  assert.equal(tracker.process(sample(1100))[0]?.progress, 0);
  tracker.setTargets([{ ...target, enabled: false }]);
  assert.deepEqual(tracker.process(sample(1150)), []);
});
test('long stalls, background reset and off-screen predictions do not accumulate', () => {
  const tracker = new DwellTracker(); tracker.setTargets([target]);
  tracker.process(sample(0)); tracker.process(sample(50));
  assert.equal(tracker.process(sample(5000))[0]?.progress, 0);
  tracker.reset(); assert.equal(tracker.process(sample(5050))[0]?.progress, 0);
  assert.deepEqual(tracker.process({ ...sample(5100), x: -1 }), []);
});

import { test } from 'node:test';
import assert from 'node:assert/strict';
import { findTrailPath, TrailWalker } from '../src/game/navigation';
import type { Trail } from '../src/game/navigation';

const trails: Trail[] = [
  { id: 'main', label: '', points: [[0, 0, 0], [0, 1, -10], [0, 2, -20]] },
  { id: 'branch', label: '', points: [[0, 1, -10], [10, 3, -10], [10, 4, -20]] },
];
test('branch selection and return follow connected trails instead of crossing the forest', () => {
  const path = findTrailPath(trails, [0, 0, -2], [10, 4, -20]);
  assert.deepEqual(path.slice(1), [[0, 1, -10], [10, 3, -10], [10, 4, -20]]);
  const reverse = findTrailPath(trails, [10, 4, -20], [0, 0, 0]);
  assert.deepEqual(reverse.at(-1), [0, 0, 0]);
});
test('walker keeps elevation, speed and endpoint; stop prevents further movement', () => {
  const walker = new TrailWalker([0, 0, 0]); walker.go([[0, 2, -3]]);
  for (let i = 0; i < 100; i++) walker.update(.1);
  assert.deepEqual(walker.position, [0, 2, -3]); assert.equal(walker.moving, false);
  walker.go([[10, 4, -20]]); walker.update(.1); walker.stop();
  const saved = [...walker.position]; walker.update(.1); assert.deepEqual(walker.position, saved);
});

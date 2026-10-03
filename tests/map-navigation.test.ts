import { test } from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { findTrailPath, TrailWalker } from '../src/game/navigation';
import type { Point, Trail } from '../src/game/navigation';
const map = JSON.parse(readFileSync('public/assets/forest.json', 'utf8')) as { trails: Trail[]; viewpoints: { id: string; position: Point }[] };
test('exported map connects all destinations and returns without teleportation', () => {
  const camp = map.viewpoints.find(v => v.id === 'camp')!.position;
  assert.equal(map.trails.length, 3);
  for (const destination of map.viewpoints) {
    const route = findTrailPath(map.trails, camp, destination.position);
    assert.ok(route.length > 0, destination.id);
    const walker = new TrailWalker(camp); walker.go(route);
    for (let i = 0; i < 5000; i++) {
      const before = [...walker.position]; walker.update(.1);
      assert.ok(Math.hypot(...walker.position.map((v,k) => v-before[k])) <= .145001);
    }
    assert.equal(walker.moving, false);
    assert.ok(Math.hypot(...walker.position.map((v,k) => v-destination.position[k])) < .15);
    assert.ok(findTrailPath(map.trails, destination.position, camp).length > 0);
  }
});
test('map includes at least five metres of elevation change on connected walking trails', () => {
  const heights = map.trails.flatMap(t => t.points.map(p => p[1]));
  assert.ok(Math.max(...heights) - Math.min(...heights) >= 5);
});

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

test('scene 2 triples each playable dimension and provides a connected high summit', () => {
  const manifest = JSON.parse(readFileSync('public/assets/forest.json', 'utf8'));
  assert.equal(manifest.version, '场景2.0');
  assert.equal(manifest.bounds.maxX-manifest.bounds.minX, 130*3);
  assert.equal(manifest.bounds.maxZ-manifest.bounds.minZ, 127*3);
  assert.deepEqual(manifest.terrainSize, [480,480]);
  const heights = map.trails.flatMap(t=>t.points.map(p=>p[1]));
  assert.ok(Math.max(...heights)-Math.min(...heights)>=20);
  const summit = map.viewpoints.find(v=>v.id==='ridge')!.position;
  assert.ok(summit[1]-map.viewpoints[0].position[1]>=20);
});

test('tent footprint and entrance are cleared of rock/tree obstacles with an open doorway', () => {
  const manifest = JSON.parse(readFileSync('public/assets/forest.json', 'utf8'));
  const tent=manifest.tent;
  assert.ok(tent.doorWidth>=1.5 && tent.doorHeight>=2);
  assert.ok(manifest.obstacles.every((o:{x:number;z:number})=>Math.hypot(o.x-tent.center[0],o.z-tent.center[2])>=tent.clearanceRadius));
  assert.ok(!manifest.solids.some((b:{minX:number;maxX:number;minZ:number;maxZ:number})=>tent.entrance[0]>b.minX-.25 && tent.entrance[0]<b.maxX+.25 && tent.entrance[2]>b.minZ-.25 && tent.entrance[2]<b.maxZ+.25));
});

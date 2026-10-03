import { test } from 'node:test';
import assert from 'node:assert/strict';
import { Tour } from '../src/game/tour.ts';
test('pause for ten seconds does not move; resume continues from the same position', () => {
  const tour = new Tour(); tour.start(); tour.advance(1234); tour.pause();
  tour.advance(10_000); assert.equal(tour.elapsedMs, 1234);
  tour.start(); tour.advance(100); assert.equal(tour.elapsedMs, 1334);
});
test('three restarts reset state and complete route never overflows', () => {
  const tour = new Tour(1000);
  for (let i = 0; i < 3; i++) { tour.start(); tour.advance(400); tour.restart(); assert.equal(tour.progress, 0); assert.equal(tour.state, 'ready'); }
  tour.start(); tour.advance(5000); assert.equal(tour.state, 'completed'); assert.equal(tour.progress, 1);
  tour.advance(100); assert.equal(tour.elapsedMs, 1000);
});
test('negative/non-finite times cannot move the route', () => {
  const tour = new Tour(); tour.start(); tour.advance(-100); tour.advance(NaN); assert.equal(tour.progress, 0);
});

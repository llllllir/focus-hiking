export type Point = [number, number, number];
export interface Trail { id: string; label: string; points: Point[] }

/** Scene-owned trail graph. A supplies confirmations, never camera or mesh objects. */
export function findTrailPath(trails: Trail[], from: Point, to: Point): Point[] {
  const nodes: Point[] = [], edges: Map<number, number>[] = [];
  const index = (point: Point) => {
    let id = nodes.findIndex(p => Math.hypot(p[0] - point[0], p[2] - point[2]) < .1);
    if (id < 0) { id = nodes.length; nodes.push(point); edges.push(new Map()); }
    return id;
  };
  for (const trail of trails) for (let i = 1; i < trail.points.length; i++) {
    const a = index(trail.points[i - 1]), b = index(trail.points[i]);
    const distance = Math.hypot(...nodes[a].map((v, k) => v - nodes[b][k]));
    edges[a].set(b, distance); edges[b].set(a, distance);
  }
  // Project onto edges so selecting a nearby waypoint cannot cut across the forest.
  const insert = (point: Point) => {
    let best = Infinity, pair = [0, 0], projected = nodes[0];
    edges.forEach((neighbors, a) => neighbors.forEach((_, b) => {
      const dx = nodes[b][0] - nodes[a][0], dz = nodes[b][2] - nodes[a][2];
      const t = Math.max(0, Math.min(1, ((point[0] - nodes[a][0]) * dx + (point[2] - nodes[a][2]) * dz) / (dx * dx + dz * dz || 1)));
      const p = nodes[a].map((v, k) => v + (nodes[b][k] - v) * t) as Point;
      const d = Math.hypot(p[0] - point[0], p[2] - point[2]);
      if (d < best) { best = d; pair = [a, b]; projected = p; }
    }));
    const id = index(projected);
    for (const neighbor of pair) if (neighbor !== id) {
      const d = Math.hypot(...projected.map((v, k) => v - nodes[neighbor][k]));
      edges[id].set(neighbor, d); edges[neighbor].set(id, d);
    }
    return id;
  };
  if (!nodes.length) return [];
  const start = insert(from), goal = insert(to);
  const costs = nodes.map(() => Infinity), previous = nodes.map(() => -1), remaining = new Set(nodes.map((_, i) => i));
  costs[start] = 0;
  while (remaining.size) {
    const a = [...remaining].reduce((best, id) => costs[id] < costs[best] ? id : best);
    if (!Number.isFinite(costs[a])) return [];
    remaining.delete(a);
    if (a === goal) break;
    edges[a].forEach((d, b) => { if (costs[a] + d < costs[b]) { costs[b] = costs[a] + d; previous[b] = a; } });
  }
  const result: Point[] = [];
  for (let id = goal; id !== -1; id = previous[id]) { result.unshift(nodes[id]); if (id === start) break; }
  return result;
}

export class TrailWalker {
  position: Point;
  distance = 0;
  private path: Point[] = [];
  constructor(origin: Point) { this.position = [...origin]; }
  get moving() { return this.path.length > 0; }
  go(path: Point[]) { this.path = path.map(p => [...p]); }
  stop() { this.path = []; }
  update(seconds: number) {
    let budget = Math.max(0, Math.min(seconds, .1)) * 1.45;
    while (budget > 0 && this.path.length) {
      const target = this.path[0], delta = target.map((v, k) => v - this.position[k]);
      const length = Math.hypot(...delta);
      if (length <= budget) { this.position = [...target]; this.path.shift(); budget -= length; this.distance += length; }
      else { this.position = this.position.map((v, k) => v + delta[k] * budget / length) as Point; this.distance += budget; budget = 0; }
    }
  }
}

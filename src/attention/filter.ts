// One Euro filtering: speed-dependent cutoff, seconds-based and reset on gaps.
export class OneEuroSmoother {
  private last: { x: number; y: number; rawX: number; rawY: number; dx: number; dy: number; time: number } | null = null;
  constructor(private minCutoff = 1.5, private beta = 6) {}
  reset() { this.last = null; }
  update(x: number, y: number, time: number) {
    const p = this.last;
    if (!p || time <= p.time || time - p.time > 250) {
      this.last = { x, y, rawX: x, rawY: y, dx: 0, dy: 0, time };
      return { x, y };
    }
    const dt = (time - p.time) / 1000;
    const alpha = (cutoff: number) => 1 / (1 + 1 / (2 * Math.PI * cutoff * dt));
    const da = alpha(1);
    const dx = p.dx + da * ((x - p.rawX) / dt - p.dx), dy = p.dy + da * ((y - p.rawY) / dt - p.dy);
    const ax = alpha(this.minCutoff + this.beta * Math.abs(dx)), ay = alpha(this.minCutoff + this.beta * Math.abs(dy));
    this.last = { x: p.x + ax * (x - p.x), y: p.y + ay * (y - p.y), rawX: x, rawY: y, dx, dy, time };
    return { x: this.last.x, y: this.last.y };
  }
}

export type TourState = 'ready' | 'running' | 'paused' | 'completed';
export class Tour {
  state: TourState = 'ready';
  elapsedMs = 0;
  constructor(readonly durationMs = 120_000) {}
  get progress() { return Math.min(1, this.elapsedMs / this.durationMs); }
  start() { if (this.state === 'ready' || this.state === 'paused') this.state = 'running'; }
  pause() { if (this.state === 'running') this.state = 'paused'; }
  restart() { this.elapsedMs = 0; this.state = 'ready'; }
  advance(deltaMs: number) {
    if (this.state !== 'running' || !Number.isFinite(deltaMs) || deltaMs < 0) return;
    this.elapsedMs = Math.min(this.durationMs, this.elapsedMs + deltaMs);
    if (this.elapsedMs === this.durationMs) this.state = 'completed';
  }
}

import type { GazeEvent, GazeSample, TargetRegion } from '../contracts';

/** Deterministic M1 event adapter. Camera inference is deliberately not implemented. */
export class DwellTracker {
  private targets: TargetRegion[] = [];
  private locked = new Set<string>();
  private current: string | null = null;
  private elapsed = 0;
  private previous: number | null = null;
  private wasValid = false;

  constructor(private readonly thresholdMs = 1200) {}

  setTargets(targets: TargetRegion[]) {
    const enabledBefore = new Set(this.targets.filter(t => t.enabled).map(t => t.id));
    for (const target of targets) {
      if (!target.enabled || !enabledBefore.has(target.id)) this.locked.delete(target.id);
    }
    this.targets = targets.map(t => ({ ...t }));
    if (!this.targets.some(t => t.id === this.current && t.enabled)) this.reset();
  }

  reset() { this.current = null; this.elapsed = 0; this.previous = null; this.wasValid = false; }

  process(sample: GazeSample): GazeEvent[] {
    const events: GazeEvent[] = [];
    const valid = sample.valid && sample.x !== null && sample.y !== null
      && Number.isFinite(sample.x) && Number.isFinite(sample.y);
    if (!valid) {
      if (this.wasValid) events.push({ timestampMs: sample.timestampMs, type: 'signalLost', targetId: this.current, progress: 0 });
      this.reset();
      return events;
    }
    const target = this.targets.find(t => t.enabled && !this.locked.has(t.id)
      && sample.x! >= t.x && sample.x! <= t.x + t.width
      && sample.y! >= t.y && sample.y! <= t.y + t.height);
    if (!target) { this.reset(); this.wasValid = true; return events; }
    if (this.current !== target.id) { this.reset(); this.current = target.id; }
    // A stalled or reordered stream must not create an instant confirmation.
    const delta = this.previous === null ? 0 : sample.timestampMs - this.previous;
    if (delta < 0 || delta > 250) this.elapsed = 0;
    else this.elapsed += delta;
    this.previous = sample.timestampMs;
    this.wasValid = true;
    const progress = Math.min(1, this.elapsed / this.thresholdMs);
    events.push({ timestampMs: sample.timestampMs, type: 'dwellProgress', targetId: target.id, progress });
    if (progress === 1) {
      events.push({ timestampMs: sample.timestampMs, type: 'targetConfirmed', targetId: target.id, progress });
      this.locked.add(target.id);
      this.reset();
    }
    return events;
  }
}

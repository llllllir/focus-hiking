import type { AttentionPort, GazeEvent, GazeSample, TargetRegion } from '../contracts';
import { DwellTracker } from './dwell';

export class SimulatedAttention implements AttentionPort {
  private samples = new Set<(sample: GazeSample) => void>();
  private events = new Set<(event: GazeEvent) => void>();
  private tracker = new DwellTracker();
  private timer: ReturnType<typeof setInterval>;
  private origin = performance.now();
  private visibility = () => this.tracker.reset();

  constructor() {
    this.timer = setInterval(() => {
      if (document.hidden) return;
      const timestampMs = performance.now();
      const phase = (timestampMs - this.origin) % 8000;
      const valid = phase < 6500;
      const sample: GazeSample = {
        timestampMs, x: valid ? 0.5 : null, y: valid ? 0.5 : null,
        valid, invalidReason: valid ? null : 'simulatedSignalLoss', source: 'simulated',
      };
      this.samples.forEach(fn => fn(sample));
      this.tracker.process(sample).forEach(event => this.events.forEach(fn => fn(event)));
    }, 50);
    document.addEventListener('visibilitychange', this.visibility);
  }
  subscribeSamples(listener: (sample: GazeSample) => void) { this.samples.add(listener); return () => { this.samples.delete(listener); }; }
  subscribeEvents(listener: (event: GazeEvent) => void) { this.events.add(listener); return () => { this.events.delete(listener); }; }
  setTargets(targets: TargetRegion[]) { this.tracker.setTargets(targets); }
  dispose() {
    clearInterval(this.timer);
    document.removeEventListener('visibilitychange', this.visibility);
    this.samples.clear(); this.events.clear();
  }
}

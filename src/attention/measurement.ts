import { entryPolicy } from './entry-policy';
export interface MeasurementRow {
  timestampMs: number;
  targetId: string;
  targetX: number;
  targetY: number;
  x: number | null;
  y: number | null;
  valid: boolean;
  reason: string | null;
  width: number;
  height: number;
  processingMs: number;
  pipelineMs: number;
}
export function percentile(values: number[], fraction: number): number | null {
  if (!values.length) return null;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.max(0, Math.min(sorted.length - 1, Math.ceil(fraction * sorted.length) - 1))];
}
export function measurementSummary(rows: MeasurementRow[]) {
  const errors = rows.filter(r => r.valid && r.x !== null && r.y !== null).map(r =>
    Math.hypot((r.x! - r.targetX) * r.width, (r.y! - r.targetY) * r.height) / Math.hypot(r.width, r.height));
  return { total: rows.length, valid: errors.length, validRate: rows.length ? errors.length / rows.length : 0,
    median: percentile(errors, .5), p90: percentile(errors, .9), processingP95: percentile(rows.map(r => r.processingMs).filter(v => v > 0), .95),
    pipelineP95: percentile(rows.map(r => r.pipelineMs).filter(v => v > 0), .95) };
}
export function measurementsCsv(rows: MeasurementRow[]): string {
  const header = 'source,entryPolicy,timestampMs,targetId,targetX,targetY,x,y,valid,invalidReason,width,height,processingMs,pipelineMs';
  const cell = (v: unknown) => `"${String(v ?? '').replaceAll('"', '""')}"`;
  return '\uFEFF' + [header, ...rows.map(r => ['camera', entryPolicy.id, r.timestampMs, r.targetId, r.targetX, r.targetY, r.x, r.y, r.valid,
    r.reason, r.width, r.height, r.processingMs, r.pipelineMs].map(cell).join(','))].join('\r\n');
}
export class TimeSmoother {
  private last: { x: number; y: number; timestampMs: number } | null = null;
  constructor(private tauMs = 65) {}
  reset() { this.last = null; }
  update(x: number, y: number, timestampMs: number): { x: number; y: number } {
    if (!this.last || timestampMs - this.last.timestampMs > 250 || timestampMs <= this.last.timestampMs) this.last = { x, y, timestampMs };
    else {
      const alpha = 1 - Math.exp(-(timestampMs - this.last.timestampMs) / this.tauMs);
      this.last = { x: this.last.x + alpha * (x - this.last.x), y: this.last.y + alpha * (y - this.last.y), timestampMs };
    }
    return { x: this.last.x, y: this.last.y };
  }
}

export function screenSummary(rows: { inside: boolean; state: 'on-screen' | 'off-screen' | 'unknown' }[]) {
  const on = rows.filter(r => r.inside), off = rows.filter(r => !r.inside);
  const ratio = (n: number, d: number) => d ? n / d : 1;
  const falseOn = ratio(off.filter(r => r.state === 'on-screen').length, off.length), falseOff = ratio(on.filter(r => r.state === 'off-screen').length, on.length);
  const onRecall = on.length ? on.filter(r => r.state === 'on-screen').length / on.length : 0, offRecall = off.length ? off.filter(r => r.state === 'off-screen').length / off.length : 0;
  const unknown = ratio(rows.filter(r => r.state === 'unknown').length, rows.length);
  const gate = entryPolicy.screen;
  return { falseOn, falseOff, onRecall, offRecall, unknown, passed: !!on.length && !!off.length && falseOn <= gate.falseOn && falseOff <= gate.falseOff && onRecall >= gate.recall && offRecall >= gate.recall && unknown <= gate.unknown };
}

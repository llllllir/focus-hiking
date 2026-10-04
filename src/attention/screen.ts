import type { EyeFeatures } from './features';
import { coveredPose, poseCoverage } from './calibration';
import type { PoseCoverage } from './calibration';
import { entryPolicy } from './entry-policy';

export type ScreenState = 'on-screen' | 'off-screen' | 'unknown';
export interface ScreenStatus { state: ScreenState; reason: string; score: number | null; timestampMs: number; source: 'camera' }
export interface ScreenRow { features: EyeFeatures; inside: boolean; targetId: string; round: number }
export interface ScreenModel { means: number[]; scales: number[]; weights: number[]; coverage: PoseCoverage; balancedAccuracy: number }
const sigmoid = (v: number) => 1 / (1 + Math.exp(-Math.max(-35, Math.min(35, v))));
function basis(f: EyeFeatures) {
  const x = (f.left.x + f.right.x) / 2 - .5, y = (f.left.y + f.right.y) / 2 - .5;
  // Quadratic eye terms allow a bounded screen region (linear alone cannot).
  return [x, y, x * x, y * y, x * y, f.yaw / 20, f.pitch / 20, (f.yaw / 20) ** 2, (f.pitch / 20) ** 2];
}
function train(rows: ScreenRow[]): ScreenModel {
  const vectors = rows.map(r => basis(r.features)), d = vectors[0].length;
  const groups = new Map<string, number>();
  const key = (r: ScreenRow) => `${r.targetId}:${r.round}`;
  rows.forEach(r => groups.set(key(r), (groups.get(key(r)) ?? 0) + 1));
  const classGroups = [false, true].map(inside => new Set(rows.filter(r => r.inside === inside).map(key)).size);
  const sampleWeights = rows.map(r => 1 / (2 * classGroups[Number(r.inside)] * groups.get(key(r))!));
  const means = Array.from({ length: d }, (_, i) => vectors.reduce((sum, v, k) => sum + sampleWeights[k] * v[i], 0));
  const scales = means.map((m, i) => Math.max(.002, Math.sqrt(vectors.reduce((sum, v, k) => sum + sampleWeights[k] * (v[i] - m) ** 2, 0))));
  const inputs = vectors.map(v => [1, ...v.map((x, i) => (x - means[i]) / scales[i])]);
  const weights = Array<number>(d + 1).fill(0);
  for (let step = 0; step < 500; step++) {
    const grad = weights.map((w, i) => i ? .015 * w : 0);
    inputs.forEach((v, k) => {
      const error = (sigmoid(v.reduce((s, x, i) => s + x * weights[i], 0)) - Number(rows[k].inside)) * sampleWeights[k];
      v.forEach((x, i) => { grad[i] += x * error; });
    });
    weights.forEach((_, i) => { weights[i] -= .15 * grad[i]; });
  }
  return { means, scales, weights, coverage: poseCoverage(rows.map(r => r.features)), balancedAccuracy: 0 };
}
export function screenScore(model: ScreenModel, features: EyeFeatures) {
  const v = [1, ...basis(features).map((x, i) => (x - model.means[i]) / model.scales[i])];
  return sigmoid(v.reduce((s, x, i) => s + x * model.weights[i], 0));
}
export function fitScreen(rows: ScreenRow[]): ScreenModel {
  const rounds = [...new Set(rows.map(r => r.round))];
  if (rounds.length < 2 || rows.some(r => !basis(r.features).every(Number.isFinite))) throw new Error('屏幕内外校准需要两轮有效数据');
  for (const round of rounds) for (const inside of [true, false]) {
    const subset = rows.filter(r => r.round === round && r.inside === inside);
    if (subset.length < 24 || new Set(subset.map(r => r.targetId)).size < 4) throw new Error('屏幕内外样本不足，请重试');
  }
  const rates: number[] = [];
  for (const round of rounds) {
    const model = train(rows.filter(r => r.round !== round));
    for (const inside of [true, false]) {
      const held = rows.filter(r => r.round === round && r.inside === inside);
      rates.push(held.filter(r => inside ? screenScore(model, r.features) >= entryPolicy.classifier.onScore : screenScore(model, r.features) <= entryPolicy.classifier.offScore).length / held.length);
    }
  }
  const balancedAccuracy = rates.reduce((a, b) => a + b, 0) / rates.length;
  if (Math.min(...rates) < entryPolicy.classifier.foldRecall || balancedAccuracy < entryPolicy.classifier.balancedAccuracy) throw new Error('屏幕内外信号区分不足，请调整光照、保持眼部可见后重新采样');
  return { ...train(rows), balancedAccuracy };
}
export function screenEvidence(model: ScreenModel | null, f: EyeFeatures, raw: { x: number; y: number }, margin: { x: number; y: number }, fullscreen: boolean): { state: ScreenState; reason: string; score: number | null } {
  if (!fullscreen) return { state: 'unknown', reason: 'fullscreen-required', score: null };
  if (!model) return { state: 'unknown', reason: 'screen-not-calibrated', score: null };
  if (!coveredPose(f, model.coverage)) return { state: 'unknown', reason: 'calibration-range', score: null };
  const score = screenScore(model, f);
  // A poor CV margin must not swallow most of the screen in easy-entry mode.
  // Keep the raw prediction and a nonzero boundary band; do not clamp validation errors.
  margin = { x: Math.min(margin.x, entryPolicy.classifier.marginCap), y: Math.min(margin.y, entryPolicy.classifier.marginCap) };
  const inside = raw.x - margin.x >= 0 && raw.x + margin.x <= 1 && raw.y - margin.y >= 0 && raw.y + margin.y <= 1;
  const outside = raw.x + margin.x < 0 || raw.x - margin.x > 1 || raw.y + margin.y < 0 || raw.y - margin.y > 1;
  if (inside && score >= entryPolicy.classifier.onScore) return { state: 'on-screen', reason: 'on-screen', score };
  if (outside && score <= entryPolicy.classifier.offScore) return { state: 'off-screen', reason: 'off-screen', score };
  return { state: 'unknown', reason: 'screen-uncertain', score };
}
export class ScreenStabilizer {
  private candidate: ScreenState = 'unknown';
  private since = 0;
  private last = -Infinity;
  reset() { this.candidate = 'unknown'; this.since = 0; this.last = -Infinity; }
  update(evidence: { state: ScreenState; reason: string; score: number | null }, timestampMs: number): ScreenStatus {
    if (evidence.state === 'unknown' || timestampMs <= this.last || timestampMs - this.last > 250) this.reset();
    if (evidence.state !== this.candidate) { this.candidate = evidence.state; this.since = timestampMs; }
    this.last = timestampMs;
    const stable = evidence.state !== 'unknown' && timestampMs - this.since >= (evidence.state === 'off-screen' ? 400 : 200);
    return { ...evidence, state: stable ? evidence.state : 'unknown', reason: stable || evidence.state === 'unknown' ? evidence.reason : 'screen-settling', timestampMs, source: 'camera' };
  }
}

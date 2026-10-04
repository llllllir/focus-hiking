import type { EyeFeatures } from './features';
import { percentile } from './measurement';
export const median = (xs: number[]) => percentile(xs, .5) ?? 0;
const poseNames = ['yaw', 'pitch', 'roll', 'faceX', 'faceY', 'faceScale'] as const;
export type PoseCoverage = Record<typeof poseNames[number], [number, number]>;

export function poseCoverage(samples: EyeFeatures[]): PoseCoverage {
  const padding = [6, 6, 7, .04, .04, .05];
  return Object.fromEntries(poseNames.map((name, i) => [name,
    [(percentile(samples.map(s => s[name]), .05) ?? 0) - padding[i], (percentile(samples.map(s => s[name]), .95) ?? 0) + padding[i]],
  ])) as PoseCoverage;
}
export function coveredPose(features: EyeFeatures, coverage: PoseCoverage) {
  return poseNames.every(name => features[name] >= coverage[name][0] && features[name] <= coverage[name][1]);
}
export function neutralFeatures(samples: EyeFeatures[]): EyeFeatures {
  if (!samples.length) throw new Error('没有有效眼部样本');
  const vector = samples[0].vector.map((_, i) => median(samples.map(s => s.vector[i])));
  return { ...samples[0], vector, ...Object.fromEntries(poseNames.map(name => [name, median(samples.map(s => s[name]))])),
    left: { x: vector[0], y: vector[1], openness: median(samples.map(s => s.left.openness)) },
    right: { x: vector[2], y: vector[3], openness: median(samples.map(s => s.right.openness)) } };
}
export function qualityReason(f: EyeFeatures, baseline: EyeFeatures): string | null {
  if (f.left.openness < Math.max(.08, baseline.left.openness * .45) || f.right.openness < Math.max(.08, baseline.right.openness * .45)) return 'eyes-unavailable';
  const disparityX = (f.left.x - f.right.x) - (baseline.left.x - baseline.right.x);
  const disparityY = (f.left.y - f.right.y) - (baseline.left.y - baseline.right.y);
  return Math.abs(disparityX) > .18 || Math.abs(disparityY) > .12 ? 'eyes-disagree' : null;
}

/** Returns original indices: labels stay paired with the retained observations. */
export function stableSamples(samples: EyeFeatures[], allowHeadMotion = false): number[] {
  if (samples.length < 8) return [];
  const dimensions = allowHeadMotion ? [4, 5] : [0, 1, 2, 3, 6, 7, 9, 10];
  const limits: Record<number, number> = { 0: .055, 1: .04, 2: .055, 3: .04, 4: .1, 5: .1, 6: 4, 7: 4, 9: .025, 10: .025 };
  const stats = dimensions.map(d => {
    const mid = median(samples.map(f => f.vector[d]));
    return { d, mid, mad: median(samples.map(f => Math.abs(f.vector[d] - mid))) };
  });
  if (stats.some(s => s.mad > limits[s.d])) return [];
  return samples.flatMap((f, index) => stats.every(s => Math.abs(f.vector[s.d] - s.mid) <= Math.max(limits[s.d] * .4, s.mad * 4.5)) ? [index] : []);
}

export interface CalibrationRow { features: number[]; x: number; y: number; targetId: string; round?: number }
export interface RidgeModel { means: number[]; scales: number[]; x: number[]; y: number[]; lambda: number; basis?: 'linear' | 'quadratic'; inputSize?: number; marginX?: number; marginY?: number; cvError?: number }
function expand(f: number[], basis: 'linear' | 'quadratic') {
  if (basis === 'linear' || f.length < 12) return f;
  const x = (f[0] + f[2]) / 2 - .5, y = (f[1] + f[3]) / 2 - .5;
  return [...f, x * x, y * y, x * y, x * f[6] / 20, y * f[7] / 20];
}

function solve(matrix: number[][], rhs: number[]): number[] {
  const a = matrix.map((row, i) => [...row, rhs[i]]), n = rhs.length;
  for (let i = 0; i < n; i++) {
    let pivot = i;
    for (let j = i + 1; j < n; j++) if (Math.abs(a[j][i]) > Math.abs(a[pivot][i])) pivot = j;
    [a[i], a[pivot]] = [a[pivot], a[i]];
    if (Math.abs(a[i][i]) < 1e-10) throw new Error('校准样本不足，无法拟合');
    const denominator = a[i][i];
    for (let k = i; k <= n; k++) a[i][k] /= denominator;
    for (let j = 0; j < n; j++) if (j !== i) {
      const factor = a[j][i];
      for (let k = i; k <= n; k++) a[j][k] -= factor * a[i][k];
    }
  }
  return a.map(row => row[n]);
}

export function fitRidge(input: CalibrationRow[], lambda: number, basis: 'linear' | 'quadratic' = 'linear'): RidgeModel {
  const rows = input.map(r => ({ ...r, features: expand(r.features, basis) }));
  if (!rows.length || lambda <= 0) throw new Error('无有效校准数据');
  const d = rows[0].features.length;
  if (rows.some(row => row.features.length !== d || ![...row.features, row.x, row.y].every(Number.isFinite))) throw new Error('校准数据无效');
  const groups = new Map<string, number>();
  const key = (r: CalibrationRow) => `${r.targetId}:${r.round ?? 0}`;
  rows.forEach(r => groups.set(key(r), (groups.get(key(r)) ?? 0) + 1));
  const weights = rows.map(r => rows.length / groups.size / groups.get(key(r))!);
  const means = Array.from({ length: d }, (_, i) => rows.reduce((sum, r, k) => sum + weights[k] * r.features[i], 0) / rows.length);
  const scales = means.map((mean, i) => Math.max(1e-4, Math.sqrt(rows.reduce((sum, r, k) => sum + weights[k] * (r.features[i] - mean) ** 2, 0) / rows.length)));
  const normal = Array.from({ length: d + 1 }, () => Array<number>(d + 1).fill(0));
  const bx = Array<number>(d + 1).fill(0), by = [...bx];
  for (const [k, row] of rows.entries()) {
    const f = [1, ...row.features.map((v, i) => (v - means[i]) / scales[i])];
    for (let i = 0; i <= d; i++) {
      bx[i] += weights[k] * f[i] * row.x; by[i] += weights[k] * f[i] * row.y;
      for (let j = 0; j <= d; j++) normal[i][j] += weights[k] * f[i] * f[j];
    }
  }
  for (let i = 1; i <= d; i++) normal[i][i] += lambda;
  return { means, scales, x: solve(normal, bx), y: solve(normal, by), lambda, basis, inputSize: input[0].features.length };
}

export function predict(model: RidgeModel, features: number[]): { x: number; y: number } {
  features = expand(features, model.basis ?? 'linear');
  if (features.length !== model.means.length || !features.every(Number.isFinite)) throw new Error('预测特征无效');
  const f = [1, ...features.map((v, i) => (v - model.means[i]) / model.scales[i])];
  // Do not clamp here: out-of-screen predictions must remain visible in error reports.
  return { x: f.reduce((s, v, i) => s + v * model.x[i], 0), y: f.reduce((s, v, i) => s + v * model.y[i], 0) };
}

export function chooseRidge(rows: CalibrationRow[]): RidgeModel {
  const ids = [...new Set(rows.map(r => r.targetId))];
  if (ids.length < 9 || ids.some(id => rows.filter(r => r.targetId === id).length < 10)) throw new Error('九点有效样本不足，请重新校准');
  let bestLambda = 1, bestError = Infinity, bestBasis: 'linear' | 'quadratic' = 'linear';
  let bestX: number[] = [], bestY: number[] = [];
  // Leave one target out; final five-point validation never selects lambda.
  for (const basis of ['linear', 'quadratic'] as const) for (const lambda of [.1, 1, 10, 100]) {
    let error = 0, count = 0;
    const ex: number[] = [], ey: number[] = [];
    for (const id of ids) {
      const model = fitRidge(rows.filter(r => r.targetId !== id), lambda, basis);
      const held = rows.filter(r => r.targetId === id);
      error += held.reduce((s, r) => { const p = predict(model, r.features); ex.push(Math.abs(p.x - r.x)); ey.push(Math.abs(p.y - r.y)); return s + (p.x - r.x) ** 2 + (p.y - r.y) ** 2; }, 0) / held.length;
      count++;
    }
    const penalty = basis !== bestBasis ? .9 : 1;
    if (error / count < bestError * penalty) { bestError = error / count; bestLambda = lambda; bestBasis = basis; bestX = ex; bestY = ey; }
  }
  const p90 = (xs: number[]) => xs.sort((a, b) => a - b)[Math.ceil(xs.length * .9) - 1];
  return { ...fitRidge(rows, bestLambda, bestBasis), cvError: Math.sqrt(bestError), marginX: Math.max(.015, p90(bestX)), marginY: Math.max(.015, p90(bestY)) };
}

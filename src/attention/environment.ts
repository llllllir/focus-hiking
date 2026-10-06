import type { Mapping } from './pipeline';
import type { ScreenModel } from './screen';

export const environmentKey = 'here-in-the-mountains.environments.v1';
export const calibrationVersion = 'landmarker-1-ridge12-screen9-v1';
export interface EnvironmentSignature {
  screenWidth: number; screenHeight: number; width: number; height: number; pixelRatio: number;
  videoWidth: number; videoHeight: number; deviceKey: string;
}
export interface CalibrationSnapshot {
  version: typeof calibrationVersion; mapping: Mapping | null; screenModel: ScreenModel | null;
  positionVerified: boolean; screenVerified: boolean;
}
export interface EnvironmentProfile {
  id: string; name: string; signature: EnvironmentSignature | null; attempts: number;
  saved: CalibrationSnapshot | null; latest: CalibrationSnapshot | null; savedAt: number | null;
}
const object = (v: unknown): v is Record<string, unknown> => !!v && typeof v === 'object' && !Array.isArray(v);
const finite = (v: unknown): v is number => typeof v === 'number' && Number.isFinite(v);
const vector = (v: unknown, n: number): v is number[] => Array.isArray(v) && v.length === n && v.every(finite);
const poseKeys = ['yaw', 'pitch', 'roll', 'faceX', 'faceY', 'faceScale'] as const;
function coverage(v: unknown) { return object(v) && poseKeys.every(k => vector(v[k], 2) && v[k][0] <= v[k][1]); }
function validMapping(v: unknown): v is Mapping {
  if (!object(v) || !object(v.model) || !object(v.baseline) || !coverage(v.coverage)) return false;
  const m = v.model, f = v.baseline, n = m.basis === 'quadratic' ? 17 : 12;
  return (m.basis === undefined || m.basis === 'linear' || m.basis === 'quadratic') && (m.inputSize === undefined || m.inputSize === 12) &&
    vector(m.means, n) && vector(m.scales, n) && m.scales.every(x => x > 0) && vector(m.x, n + 1) && vector(m.y, n + 1) && finite(m.lambda) && m.lambda > 0 &&
    ['marginX', 'marginY', 'cvError'].every(k => m[k] === undefined || finite(m[k]) && m[k] >= 0) &&
    vector(f.vector, 12) && poseKeys.every(k => finite(f[k])) && ['left', 'right'].every(k => object(f[k]) && ['x', 'y', 'openness'].every(n => finite((f[k] as Record<string, unknown>)[n])));
}
function validScreen(v: unknown): v is ScreenModel {
  return object(v) && vector(v.means, 9) && vector(v.scales, 9) && v.scales.every(x => x > 0) && vector(v.weights, 10) && coverage(v.coverage) && finite(v.balancedAccuracy) && v.balancedAccuracy >= 0 && v.balancedAccuracy <= 1;
}
export function validSnapshot(v: unknown): v is CalibrationSnapshot {
  return object(v) && v.version === calibrationVersion && (v.mapping === null || validMapping(v.mapping)) && (v.screenModel === null || validScreen(v.screenModel)) &&
    typeof v.positionVerified === 'boolean' && typeof v.screenVerified === 'boolean' && (!v.positionVerified || !!v.mapping) && (!v.screenVerified || !!v.screenModel) && (!v.screenModel || !!v.mapping);
}
/** Allowlist only fitted parameters and aggregate baseline; never persist frames or sample rows. */
export function cleanSnapshot(snapshot: CalibrationSnapshot): CalibrationSnapshot {
  if (!validSnapshot(snapshot)) throw new Error('校准存档无效，请重新校准');
  const m = snapshot.mapping, s = snapshot.screenModel;
  const cleanCoverage = (v: Mapping['coverage']) => Object.fromEntries(poseKeys.map(k => [k, [...v[k]]])) as Mapping['coverage'];
  return {
    version: calibrationVersion, positionVerified: snapshot.positionVerified, screenVerified: snapshot.screenVerified,
    mapping: m ? { model: { means: [...m.model.means], scales: [...m.model.scales], x: [...m.model.x], y: [...m.model.y], lambda: m.model.lambda, basis: m.model.basis, inputSize: m.model.inputSize, marginX: m.model.marginX, marginY: m.model.marginY, cvError: m.model.cvError },
      baseline: { ...Object.fromEntries(poseKeys.map(k => [k, m.baseline[k]])), vector: [...m.baseline.vector], left: { x: m.baseline.left.x, y: m.baseline.left.y, openness: m.baseline.left.openness }, right: { x: m.baseline.right.x, y: m.baseline.right.y, openness: m.baseline.right.openness } } as Mapping['baseline'], coverage: cleanCoverage(m.coverage) } : null,
    screenModel: s ? { means: [...s.means], scales: [...s.scales], weights: [...s.weights], coverage: cleanCoverage(s.coverage), balancedAccuracy: s.balancedAccuracy } : null,
  };
}
function validSignature(v: unknown): v is EnvironmentSignature {
  return object(v) && ['screenWidth', 'screenHeight', 'width', 'height', 'pixelRatio', 'videoWidth', 'videoHeight'].every(k => finite(v[k]) && v[k] > 0) && typeof v.deviceKey === 'string' && /^[a-f0-9]{64}$/.test(v.deviceKey);
}
function cleanSignature(v: EnvironmentSignature): EnvironmentSignature {
  return { screenWidth: v.screenWidth, screenHeight: v.screenHeight, width: v.width, height: v.height, pixelRatio: v.pixelRatio, videoWidth: v.videoWidth, videoHeight: v.videoHeight, deviceKey: v.deviceKey };
}
export function sameEnvironment(a: EnvironmentSignature | null, b: EnvironmentSignature | null) {
  return !!a && !!b && (Object.keys(a) as (keyof EnvironmentSignature)[]).every(k => a[k] === b[k]);
}
export function quickEntryKind(profile: EnvironmentProfile): 'saved' | 'retry' | null {
  return profile.saved ? 'saved' : profile.attempts >= 3 ? 'retry' : null;
}
type StoragePort = Pick<Storage, 'getItem' | 'setItem' | 'removeItem'>;
export class EnvironmentStore {
  private profiles: EnvironmentProfile[] = [];
  private corrupt = false;
  private counted = new Set<string>();
  warning = '';
  constructor(private storage: StoragePort | null) {
    try {
      const raw = storage?.getItem(environmentKey); if (!raw) return;
      if (raw.length > 400000) throw new Error();
      const data: unknown = JSON.parse(raw);
      if (!object(data) || data.version !== 1 || !Array.isArray(data.profiles) || data.profiles.length > 8) throw new Error();
      for (const p of data.profiles) {
        if (!object(p) || typeof p.id !== 'string' || !/^[a-zA-Z0-9-]{1,60}$/.test(p.id) || typeof p.name !== 'string' || !p.name.trim() || p.name.length > 40 || !Number.isSafeInteger(p.attempts) || (p.attempts as number) < 0 || (p.attempts as number) > 1000 ||
          !(p.signature === null || validSignature(p.signature)) || !(p.saved === null || validSnapshot(p.saved) && p.saved.positionVerified && p.saved.screenVerified) || !(p.latest === null || validSnapshot(p.latest)) || !(p.savedAt === null || finite(p.savedAt))) throw new Error();
        if ((p.saved || p.latest || p.attempts) && !p.signature) throw new Error();
      }
      if (new Set(data.profiles.map(p => p.id)).size !== data.profiles.length) throw new Error();
      this.profiles = data.profiles.map(p => ({ id: p.id, name: p.name, signature: p.signature ? cleanSignature(p.signature) : null, attempts: p.attempts, saved: p.saved ? cleanSnapshot(p.saved) : null, latest: p.latest ? cleanSnapshot(p.latest) : null, savedAt: p.savedAt }));
    } catch { this.corrupt = true; this.warning = '环境存档无法读取，原数据已保留。可清除环境存档后重新保存。'; }
  }
  list() { return structuredClone(this.profiles); }
  get(id: string) { const p = this.profiles.find(p => p.id === id); if (!p) throw new Error('环境档案不存在'); return structuredClone(p); }
  private persist() {
    if (this.corrupt) return;
    try { if (!this.storage) throw new Error(); this.storage.setItem(environmentKey, JSON.stringify({ version: 1, profiles: this.profiles })); this.warning = ''; }
    catch { this.warning = '浏览器未能保存环境存档；本次会话仍可使用，关闭后可能丢失。'; }
  }
  create(name: string) {
    if (this.profiles.length >= 8) throw new Error('最多保存8个环境，请先删除不用的档案');
    const p: EnvironmentProfile = { id: crypto.randomUUID(), name: name.trim().slice(0, 40) || '我的环境', signature: null, attempts: 0, saved: null, latest: null, savedAt: null };
    this.profiles.push(p); this.persist(); return structuredClone(p);
  }
  private bind(id: string, signature: EnvironmentSignature) {
    if (!validSignature(signature)) throw new Error('无法取得摄像头或屏幕信息');
    const p = this.profiles.find(p => p.id === id); if (!p) throw new Error('环境档案不存在');
    if (p.signature && !sameEnvironment(p.signature, signature)) throw new Error('摄像头或显示环境已变化，请返回首页新建环境档案');
    p.signature = cleanSignature(signature); return p;
  }
  recordAttempt(id: string, token: string, signature: EnvironmentSignature, snapshot: CalibrationSnapshot) {
    const key = `${id}:${token}`;
    const clean = cleanSnapshot(snapshot), p = this.bind(id, signature);
    if (!this.counted.has(key)) p.attempts = Math.min(1000, p.attempts + 1);
    p.latest = clean; this.counted.add(key); this.persist();
  }
  saveSuccess(id: string, signature: EnvironmentSignature, snapshot: CalibrationSnapshot) {
    const clean = cleanSnapshot(snapshot);
    if (!clean.positionVerified || !clean.screenVerified) throw new Error('只有两项独立验证通过后才能保存成功档案');
    const p = this.bind(id, signature); p.saved = clean; p.savedAt = Date.now(); this.persist();
  }
  remove(id: string) { this.profiles = this.profiles.filter(p => p.id !== id); this.persist(); }
  clear() { try { this.storage?.removeItem(environmentKey); this.corrupt = false; this.profiles = []; this.warning = ''; this.counted.clear(); } catch { this.warning = '无法清除，请检查浏览器存储权限'; } }
}
export function browserEnvironments() { try { return new EnvironmentStore(localStorage); } catch { return new EnvironmentStore(null); } }

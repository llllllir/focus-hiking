import type { HikeRecord } from './hike-session';
const key = 'focus-hiking.hikes.v1';
type StoragePort = Pick<Storage, 'getItem' | 'setItem'>;
function checked(value: unknown): value is HikeRecord {
  if (!value || typeof value !== 'object') return false;
  const r = value as HikeRecord;
  const nums = [r.elapsedMs, r.onScreenMs, r.offScreenMs, r.unknownMs, r.departures, r.recoveries, r.distanceM, r.coverageRatio];
  return r.version === 1 && typeof r.id === 'string' && r.id.length <= 100 && typeof r.startedAt === 'string' && Number.isFinite(Date.parse(r.startedAt)) &&
    ['camera', 'simulated'].includes(r.source) && [5, 10, 15].includes(r.plannedMinutes) && ['completed', 'stopped'].includes(r.outcome) &&
    nums.every(n => typeof n === 'number' && Number.isFinite(n) && n >= 0) && r.coverageRatio <= 1 && r.recoveries <= r.departures &&
    r.elapsedMs <= r.plannedMinutes * 60_000 && Math.abs(r.elapsedMs - r.onScreenMs - r.offScreenMs - r.unknownMs) < 1 &&
    (r.focusRatio === null || (typeof r.focusRatio === 'number' && Number.isFinite(r.focusRatio) && r.focusRatio >= 0 && r.focusRatio <= 1)) &&
    (r.averageFps === null || (typeof r.averageFps === 'number' && Number.isFinite(r.averageFps) && r.averageFps >= 0));
}
// Whitelist fields: never preserve unknown imported fields or raw gaze data.
function clean(r: HikeRecord): HikeRecord {
  return {version:1,id:r.id,source:r.source,startedAt:r.startedAt,plannedMinutes:r.plannedMinutes,outcome:r.outcome,elapsedMs:r.elapsedMs,onScreenMs:r.onScreenMs,offScreenMs:r.offScreenMs,unknownMs:r.unknownMs,departures:r.departures,recoveries:r.recoveries,distanceM:r.distanceM,focusRatio:r.focusRatio,coverageRatio:r.coverageRatio,averageFps:r.averageFps};
}
export class HikeArchive {
  constructor(private storage: StoragePort) {}
  read(): { records: HikeRecord[]; error: string | null } {
    try {
      const text = this.storage.getItem(key); if (!text) return { records: [], error: null };
      const data = JSON.parse(text);
      if (data.version !== 1 || !Array.isArray(data.records) || !data.records.every(checked) || new Set(data.records.map((r: HikeRecord) => r.id)).size !== data.records.length) throw new Error('invalid archive');
      return { records: data.records.map(clean), error: null };
    } catch { return { records: [], error: '无法读取本地存档，已保留原数据；不会覆盖。' }; }
  }
  save(record: HikeRecord) {
    const result = this.read(); if (result.error) return result.error;
    if (!checked(record)) return '记录校验失败，未写入存档。';
    if (result.records.some(r => r.id === record.id)) return null;
    try { this.storage.setItem(key, JSON.stringify({ version: 1, records: [...result.records, clean(record)] })); return null; }
    catch { return '本地存档不可用或空间不足；本次结果仍可下载。'; }
  }
}
export function hikeProgress(records: HikeRecord[], current?: HikeRecord) {
  const real = records.filter(r => r.source === 'camera');
  const comparable = real.filter(r => r.coverageRatio >= .7 && r.onScreenMs + r.offScreenMs >= 60_000 && (!current || r.plannedMinutes === current.plannedMinutes) && r.id !== current?.id);
  const previous = comparable.at(-1);
  const change = current && current.source === 'camera' && current.coverageRatio >= .7 && current.onScreenMs + current.offScreenMs >= 60_000 && current.focusRatio !== null && previous?.focusRatio !== null && previous?.focusRatio !== undefined ? current.focusRatio - previous.focusRatio : null;
  return {count:real.length,completed:real.filter(r=>r.outcome==='completed').length,totalMinutes:real.reduce((sum,r)=>sum+r.elapsedMs/60_000,0),change,
    badges:[...(real.length?['迈出第一步']:[]),...(real.some(r=>r.outcome==='completed')?['走完整段旅程']:[]),...(real.some(r=>r.coverageRatio>=.7&&r.onScreenMs>=60_000&&r.focusRatio!==null&&r.focusRatio>=.8)?['目光停留在森林']:[])]};
}

/** User-authorized easy-entry policy, 2026-10-04. Not the original M2 acceptance criteria. */
export const entryPolicy = {
  id: 'easy-entry-v2-phase8',
  stableSamples: 8,
  retainedFraction: .5,
  position: { validRate: .5, median: .25, p90: .4 },
  screen: { falseOn: .35, falseOff: .35, recall: .5, unknown: .5 },
  classifier: { onScore: .52, offScore: .48, foldRecall: .4, balancedAccuracy: .55, marginCap: .05 },
} as const;

export function positionEntryPassed(summary: { validRate: number; median: number | null; p90: number | null }) {
  return Number.isFinite(summary.validRate) && summary.validRate >= entryPolicy.position.validRate &&
    summary.median !== null && Number.isFinite(summary.median) && summary.median >= 0 && summary.median <= entryPolicy.position.median &&
    summary.p90 !== null && Number.isFinite(summary.p90) && summary.p90 >= 0 && summary.p90 <= entryPolicy.position.p90;
}

/** Full nine-point coverage, then corners/center plus one center repeat. No head-turn chores. */
export function positionCalibrationPlan() {
  const first = [.1, .5, .9].flatMap((y, row) => [.1, .5, .9].map((x, col) => ({ id: `c${row}${col}`, x, y, round: 0 })));
  const anchors = first.filter(t => t.id === 'c11' || (t.x !== .5 && t.y !== .5));
  return [...first, ...anchors.map(t => ({ ...t, round: 1 })), { id: 'c11', x: .5, y: .5, round: 1 }];
}

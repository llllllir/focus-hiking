import type { GazeSample } from '../contracts';
import type { EyeFeatures, FeatureResult } from './features';
import { eyeDisplay } from './features';
import { coveredPose, qualityReason } from './calibration';
import type { PoseCoverage } from './calibration';
import { OneEuroSmoother } from './filter';
import { predict } from './regression';
import type { RidgeModel } from './regression';
import { screenEvidence, ScreenStabilizer } from './screen';
import type { ScreenModel, ScreenStatus } from './screen';

export interface Mapping { model: RidgeModel; baseline: EyeFeatures; coverage: PoseCoverage }
export interface GazeResult {
  sample: GazeSample;
  features: EyeFeatures | null;
  raw: { x: number; y: number } | null;
  position: { x: number; y: number } | null;
  sensorValid: boolean;
  screen: ScreenStatus;
}
/** Pure decision pipeline shared by diagnostic and scene; no DOM or camera fixtures. */
export class GazePipeline {
  mapping: Mapping | null = null;
  screenModel: ScreenModel | null = null;
  positionVerified = false;
  screenVerified = false;
  unverifiedEntry = false;
  basicEntry = false;
  get entryReady() { return this.basicEntry || (!!this.mapping && !!this.screenModel && ((this.positionVerified && this.screenVerified) || this.unverifiedEntry)); }
  interactionEnabled = false;
  private smoother = new OneEuroSmoother();
  private screenFilter = new ScreenStabilizer();
  reset() { this.smoother.reset(); this.screenFilter.reset(); }
  clear() { this.mapping = null; this.screenModel = null; this.positionVerified = false; this.screenVerified = false; this.unverifiedEntry = false; this.basicEntry = false; this.interactionEnabled = false; this.reset(); }
  process(result: FeatureResult, timestampMs: number, fullscreen: boolean): GazeResult {
    const f = result.valid ? result.features : null;
    let reason = result.valid ? (this.mapping ? qualityReason(result.features, this.mapping.baseline) : 'not-calibrated') : result.reason;
    let raw: GazeResult['raw'] = null, position: GazeResult['position'] = null;
    let evidence: Parameters<ScreenStabilizer['update']>[0] = { state: 'unknown', reason: reason ?? 'screen-uncertain', score: null };
    const sensorValid = result.valid && qualityReason(result.features, this.basicEntry ? result.features : this.mapping?.baseline ?? result.features) === null;
    if (!this.basicEntry && f && this.mapping && !reason) {
      raw = predict(this.mapping.model, f.vector);
      if (coveredPose(f, this.mapping.coverage)) position = this.smoother.update(raw.x, raw.y, timestampMs);
      else this.smoother.reset();
      evidence = screenEvidence(this.screenModel, f, raw, { x: this.mapping.model.marginX ?? .05, y: this.mapping.model.marginY ?? .05 }, fullscreen);
      // A classifier cannot override inadequate coordinate calibration coverage.
      if (!position && evidence.state !== 'off-screen') evidence = { state: 'unknown', reason: 'calibration-range', score: evidence.score };
      reason = evidence.reason;
    } else if (!this.basicEntry || !f || !sensorValid || !fullscreen) this.smoother.reset();
    // Explicit three-attempt fallback: eye geometry only, never a successful calibration.
    // Keep actual camera validity and fullscreen requirements; no synthetic gaze samples.
    if (this.basicEntry && f && sensorValid && fullscreen) {
      // Failed/partial models must not veto the explicitly selected basic mode.
      const eye = eyeDisplay(f); raw = { x: .5 + (eye.x - .5) * 5, y: .5 + (eye.y - .5) * 2 }; position = this.smoother.update(raw.x, raw.y, timestampMs);
      if (position && raw) {
        const inside = raw.x >= .05 && raw.x <= .95 && raw.y >= .05 && raw.y <= .95;
        const outside = raw.x < 0 || raw.x > 1 || raw.y < 0 || raw.y > 1;
        evidence = { state: inside ? 'on-screen' : outside ? 'off-screen' : 'unknown', reason: inside ? 'on-screen' : outside ? 'off-screen' : 'screen-uncertain', score: null };
      }
    }
    // Opt-in experience must not be vetoed by a classifier that failed validation.
    // Retain calibrated pose coverage, sensor checks and unbounded predictions.
    if (!this.basicEntry && this.unverifiedEntry && !this.screenVerified && sensorValid && fullscreen && position && raw) {
      const inside = raw.x >= .05 && raw.x <= .95 && raw.y >= .05 && raw.y <= .95;
      const outside = raw.x < 0 || raw.x > 1 || raw.y < 0 || raw.y > 1;
      evidence = { state: inside ? 'on-screen' : outside ? 'off-screen' : 'unknown', reason: inside ? 'on-screen' : outside ? 'off-screen' : 'screen-uncertain', score: null };
    }
    const screen = this.screenFilter.update(evidence, timestampMs);
    const inside = position && position.x >= 0 && position.x <= 1 && position.y >= 0 && position.y <= 1;
    const valid = !!inside && screen.state === 'on-screen' && this.entryReady && this.interactionEnabled;
    if (!valid && screen.state === 'on-screen') reason = !this.entryReady ? !this.positionVerified ? 'position-unverified' : 'screen-unverified' : !this.interactionEnabled ? 'interaction-paused' : 'screen-uncertain';
    else if (!valid) reason = screen.reason;
    return { features: f, raw, position, sensorValid, screen,
      sample: { timestampMs, x: valid ? position!.x : null, y: valid ? position!.y : null, valid, invalidReason: valid ? null : reason, source: 'camera' } };
  }
}

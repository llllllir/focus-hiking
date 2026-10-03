export interface Point { x: number; y: number; z?: number }
export interface Eye { x: number; y: number; openness: number; preview?: { x: number; y: number; width: number; height: number; irisX: number; irisY: number } }
export interface EyeFeatures {
  vector: number[];
  left: Eye;
  right: Eye;
  yaw: number;
  pitch: number;
  roll: number;
  faceX: number;
  faceY: number;
  faceScale: number;
}
export type FeatureResult = { valid: true; features: EyeFeatures } | { valid: false; reason: string };

// Anatomical sides follow MediaPipe's official face_landmarks_connections.ts.
// Calculations use unmirrored image pixels; only the presentation flips x.
function eye(points: Point[], corners: [number, number], lids: [number, number], iris: number[], width: number, height: number): Eye | null {
  const pixel = (i: number) => ({ x: points[i].x * width, y: points[i].y * height });
  const ends = corners.map(pixel).sort((a, b) => a.x - b.x);
  const dx = ends[1].x - ends[0].x, dy = ends[1].y - ends[0].y;
  const eyeWidth = Math.hypot(dx, dy);
  if (eyeWidth < 12) return null;
  const ux = dx / eyeWidth, uy = dy / eyeWidth;
  const upper = pixel(lids[0]), lower = pixel(lids[1]);
  const eyeHeight = (lower.x - upper.x) * -uy + (lower.y - upper.y) * ux;
  if (eyeHeight / eyeWidth < .08) return null;
  const center = iris.map(pixel).reduce((a, b) => ({ x: a.x + b.x / iris.length, y: a.y + b.y / iris.length }), { x: 0, y: 0 });
  const x = ((center.x - ends[0].x) * ux + (center.y - ends[0].y) * uy) / eyeWidth;
  // Eyelid motion must not rescale vertical gaze. Eye corners define the origin,
  // and eye width is stable during a blink; openness remains a separate feature.
  const midX = (ends[0].x + ends[1].x) / 2, midY = (ends[0].y + ends[1].y) / 2;
  const y = .5 + ((center.x - midX) * -uy + (center.y - midY) * ux) / eyeWidth;
  if (!Number.isFinite(x + y) || x < -.15 || x > 1.15 || y < -.5 || y > 1.5) return null;
  return { x, y, openness: eyeHeight / eyeWidth, preview: { x: (midX - eyeWidth * .75) / width, y: (midY - eyeWidth * .4) / height,
    width: eyeWidth * 1.5 / width, height: eyeWidth * .8 / height, irisX: center.x / width, irisY: center.y / height } };
}

export function extractFeatures(points: Point[], matrix: number[], width: number, height: number): FeatureResult {
  if (points.length < 478) return { valid: false, reason: 'no-face' };
  if (matrix.length !== 16 || width <= 0 || height <= 0 || points.some(p => !Number.isFinite(p.x + p.y))) return { valid: false, reason: 'bad-landmarks' };
  const left = eye(points, [362, 263], [386, 374], [474, 475, 476, 477], width, height);
  const right = eye(points, [33, 133], [159, 145], [469, 470, 471, 472], width, height);
  if (!left || !right) return { valid: false, reason: 'eyes-unavailable' };
  // Face geometry is column-major. These angles are pose proxies, not measured eye rotation.
  const scale = Math.hypot(matrix[0], matrix[1], matrix[2]);
  if (!Number.isFinite(scale) || scale < 1e-6) return { valid: false, reason: 'bad-pose' };
  const yaw = Math.asin(Math.max(-1, Math.min(1, -matrix[2] / scale))) * 180 / Math.PI;
  const pitch = Math.atan2(matrix[6], matrix[10]) * 180 / Math.PI;
  const roll = Math.atan2(matrix[1], matrix[0]) * 180 / Math.PI;
  if (![yaw, pitch, roll].every(Number.isFinite)) return { valid: false, reason: 'bad-pose' };
  if (Math.abs(yaw) > 20 || Math.abs(pitch) > 20 || Math.abs(roll) > 25) return { valid: false, reason: 'pose-out-of-range' };
  const faceX = (points[234].x + points[454].x) / 2;
  const faceY = (points[10].y + points[152].y) / 2;
  const faceScale = Math.hypot((points[454].x - points[234].x) * width, (points[454].y - points[234].y) * height) / width;
  if (faceScale < .12) return { valid: false, reason: 'face-too-small' };
  return { valid: true, features: { left, right, yaw, pitch, roll, faceX, faceY, faceScale,
    vector: [left.x, left.y, right.x, right.y, left.openness, right.openness, yaw, pitch, roll, faceX, faceY, faceScale] } };
}

export function poseCompatible(features: EyeFeatures, baseline: Pick<EyeFeatures, 'faceScale' | 'faceX' | 'faceY' | 'yaw' | 'pitch'>): boolean {
  return Math.abs(features.faceScale / baseline.faceScale - 1) <= .2 &&
    Math.abs(features.faceX - baseline.faceX) <= .12 && Math.abs(features.faceY - baseline.faceY) <= .12 &&
    Math.abs(features.yaw - baseline.yaw) <= 15 && Math.abs(features.pitch - baseline.pitch) <= 15;
}

export function eyeDisplay(features: EyeFeatures): { x: number; y: number } {
  return { x: 1 - (features.left.x + features.right.x) / 2, y: .5 + ((features.left.y + features.right.y) / 2 - .5) * 3 };
}

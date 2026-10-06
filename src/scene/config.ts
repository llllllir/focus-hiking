import { sitePath } from '../site-path';
export const sceneConfig = {
  maxWidth: 1920, maxHeight: 1200, maxDpr: 1.25,
  exposure: .94, fogNear: 170, fogFar: 760,
  assetUrl: sitePath('assets/forest.glb'), manifestUrl: sitePath('assets/forest.json'),
} as const;

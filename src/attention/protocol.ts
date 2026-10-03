import type { FeatureResult } from './features';
export type WorkerRequest = { type: 'init'; baseUrl: string; delegate: 'CPU' | 'GPU' } |
  { type: 'frame'; bitmap: ImageBitmap; timestampMs: number };
export type WorkerResponse = { type: 'ready' } | { type: 'error'; message: string } |
  { type: 'result'; timestampMs: number; processingMs: number; result: FeatureResult };

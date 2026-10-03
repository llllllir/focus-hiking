import { FaceLandmarker, FilesetResolver } from '@mediapipe/tasks-vision';
import { extractFeatures } from './features';
import type { WorkerRequest, WorkerResponse } from './protocol';

let landmarker: FaceLandmarker | null = null;
const send = (message: WorkerResponse) => self.postMessage(message);
self.onmessage = async (event: MessageEvent<WorkerRequest>) => {
  const message = event.data;
  try {
    if (message.type === 'init') {
      const vision = await FilesetResolver.forVisionTasks(`${message.baseUrl}models/mediapipe/wasm`, true);
      landmarker = await FaceLandmarker.createFromOptions(vision, {
        baseOptions: { modelAssetPath: `${message.baseUrl}models/mediapipe/face_landmarker.task`, delegate: message.delegate },
        runningMode: 'VIDEO', numFaces: 1, outputFacialTransformationMatrixes: true,
        outputFaceBlendshapes: false, minFaceDetectionConfidence: .6, minFacePresenceConfidence: .6, minTrackingConfidence: .6,
      });
      send({ type: 'ready' });
    } else {
      if (!landmarker) throw new Error('模型尚未初始化');
      const start = performance.now();
      const result = landmarker.detectForVideo(message.bitmap, message.timestampMs);
      send({ type: 'result', timestampMs: message.timestampMs, processingMs: performance.now() - start,
        result: extractFeatures(result.faceLandmarks[0] ?? [], result.facialTransformationMatrixes[0]?.data ?? [], message.bitmap.width, message.bitmap.height) });
    }
  } catch (error) {
    send({ type: 'error', message: error instanceof Error ? error.message : String(error) });
  } finally {
    if (message.type === 'frame') message.bitmap.close();
  }
};

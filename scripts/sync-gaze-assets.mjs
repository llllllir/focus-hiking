import { readFile, writeFile, mkdir, readdir, copyFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
const root = path.resolve('public/models/mediapipe');
const packageRoot = path.resolve('node_modules/@mediapipe/tasks-vision');
const pkg = JSON.parse(await readFile(path.join(packageRoot, 'package.json'), 'utf8'));
const modelUrl = 'https://storage.googleapis.com/mediapipe-models/face_landmarker/face_landmarker/float16/1/face_landmarker.task';
await mkdir(path.join(root, 'wasm'), { recursive: true });
const files = [];
for (const name of (await readdir(path.join(packageRoot, 'wasm'))).sort()) {
  if (!/\.(wasm|js)$/.test(name)) continue;
  await copyFile(path.join(packageRoot, 'wasm', name), path.join(root, 'wasm', name));
  const bytes = await readFile(path.join(root, 'wasm', name));
  files.push({ file: `wasm/${name}`, bytes: bytes.length, sha256: createHash('sha256').update(bytes).digest('hex'), source: `@mediapipe/tasks-vision@${pkg.version}` });
}
const response = await fetch(modelUrl, { signal: AbortSignal.timeout(60000) });
if (!response.ok) throw new Error(`模型下载失败：HTTP ${response.status}`);
const bytes = Buffer.from(await response.arrayBuffer());
if (bytes.length < 1000000) throw new Error('模型体积异常');
const sha256 = createHash('sha256').update(bytes).digest('hex');
const lockPath = path.join(root, 'manifest.json');
let old;
try { old = JSON.parse(await readFile(lockPath, 'utf8')); } catch (error) { if (error.code !== 'ENOENT') throw error; }
if (old?.files.find(f => f.file === 'face_landmarker.task')?.sha256 && old.files.find(f => f.file === 'face_landmarker.task').sha256 !== sha256) throw new Error('版本1模型哈希变化，拒绝覆盖，请核查上游');
await writeFile(path.join(root, 'face_landmarker.task'), bytes);
files.push({ file: 'face_landmarker.task', bytes: bytes.length, sha256, source: modelUrl });
const license = await fetch('https://raw.githubusercontent.com/google-ai-edge/mediapipe/master/LICENSE', { signal: AbortSignal.timeout(30000) });
if (!license.ok) throw new Error('MediaPipe 许可下载失败');
await writeFile(path.join(root, 'LICENSE'), await license.text());
await writeFile(lockPath, JSON.stringify({ package: pkg.name, version: pkg.version, modelVersion: 'float16/1', files,
  codeLicense: 'Apache-2.0', modelDocumentation: 'https://developers.google.com/edge/mediapipe/solutions/vision/face_landmarker',
  modelCard: 'https://storage.googleapis.com/mediapipe-assets/Model%20Card%20MediaPipe%20Face%20Mesh%20V2.pdf',
  faceMeshModelLicense: 'Apache-2.0 (Face Mesh V2 official model card, page 1)',
  note: 'Runtime is local. The upstream MediaPipe LICENSE is included; model source and card are recorded separately. No camera data is downloaded or uploaded.' }, null, 2) + '\n');
console.log(`本地资源就绪：tasks-vision ${pkg.version}；模型 ${bytes.length} bytes，SHA256 ${sha256}`);

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import { sceneConfig } from './config';
import type { Point, Trail } from '../game/navigation';

export interface ForestManifest {
  route: [number, number, number][];
  viewpoints: { id: string; label: string; position: [number, number, number]; lookAt: [number, number, number] }[];
  source: string;
  baked: string[];
  trails?: Trail[];
  obstacles?: { x: number; z: number; radius: number }[];
}
export interface ForestView {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  manifest: ForestManifest;
  place(progress: number): void;
  viewpoint(id: string): void;
  walk(position: Point): void;
  look(dx: number, dy: number): void;
  resetLook(): void;
  move(dx: number, dz: number): void;
  pick(x: number, y: number): Point | null;
  resize(): void;
  dispose(): void;
}

export async function createForest(host: HTMLElement): Promise<ForestView> {
  const renderer = new THREE.WebGLRenderer({ antialias: true, powerPreference: 'high-performance' });
  renderer.outputColorSpace = THREE.SRGBColorSpace;
  renderer.toneMapping = THREE.ACESFilmicToneMapping;
  renderer.toneMappingExposure = sceneConfig.exposure;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.PCFSoftShadowMap;
  const scene = new THREE.Scene();
  scene.background = new THREE.Color('#adbdc0');
  scene.fog = new THREE.Fog('#adbdc0', sceneConfig.fogNear, sceneConfig.fogFar);
  const camera = new THREE.PerspectiveCamera(56, 1, .08, 500);
  host.append(renderer.domElement);
  const sun = new THREE.DirectionalLight('#fff0d3', 3.0);
  sun.position.set(-35, 45, 10); sun.target.position.set(0, 0, -20);
  sun.castShadow = true; sun.shadow.mapSize.set(2048, 2048);
  Object.assign(sun.shadow.camera, { left: -45, right: 45, top: 70, bottom: -70, near: 1, far: 130 });
  sun.shadow.normalBias = .035; sun.shadow.bias = -.0001;
  scene.add(sun, sun.target, new THREE.HemisphereLight('#d3e5ef', '#3c4a2d', 1.6));
  const detachedGeometry = new Set<THREE.BufferGeometry>();
  try {
    const response = await fetch(sceneConfig.manifestUrl);
    if (!response.ok) throw new Error(`场景清单加载失败 (${response.status})`);
    const manifest: ForestManifest = await response.json();
    const gltf = await new GLTFLoader().loadAsync(sceneConfig.assetUrl);
    scene.add(gltf.scene);
    // Repeated Blender meshes become draw batches; keep authored transforms.
    gltf.scene.updateMatrixWorld(true);
    const batches = new Map<string, THREE.Mesh[]>();
    gltf.scene.traverse(object => {
      if (!(object instanceof THREE.Mesh)) return;
      for (const material of Array.isArray(object.material) ? object.material : [object.material]) {
        if (material.name.includes('Foliage') || material.name.includes('fern')) { material.transparent = false; material.alphaTest = .45; material.side = THREE.DoubleSide; material.depthWrite = true; }
      }
      object.receiveShadow = true;
      object.castShadow = !object.name.startsWith('Ground') && !object.name.startsWith('Water');
      let isTree = object.name.startsWith('Tree_');
      for (let parent = object.parent; parent; parent = parent.parent) if (parent.name.startsWith('Tree_')) isTree = true;
      if (isTree) {
        const material = object.material;
        const position = new THREE.Vector3().setFromMatrixPosition(object.matrixWorld);
        const key = `${object.geometry.uuid}/${Array.isArray(material) ? material.map(m => m.uuid).join(',') : material.uuid}/${Math.floor(position.x / 24)},${Math.floor(position.z / 24)}`;
        const list = batches.get(key) ?? []; list.push(object); batches.set(key, list);
      }
    });
    for (const meshes of batches.values()) {
      const first = meshes[0];
      const batch = new THREE.InstancedMesh(first.geometry, first.material, meshes.length);
      batch.castShadow = true; batch.receiveShadow = true;
      meshes.forEach((mesh, index) => { batch.setMatrixAt(index, mesh.matrixWorld); mesh.removeFromParent(); });
      batch.computeBoundingSphere(); scene.add(batch);
    }
    // Static rocks, timber and bridge pieces share draw calls while preserving authored UVs.
    const staticBatches = new Map<string, THREE.Mesh[]>();
    gltf.scene.traverse(object => {
      if (!(object instanceof THREE.Mesh) || Array.isArray(object.material) || object.name.startsWith('Ground') || object.name.startsWith('Water')) return;
      const key = `${object.material.uuid}/${Object.keys(object.geometry.attributes).sort().join(',')}/${!!object.geometry.index}`;
      const list = staticBatches.get(key) ?? []; list.push(object); staticBatches.set(key, list);
    });
    for (const meshes of staticBatches.values()) {
      if (meshes.length < 2) continue;
      const transformed = meshes.map(mesh => mesh.geometry.clone().applyMatrix4(mesh.matrixWorld));
      const geometry = mergeGeometries(transformed); transformed.forEach(g => g.dispose());
      if (!geometry) continue;
      const batch = new THREE.Mesh(geometry, meshes[0].material); batch.castShadow = true; batch.receiveShadow = true;
      meshes.forEach(mesh => { detachedGeometry.add(mesh.geometry); mesh.removeFromParent(); }); scene.add(batch);
    }
    const path = new THREE.CatmullRomCurve3(manifest.route.map(point => new THREE.Vector3(...point)), false, 'centripetal');
    const ground: THREE.Object3D[] = [];
    gltf.scene.traverse(object => { if (object instanceof THREE.Mesh && object.name.startsWith('Ground')) ground.push(object); });
    for (const meshes of staticBatches.values()) for (const mesh of meshes) if (mesh.name.startsWith('Bridge_Plank')) ground.push(mesh);
    const ray = new THREE.Raycaster();
    let yaw = 0, pitch = 0, baseYaw = 0;
    const orient = () => { camera.rotation.set(pitch, baseYaw + yaw, 0, 'YXZ'); };
    const look = (dx: number, dy: number) => { yaw -= dx * .003; pitch = THREE.MathUtils.clamp(pitch - dy * .003, -1.2, 1.2); orient(); };
    const resetLook = () => { yaw = 0; pitch = 0; orient(); };
    const walk = (position: Point) => {
      const dx = position[0] - camera.position.x, dz = position[2] - camera.position.z;
      if (Math.hypot(dx, dz) > .001) {
        const heading = Math.atan2(-dx, -dz);
        const difference = Math.atan2(Math.sin(heading - baseYaw), Math.cos(heading - baseYaw));
        baseYaw += difference * .08;
      }
      camera.position.set(...position); orient();
    };
    const move = (dx: number, dz: number) => {
      const angle = baseYaw + yaw;
      const x = camera.position.x + dx * Math.cos(angle) + dz * Math.sin(angle);
      const z = camera.position.z - dx * Math.sin(angle) + dz * Math.cos(angle);
      if (Math.abs(x) > 65 || z > 42 || z < -85 || (manifest.obstacles ?? []).some(o => Math.hypot(x - o.x, z - o.z) < o.radius + .3)) return;
      ray.set(new THREE.Vector3(x, 100, z), new THREE.Vector3(0, -1, 0));
      const hit = ray.intersectObjects(ground, false)[0];
      if (hit && hit.point.y > -.27 && Math.abs(hit.point.y + 1.7 - camera.position.y) < .5) camera.position.set(x, hit.point.y + 1.7, z);
    };
    const pick = (x: number, y: number): Point | null => {
      ray.setFromCamera(new THREE.Vector2(x * 2 - 1, 1 - y * 2), camera);
      const hit = ray.intersectObjects(ground, false)[0];
      return hit ? [hit.point.x, hit.point.y + 1.7, hit.point.z] : null;
    };
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, sceneConfig.maxDpr, sceneConfig.maxWidth / Math.max(width, 1), sceneConfig.maxHeight / Math.max(height, 1));
      renderer.setPixelRatio(dpr); renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix();
    };
    const place = (progress: number) => {
      const p = Math.min(1, Math.max(0, progress));
      camera.position.copy(path.getPointAt(p));
      ray.set(new THREE.Vector3(camera.position.x, 100, camera.position.z), new THREE.Vector3(0, -1, 0));
      const surface = ray.intersectObjects(ground, false)[0];
      if (surface) camera.position.y = surface.point.y + 1.7;
      const ahead = path.getPointAt(Math.min(1, p + .025));
      if (p > .975) ahead.add(path.getTangentAt(p).multiplyScalar(4));
      baseYaw = Math.atan2(camera.position.x - ahead.x, camera.position.z - ahead.z);
      orient();
    };
    const viewpoint = (id: string) => {
      const view = manifest.viewpoints.find(v => v.id === id);
      if (!view) return;
      camera.position.set(...view.position); camera.lookAt(new THREE.Vector3(...view.lookAt));
    };
    resize(); place(0);
    return { renderer, scene, camera, manifest, resize, place, viewpoint, walk, look, resetLook, move, pick, dispose: () => { detachedGeometry.forEach(g => g.dispose()); disposeScene(scene, renderer); } };
  } catch (error) { detachedGeometry.forEach(g => g.dispose()); disposeScene(scene, renderer); throw error; }
}

function disposeScene(scene: THREE.Scene, renderer: THREE.WebGLRenderer) {
  const geometries = new Set<THREE.BufferGeometry>();
  const materials = new Set<THREE.Material>();
  const textures = new Set<THREE.Texture>();
  scene.traverse(object => {
    if (object instanceof THREE.Mesh) {
      geometries.add(object.geometry);
      (Array.isArray(object.material) ? object.material : [object.material]).forEach(material => {
        materials.add(material);
        Object.values(material).forEach(value => { if (value instanceof THREE.Texture) textures.add(value); });
      });
    }
    if (object instanceof THREE.Light) object.shadow?.dispose();
  });
  textures.forEach(t => { const data = t.source.data; if (typeof ImageBitmap !== 'undefined' && data instanceof ImageBitmap) data.close(); t.dispose(); });
  materials.forEach(m => m.dispose()); geometries.forEach(g => g.dispose());
  renderer.dispose(); renderer.domElement.remove();
}

import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { sceneConfig } from './config';

export interface ForestManifest {
  route: [number, number, number][];
  viewpoints: { id: string; label: string; position: [number, number, number]; lookAt: [number, number, number] }[];
  source: string;
  baked: string[];
}
export interface ForestView {
  renderer: THREE.WebGLRenderer;
  scene: THREE.Scene;
  camera: THREE.PerspectiveCamera;
  manifest: ForestManifest;
  place(progress: number): void;
  viewpoint(id: string): void;
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
      object.receiveShadow = true;
      object.castShadow = !object.name.startsWith('Ground') && !object.name.startsWith('Water');
      let isTree = object.name.startsWith('Tree_');
      for (let parent = object.parent; parent; parent = parent.parent) if (parent.name.startsWith('Tree_')) isTree = true;
      if (isTree) {
        const material = object.material;
        const key = `${object.geometry.uuid}/${Array.isArray(material) ? material.map(m => m.uuid).join(',') : material.uuid}`;
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
    const path = new THREE.CatmullRomCurve3(manifest.route.map(point => new THREE.Vector3(...point)), false, 'centripetal');
    const resize = () => {
      const { width, height } = host.getBoundingClientRect();
      const dpr = Math.min(devicePixelRatio || 1, sceneConfig.maxDpr, sceneConfig.maxWidth / Math.max(width, 1), sceneConfig.maxHeight / Math.max(height, 1));
      renderer.setPixelRatio(dpr); renderer.setSize(width, height);
      camera.aspect = width / Math.max(height, 1); camera.updateProjectionMatrix();
    };
    const place = (progress: number) => {
      const p = Math.min(1, Math.max(0, progress));
      camera.position.copy(path.getPointAt(p));
      const look = path.getPointAt(Math.min(1, p + .025));
      if (p > .975) look.add(path.getTangentAt(p).multiplyScalar(4));
      look.y = camera.position.y - .12;
      camera.lookAt(look);
    };
    const viewpoint = (id: string) => {
      const view = manifest.viewpoints.find(v => v.id === id);
      if (!view) return;
      camera.position.set(...view.position); camera.lookAt(new THREE.Vector3(...view.lookAt));
    };
    resize(); place(0);
    return { renderer, scene, camera, manifest, resize, place, viewpoint, dispose: () => disposeScene(scene, renderer) };
  } catch (error) { disposeScene(scene, renderer); throw error; }
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

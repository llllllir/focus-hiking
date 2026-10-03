import type * as THREE from 'three';
export interface IslandRenderer {
  backend: string;
  gpuDescription: string;
  domElement: HTMLCanvasElement;
  info: { render: { calls: number; triangles: number } };
  setPixelRatio(ratio: number): void;
  setSize(width: number, height: number): void;
  setQuality(size: number): void;
  render(scene: THREE.Scene, camera: THREE.PerspectiveCamera): void;
  dispose(): void;
}
export function createIslandRenderer(host: HTMLElement, scene: THREE.Scene, original: THREE.WebGLRenderer): Promise<IslandRenderer>;

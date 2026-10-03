import test from 'node:test';
import assert from 'node:assert/strict';
import * as THREE from 'three';
import { makeWildlife, speciesDimensions } from '../src/scene/wildlife';
import { surfaceSampler, addEcology } from '../src/scene/ecology';
import { refineCreek, creekCenter, creekLevel } from '../src/scene/creek';

test('all eleven wildlife skins have valid normalized bindings and bounded material draw groups',()=>{
  for(const species of Object.keys(speciesDimensions) as (keyof typeof speciesDimensions)[]){
    const rig=makeWildlife(species),g=rig.mesh.geometry,weights=g.getAttribute('skinWeight'),indices=g.getAttribute('skinIndex');
    assert.ok(rig.mesh.isSkinnedMesh&&rig.bones.length>=5,species);assert.ok(g.groups.length<=5,species);
    for(let i=0;i<weights.count;i++){let sum=0;for(let j=0;j<4;j++){sum+=weights.getComponent(i,j);assert.ok(indices.getComponent(i,j)<rig.bones.length);}assert.ok(Math.abs(sum-1)<1e-6);}
    rig.mesh.updateMatrixWorld(true);rig.mesh.skeleton.update();assert.ok([...rig.mesh.skeleton.boneMatrices].every(Number.isFinite));
    g.dispose();(rig.mesh.material as THREE.Material[]).forEach(m=>m.dispose());
  }
});

test('a fish tail joint actually deforms bound vertices, rather than moving a whole rigid actor',()=>{
  const rig=makeWildlife('carp'),g=rig.mesh.geometry,indices=g.getAttribute('skinIndex'),position=g.getAttribute('position');
  const tailIndex=rig.bones.indexOf(rig.tail);let vertex=-1;for(let i=0;i<indices.count;i++)if(indices.getX(i)===tailIndex&&position.getZ(i)<-.15){vertex=i;break;}
  assert.ok(vertex>=0);rig.mesh.updateMatrixWorld(true);const rest=new THREE.Vector3().fromBufferAttribute(position,vertex);const before=rig.mesh.applyBoneTransform(vertex,rest.clone());
  rig.tail.rotation.y=.6;rig.mesh.updateMatrixWorld(true);const after=rig.mesh.applyBoneTransform(vertex,rest.clone());assert.ok(after.distanceTo(before)>.005);
});

test('spatial terrain sampling agrees with triangle height, slope, bridge priority and transformed geometry',()=>{
  const scene=new THREE.Scene(),plane=new THREE.Mesh(new THREE.PlaneGeometry(12,12,2,2),new THREE.MeshBasicMaterial());plane.rotation.x=-Math.PI/2;plane.position.set(8,2,-4);scene.add(plane);scene.updateMatrixWorld(true);
  const bridge=new THREE.Mesh(new THREE.PlaneGeometry(2,2),new THREE.MeshBasicMaterial());bridge.rotation.x=-Math.PI/2;bridge.position.set(8,3,-4);scene.add(bridge);
  const sample=surfaceSampler([plane,bridge]);assert.equal(sample(8,-4)?.point.y,3);assert.equal(sample(11,-4)?.point.y,2);assert.ok(sample(11,-4)!.normal.y>.99);assert.equal(sample(100,100),null);
});

test('narrow creek water faces upward and bed contact remains below the water level',()=>{
  const scene=new THREE.Scene(),plane=new THREE.Mesh(new THREE.PlaneGeometry(450,40,120,12),new THREE.MeshBasicMaterial());plane.rotation.x=-Math.PI/2;plane.position.z=-108;plane.name='Ground_Test';scene.add(plane);scene.updateMatrixWorld(true);
  const ground:THREE.Object3D[]=[plane],creek=refineCreek(scene,ground);assert.ok(creek.water.geometry.getAttribute('normal').getY(10)>.99);scene.updateMatrixWorld(true);
  const sample=surfaceSampler(ground),point=sample(0,creekCenter(0));assert.ok(point);assert.ok(Math.abs(point.point.y-(creekLevel-.15))<.001);assert.equal(creek.water.position.y,0);
});

test('dense ecological details retain finite geometry and sampled terrain contacts',()=>{
  const scene=new THREE.Scene(),plane=new THREE.Mesh(new THREE.PlaneGeometry(450,450,24,24),new THREE.MeshBasicMaterial());plane.rotation.x=-Math.PI/2;scene.add(plane);scene.updateMatrixWorld(true);
  const ecology=addEcology(scene,[plane],{route:[],viewpoints:[],baked:[],source:'synthetic flat terrain fixture'});assert.equal(ecology.counts.grass,24000);assert.equal(ecology.ancientTrees,20);
  for(const c of ecology.contacts)assert.ok(Math.abs(c.position[1])<1e-5);
  scene.traverse(o=>{if(o instanceof THREE.Mesh){assert.ok([...o.geometry.getAttribute('position').array].every(Number.isFinite),o.name);if(o instanceof THREE.InstancedMesh)assert.ok([...o.instanceMatrix.array].every(Number.isFinite),o.name);}});
});

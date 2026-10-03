import fs from 'node:fs/promises';
import crypto from 'node:crypto';
import { GLTFExporter } from 'three/addons/exporters/GLTFExporter.js';
import * as THREE from 'three';
import { makeWildlife, speciesDimensions } from '../src/scene/wildlife.ts';

// Browser FileReader API used by Three's exporter, implemented over native Blob.
globalThis.FileReader=class {
  readAsArrayBuffer(blob){blob.arrayBuffer().then(result=>{this.result=result;this.onloadend?.();});}
  readAsDataURL(blob){blob.arrayBuffer().then(result=>{this.result=`data:${blob.type};base64,${Buffer.from(result).toString('base64')}`;this.onloadend?.();});}
};
const scene=new THREE.Scene(),clips=[],records=[];
for(const [i,species] of Object.keys(speciesDimensions).entries()){
  const rig=makeWildlife(species);rig.mesh.position.set(i%4*2.5,0,Math.floor(i/4)*2.5);scene.add(rig.mesh);
  rig.bones.forEach(b=>b.name=species+'_'+b.name);
  const tracks=[];
  for(const [j,b] of [...rig.limbs,rig.tail].entries()){
    const values=[];for(let k=0;k<=12;k++){const a=Math.sin(k/12*Math.PI*2+j*Math.PI)*.17;const q=new THREE.Quaternion().setFromAxisAngle(new THREE.Vector3(species==='carp'?0:1,species==='carp'?1:0,0),a);values.push(q.x,q.y,q.z,q.w);}
    tracks.push(new THREE.QuaternionKeyframeTrack(b.uuid+'.quaternion',Array.from({length:13},(_,k)=>k/6),values));
  }
  if(tracks.length)clips.push(new THREE.AnimationClip(species+'_loop',2,tracks));
  rig.mesh.geometry.computeBoundingBox();const size=rig.mesh.geometry.boundingBox.getSize(new THREE.Vector3());
  records.push({species,dimensionsMetres:speciesDimensions[species],dimensionBasis:'design reference: eagle wingspan, deer shoulder height, other species body length',restBoundsMetres:{width:size.x,height:size.y,length:size.z},joints:rig.bones.map(b=>b.name),vertices:rig.mesh.geometry.attributes.position.count,materialGroups:rig.mesh.geometry.groups.length,status:'original anatomical study; human anatomy review pending'});
}
const exporter=new GLTFExporter();const glb=await exporter.parseAsync(scene,{binary:true,animations:clips});
await fs.mkdir('public/assets',{recursive:true});await fs.writeFile('public/assets/wildlife.glb',Buffer.from(glb));
const sourceSha256=crypto.createHash('sha256').update(await fs.readFile('src/scene/wildlife.ts')).digest('hex');
await fs.writeFile('src/scene/wildlife-assets.json',JSON.stringify({source:'Original procedural models in wildlife.ts',sourceSha256,license:'Original project asset; no third-party model license',rigging:'glTF skins; named joints; looping animation channels',records},null,2)+'\n');
console.log(JSON.stringify({models:records.length,animations:clips.length,bytes:glb.byteLength}));

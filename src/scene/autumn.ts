import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';

// Original editable runtime models, in metres. They are anatomical design models,
// not photogrammetry or externally licensed animal assets.
export function addAutumnScenery(scene: THREE.Scene, ground: THREE.Object3D[]) {
  const ray = new THREE.Raycaster();
  const elevation=(x:number,z:number)=>{
    ray.set(new THREE.Vector3(x,100,z),new THREE.Vector3(0,-1,0));
    return ray.intersectObjects(ground,false)[0]?.point.y ?? 0;
  };
  const fur=new THREE.MeshStandardMaterial({name:'Moose_Fur',color:'#40352c',roughness:.98});
  const horn=new THREE.MeshStandardMaterial({name:'Moose_Antler',color:'#a89676',roughness:.9});
  const dark=new THREE.MeshStandardMaterial({name:'Moose_Hoof_Eye',color:'#151410',roughness:.5});
  const feather=new THREE.MeshStandardMaterial({name:'Mallard_Feather',color:'#817f73',roughness:.88});
  const chest=new THREE.MeshStandardMaterial({name:'Mallard_Chest',color:'#5a3023',roughness:.88});
  const green=new THREE.MeshStandardMaterial({name:'Mallard_Head',color:'#173e32',roughness:.32,metalness:.18});
  const ivory=new THREE.MeshStandardMaterial({name:'Mallard_Neck_Ring',color:'#d8d6c5',roughness:.8});
  const orange=new THREE.MeshStandardMaterial({name:'Mallard_Feet',color:'#9e4f1b',roughness:.8});
  const bill=new THREE.MeshStandardMaterial({name:'Mallard_Bill',color:'#b99b35',roughness:.8});
  const unit=new THREE.SphereGeometry(1,24,16);
  function oval(group:THREE.Object3D,mat:THREE.Material,p:number[],s:number[],angle=0){
    const mesh=new THREE.Mesh(unit,mat);mesh.position.set(p[0],p[1],p[2]);mesh.scale.set(s[0],s[1],s[2]);mesh.rotation.x=angle;group.add(mesh);return mesh;
  }
  function limb(group:THREE.Object3D,mat:THREE.Material,a:number[],b:number[],r1:number,r2:number){
    const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),v=end.clone().sub(start);
    const m=new THREE.Mesh(new THREE.CylinderGeometry(r2,r1,v.length(),12,2),mat);
    m.position.copy(start.add(end).multiplyScalar(.5));m.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize());group.add(m);
  }
  // A continuous torso loft avoids separate spherical shoulder/abdomen blobs.
  function torso(stations:number[][],radial=24){
    const positions:number[]=[],indices:number[]=[];
    for(const [z,y,w,h] of stations)for(let k=0;k<=radial;k++){
      const a=k/radial*Math.PI*2;positions.push(Math.cos(a)*w,y+Math.sin(a)*h,z);
    }
    for(let j=0;j<stations.length-1;j++)for(let k=0;k<radial;k++){
      const a=j*(radial+1)+k,b=a+radial+1;indices.push(a,b,a+1,a+1,b,b+1);
    }
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(positions,3));g.setIndex(indices);g.computeVertexNormals();return g;
  }
  function moose(){
    const group=new THREE.Group();group.name='Wildlife_Moose';
    group.add(new THREE.Mesh(torso([[-1.35,1.55,.02,.04],[-1.15,1.63,.32,.42],[-.6,1.62,.45,.58],[0,1.68,.47,.62],[.5,1.87,.4,.62],[.85,1.86,.28,.42],[1.03,1.85,.12,.16]]),fur));
    const neck=new THREE.Group();neck.position.set(0,1.88,.62);group.add(neck);
    neck.add(new THREE.Mesh(torso([[.0,.05,.18,.28],[.24,.18,.24,.32],[.49,.38,.2,.29],[.7,.4,.19,.25],[.91,.28,.19,.22],[1.14,.13,.22,.2],[1.4,.1,.2,.13],[1.47,.1,.02,.06]]),fur));
    oval(neck,dark,[0,.12,1.43],[.15,.07,.04]);
    // Bell, large ears, lateral eyes and nostrils.
    oval(neck,fur,[0,-.19,.76],[.09,.24,.08],-.2);
    for(const side of [-1,1]){
      const ear=oval(neck,fur,[side*.3,.64,.51],[.09,.045,.23]);ear.rotation.z=side*-.5;
      oval(neck,dark,[side*.202,.47,.85],[.027,.025,.025]);
      oval(neck,dark,[side*.12,.16,1.43],[.034,.018,.011]);
      // Palmate antlers: irregular solid blade plus independent tapered tines.
      limb(neck,horn,[side*.13,.66,.63],[side*.42,.85,.59],.035,.048);
      const shape=new THREE.Shape();shape.moveTo(.0,.0);shape.lineTo(.22,-.08);shape.lineTo(.56,.02);shape.lineTo(.65,.22);shape.lineTo(.53,.36);shape.lineTo(.26,.29);shape.lineTo(.04,.17);shape.closePath();
      const palm=new THREE.Mesh(new THREE.ExtrudeGeometry(shape,{depth:.035,bevelEnabled:true,bevelSegments:2,steps:1,bevelSize:.012,bevelThickness:.012}),horn);
      palm.position.set(side*.4,.86,.59);palm.scale.x=side;palm.rotation.x=-.35;neck.add(palm);
      for(let k=0;k<6;k++){
        const x=.48+k*.1,y=.91+Math.sin(k*.47)*.22,z=.61;
        limb(neck,horn,[side*x,y,z],[side*(x+.025),y+.17+(k%3)*.05,z+.02],.025,.003);
      }
    }
    const legs:THREE.Group[]=[];
    for(const side of [-1,1])for(const front of [false,true]){
      const z=front?.61:-.92;const leg=new THREE.Group();leg.position.set(side*.27,1.52,z);group.add(leg);legs.push(leg);
      limb(leg,fur,[0,0,0],[side*.035,-.68,front?.03:-.17],.12,.055);
      limb(leg,fur,[side*.035,-.68,front?.03:-.17],[side*.045,-1.32,.05],.052,.032);
      for(const split of [-1,1])oval(leg,dark,[side*.045+split*.035,-1.43,.09],[.033,.08,.1]);
    }
    oval(group,fur,[0,1.7,-1.3],[.06,.09,.13]);
    return {group,legs,neck};
  }
  const mooseModels=[moose(),moose()];
  mooseModels.forEach((a,i)=>{a.group.position.set(-32+i*4,elevation(-32+i*4,24-i*2),24-i*2);a.group.rotation.y=-Math.PI/2;scene.add(a.group);});
  const mooseOrigins=mooseModels.map(a=>a.group.position.clone());
  const shelters=mooseModels.map((a,i)=>new THREE.Vector3(a.group.position.x-2,elevation(a.group.position.x-2,20-i*2),20-i*2));
  function duck(){
    const group=new THREE.Group();group.name='Wildlife_Mallard';
    oval(group,feather,[0,0,0],[.1,.105,.24]);oval(group,chest,[0,.03,.16],[.095,.11,.12]);
    oval(group,green,[0,.14,.25],[.065,.1,.065],-.2);oval(group,ivory,[0,.09,.2],[.066,.012,.062]);
    oval(group,green,[0,.21,.28],[.067,.063,.082]);oval(group,bill,[0,.2,.377],[.037,.012,.052]);
    for(const side of [-1,1]){oval(group,dark,[side*.063,.224,.301],[.008,.008,.008]);oval(group,orange,[side*.052,-.105,-.13],[.024,.014,.065]);}
    const wings:THREE.Group[]=[];
    for(const side of [-1,1]){
      const wing=new THREE.Group();wing.position.set(side*.07,.035,.04);group.add(wing);wings.push(wing);
      oval(wing,feather,[side*.17,0,-.035],[.2,.02,.105]);
      // Separate overlapping primaries produce a feathered trailing silhouette.
      for(let k=0;k<10;k++){
        const f=oval(wing,feather,[side*(.28+k*.009),-.006,-.09-k*.016],[.1-k*.003,.007,.019]);f.rotation.y=side*(-.16-k*.045);
      }
    }
    oval(group,feather,[0,0,-.27],[.064,.014,.09]);
    return {group,wings};
  }
  const ducks=Array.from({length:4},duck);
  const waterSurfaces:THREE.Mesh[]=[];scene.traverse(o=>{if(o instanceof THREE.Mesh&&(Array.isArray(o.material)?o.material:[o.material]).some(m=>m.name==='Water'))waterSurfaces.push(o);});
  scene.updateMatrixWorld(true);ray.set(new THREE.Vector3(-12,100,-108.5),new THREE.Vector3(0,-1,0));
  const duckWaterHeight=(ray.intersectObjects(waterSurfaces,false)[0]?.point.y??.52)+.08;
  ducks.forEach((a,i)=>{a.group.position.set(i===0?-8.2:-5+i*3,i===0?1.6:2+i*.2,i===0?-102.5:-107-i*3);a.group.rotation.y=Math.PI/2;
    a.wings[0].rotation.z=.8-i*.2;a.wings[1].rotation.z=-.35+i*.1;scene.add(a.group);});
  // Keep models editable but batch static siblings by material to bound draw calls.
  for(const root of [...mooseModels.map(a=>a.group),...ducks.map(a=>a.group)]){
    const joints:THREE.Object3D[]=[];root.traverse(o=>{if(o instanceof THREE.Group)joints.push(o);});
    for(const joint of joints){
      const batches=new Map<THREE.Material,THREE.Mesh[]>();
      for(const child of joint.children)if(child instanceof THREE.Mesh&&!Array.isArray(child.material)){const b=batches.get(child.material)??[];b.push(child);batches.set(child.material,b);}
      for(const [mat,parts] of batches){
        const pieces=parts.map(m=>{m.updateMatrix();const g=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();g.applyMatrix4(m.matrix);g.deleteAttribute('uv');return g;});
        const merged=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());
        if(merged){parts.forEach(m=>{m.removeFromParent();if(m.geometry!==unit)m.geometry.dispose();});joint.add(new THREE.Mesh(merged,mat));}
      }
    }
  }
  unit.dispose();
  const cabin=new THREE.Group();cabin.name='Autumn_Cabin';const cx=25,cz=78,cy=elevation(cx,cz);
  cabin.position.set(cx,cy,cz);scene.add(cabin);
  const wood=new THREE.MeshStandardMaterial({name:'Cabin_Weathered_Red',color:'#692b24',roughness:.94});
  const timber=new THREE.MeshStandardMaterial({name:'Cabin_Timber',color:'#382d23',roughness:.98});
  const roof=new THREE.MeshStandardMaterial({name:'Cabin_Roof',color:'#565047',roughness:.96});
  const stone=new THREE.MeshStandardMaterial({name:'Cabin_Foundation',color:'#83837a',roughness:1});
  const frame=new THREE.MeshStandardMaterial({name:'Cabin_Window_Frame',color:'#cccac0',roughness:.9});
  const glass=new THREE.MeshStandardMaterial({name:'Cabin_Window_Glass',color:'#263b42',roughness:.18,metalness:.35});
  function box(mat:THREE.Material,p:number[],s:number[]){const m=new THREE.Mesh(new THREE.BoxGeometry(s[0],s[1],s[2]),mat);m.position.set(p[0],p[1],p[2]);cabin.add(m);return m;}
  box(stone,[0,.2,0],[6.2,.4,8.2]);box(wood,[0,1.65,0],[6,2.9,8]);
  for(let i=0;i<31;i++){box(timber,[-3+i*.2,1.65,4.015],[.018,2.9,.025]);box(timber,[-3+i*.2,1.65,-4.015],[.018,2.9,.025]);}
  for(let i=0;i<41;i++){box(timber,[3.015,1.65,-4+i*.2],[.025,2.9,.018]);box(timber,[-3.015,1.65,-4+i*.2],[.025,2.9,.018]);}
  for(const side of [-1,1]){const panel=box(roof,[side*1.6,3.64,0],[3.6,.16,8.6]);panel.rotation.z=side*-.36;}
  // Closed front and back triangular gables, matching the roof pitch.
  for(const z of [-4,4]){const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute([-3,3.1,z,3,3.1,z,0,4.25,z],3));g.setIndex(z>0?[0,1,2]:[2,1,0]);g.computeVertexNormals();cabin.add(new THREE.Mesh(g,wood));}
  function window(p:number[],side=false){
    const w=new THREE.Group();w.position.set(p[0],p[1],p[2]);if(side)w.rotation.y=Math.PI/2;cabin.add(w);
    const pane=new THREE.Mesh(new THREE.BoxGeometry(1,.95,.045),glass);w.add(pane);
    for(const x of [-.53,0,.53]){const m=new THREE.Mesh(new THREE.BoxGeometry(.055,1.06,.07),frame);m.position.x=x;w.add(m);}
    for(const y of [-.5,0,.5]){const m=new THREE.Mesh(new THREE.BoxGeometry(1.1,.045,.07),frame);m.position.y=y;w.add(m);}
  }
  window([-1.5,1.85,4.06]);window([1.5,1.85,4.06]);for(const z of [-2.6,0,2.6])window([3.06,1.85,z],true);
  for(const x of [-3,3])for(const z of [-4,4])box(timber,[x,1.65,z],[.13,3,.13]);
  for(let i=0;i<3;i++){
    const mat=new THREE.MeshStandardMaterial({name:'Camp_Barrel',color:i===2?'#773d2d':'#355465',roughness:.82,metalness:.35});
    const barrel=new THREE.Mesh(new THREE.CylinderGeometry(.29,.29,i===2?.42:.82,32),mat);barrel.position.set(-1.6+i*.75,i===2?.41:.61,4.85);cabin.add(barrel);
  }
  box(stone,[2.73,1.35,4.12],[.36,.5,.13]);
  // Fallen leaves use deterministic irregular scatter, one instanced draw.
  const leafShape=new THREE.Shape();leafShape.moveTo(0,-.055);leafShape.quadraticCurveTo(.065,0,0,.09);leafShape.quadraticCurveTo(-.055,0,0,-.055);
  const leafGeometry=new THREE.ShapeGeometry(leafShape,4);leafGeometry.rotateX(-Math.PI/2);
  const leafMaterial=new THREE.MeshStandardMaterial({name:'Autumn_Fallen_Leaves',color:'#a77538',roughness:1,side:THREE.DoubleSide});
  const fallen=new THREE.InstancedMesh(leafGeometry,leafMaterial,420);fallen.name='Autumn_Leaf_Litter';
  let scatterSeed=7093;const random=()=>{scatterSeed=(Math.imul(scatterSeed,1664525)+1013904223)>>>0;return scatterSeed/4294967296;};
  const transform=new THREE.Object3D();
  for(let i=0;i<420;i++){
    const x=-34+random()*20,z=17+random()*18;transform.position.set(x,elevation(x,z)+.008,z);transform.rotation.set((random()-.5)*.12,random()*Math.PI*2,(random()-.5)*.12);transform.scale.setScalar(.6+random()*.8);transform.updateMatrix();fallen.setMatrixAt(i,transform.matrix);
    fallen.setColorAt(i,new THREE.Color().setHSL(.065+random()*.045,.35+random()*.2,.3+random()*.12));
  }
  fallen.receiveShadow=true;scene.add(fallen);
  // Flatten the static house into one draw per material, keeping detailed board seams.
  cabin.updateMatrixWorld(true);
  const cabinBatches=new Map<THREE.Material,THREE.Mesh[]>();
  cabin.traverse(o=>{if(o instanceof THREE.Mesh&&!Array.isArray(o.material)){const b=cabinBatches.get(o.material)??[];b.push(o);cabinBatches.set(o.material,b);}});
  const inverse=new THREE.Matrix4().copy(cabin.matrixWorld).invert();
  for(const [mat,parts] of cabinBatches){
    const pieces=parts.map(m=>{const g=m.geometry.index?m.geometry.toNonIndexed():m.geometry.clone();g.applyMatrix4(new THREE.Matrix4().multiplyMatrices(inverse,m.matrixWorld));g.deleteAttribute('uv');return g;});
    const merged=mergeGeometries(pieces);pieces.forEach(g=>g.dispose());
    if(merged){parts.forEach(m=>{m.removeFromParent();m.geometry.dispose();});cabin.add(new THREE.Mesh(merged,mat));}
  }
  scene.updateMatrixWorld(true);
  for(const root of [...mooseModels.map(a=>a.group),...ducks.map(a=>a.group),cabin])root.traverse(o=>{if(o instanceof THREE.Mesh){o.castShadow=true;o.receiveShadow=true;}});
  let stormBlend=0,previousTime=0;
  return {
    moose:mooseModels.map(a=>a.group),ducks:ducks.map(a=>a.group),cabin,
    update(time:number,raining=false){
      const dt=Math.max(0,Math.min(.1,time-previousTime));previousTime=time;
      stormBlend=THREE.MathUtils.clamp(stormBlend+(raining?dt:-dt)*.055,0,1);
      mooseModels.forEach((a,i)=>{a.group.position.copy(mooseOrigins[i]).lerp(shelters[i],stormBlend);a.neck.rotation.x=Math.sin(time*.25+i)*.045+stormBlend*.12;
        a.legs.forEach((l,k)=>l.rotation.x=stormBlend>0&&stormBlend<1?Math.sin(time*2.2+k*Math.PI)*.16:Math.sin(time*.4+i+k)*.006);});
      ducks.forEach((a,i)=>{const clearX=(i===0?-8.2:-5+i*3)+Math.sin(time*.08+i)*7;
        a.group.position.x=THREE.MathUtils.lerp(clearX,-12+i*.8,stormBlend);
        a.group.position.z=THREE.MathUtils.lerp(i===0?-102.5:-107-i*3,-108.5+i*.1,stormBlend);
        a.group.position.y=THREE.MathUtils.lerp((i===0?1.6:2+i*.2)+Math.sin(time*.9+i)*.12,duckWaterHeight,stormBlend);a.group.rotation.y=Math.PI/2;
        a.wings.forEach((w,k)=>{w.rotation.z=(k===0?1:-1)*Math.sin(time*5.5+i)*.65*(1-stormBlend);w.rotation.y=(k===0?1:-1)*stormBlend*1.25;});});
    },
    views:{
      moose:{position:[-33,elevation(-33,31)+1.7,31],lookAt:[-30,mooseModels[0].group.position.y+1.6,23]},
      wetland:{position:[-9,1.1,-101],lookAt:[-1,3,-111]},
      cabin:{position:[cx-10,cy+1.7,cz+14],lookAt:[cx,cy+2,cz]},
      canopy:{position:[-33,elevation(-33,18)+1.7,18],lookAt:[-48,elevation(-33,18)+11,32]},
    },
    solids:[{minX:cx-3.3,maxX:cx+3.3,minZ:cz-4.3,maxZ:cz+4.3}],
  };
}

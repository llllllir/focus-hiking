import * as THREE from 'three';
import { mergeGeometries } from 'three/addons/utils/BufferGeometryUtils.js';
import type { ForestManifest } from './forest';
import { nearestTrack } from '../game/navigation';

export function surfaceSampler(ground:THREE.Object3D[]){
  // Spatial buckets retain exact triangle interpolation. Dense vegetation should
  // not ray-test every triangle in a terrain tile for every blade of grass.
  type Triangle={a:THREE.Vector3;b:THREE.Vector3;c:THREE.Vector3;normal:THREE.Vector3;den:number};
  const buckets=new Map<string,Triangle[]>(),cell=4;
  for(const mesh of ground)if(mesh instanceof THREE.Mesh){
    mesh.updateWorldMatrix(true,false);const p=mesh.geometry.getAttribute('position'),index=mesh.geometry.index,n=index?.count??p.count;
    const vertices=Array.from({length:p.count},(_,i)=>new THREE.Vector3().fromBufferAttribute(p,i).applyMatrix4(mesh.matrixWorld));
    for(let i=0;i<n;i+=3){const a=vertices[index?index.getX(i):i],b=vertices[index?index.getX(i+1):i+1],c=vertices[index?index.getX(i+2):i+2];const den=(b.z-c.z)*(a.x-c.x)+(c.x-b.x)*(a.z-c.z);if(Math.abs(den)<1e-10)continue;
      const normal=b.clone().sub(a).cross(c.clone().sub(a)).normalize();if(normal.y<0)normal.negate();const triangle={a,b,c,normal,den};
      for(let x=Math.floor(Math.min(a.x,b.x,c.x)/cell);x<=Math.floor(Math.max(a.x,b.x,c.x)/cell);x++)for(let z=Math.floor(Math.min(a.z,b.z,c.z)/cell);z<=Math.floor(Math.max(a.z,b.z,c.z)/cell);z++){const key=x+','+z,list=buckets.get(key)??[];list.push(triangle);buckets.set(key,list);}
    }
  }
  return (x:number,z:number)=>{
    let y=-Infinity,normal:THREE.Vector3|null=null;
    for(const t of buckets.get(Math.floor(x/cell)+','+Math.floor(z/cell))??[]){const {a,b,c,den}=t,u=((b.z-c.z)*(x-c.x)+(c.x-b.x)*(z-c.z))/den,v=((c.z-a.z)*(x-c.x)+(a.x-c.x)*(z-c.z))/den,w=1-u-v;if(u<-.00001||v<-.00001||w<-.00001)continue;const height=u*a.y+v*b.y+w*c.y;if(height>y){y=height;normal=t.normal;}}
    return normal?{point:new THREE.Vector3(x,y,z),normal:normal.clone()}:null;
  };
}

export function addEcology(scene:THREE.Scene,ground:THREE.Object3D[],manifest:ForestManifest){
  const sample=surfaceSampler(ground);let seed=71645;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  const anchors=[[-32,24],[-69,-21],[25,78],[0,-101],[81,-165]];
  const up=new THREE.Vector3(0,1,0),transform=new THREE.Object3D(),contacts:{kind:string;position:number[];normal:number[]}[]=[];
  const clear=(x:number,z:number,r=.25)=>{
    if((manifest.solids??[]).some(b=>x>b.minX-r&&x<b.maxX+r&&z>b.minZ-r&&z<b.maxZ+r))return false;
    if(manifest.tent&&Math.hypot(x-manifest.tent.center[0],z-manifest.tent.center[2])<4.5)return false;
    return !(manifest.trails??[]).some(t=>(nearestTrack(t.points,[x,0,z])?.distance??Infinity)<1.4+r);
  };
  const grassMat=new THREE.MeshStandardMaterial({name:'Ecology_Grass',color:'#626747',roughness:.98,side:THREE.DoubleSide});
  const fernMat=new THREE.MeshStandardMaterial({name:'fern_Ecology',color:'#36503a',roughness:.96,side:THREE.DoubleSide});
  const shrubMat=new THREE.MeshStandardMaterial({name:'Ecology_Rhododendron',color:'#354530',roughness:.92,side:THREE.DoubleSide});
  const barkMat=new THREE.MeshStandardMaterial({name:'Ancient_Bark',color:'#5b5446',roughness:.98});
  scene.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial&&m.name==='Baked_Bark'){barkMat.map=m.map;barkMat.normalMap=m.normalMap;}});
  function ribbons(kind:'grass'|'fern'|'shrub'){
    const pos:number[]=[],idx:number[]=[];const count=kind==='grass'?9:kind==='fern'?8:15;
    function quad(a:number[],b:number[],c:number[],_d:number[]){const i=pos.length/3;pos.push(...a,...b,...c);idx.push(i,i+1,i+2);}
    for(let k=0;k<count;k++){
      const angle=k*2.399,dx=Math.cos(angle),dz=Math.sin(angle),height=kind==='grass'?.3+random()*.5:kind==='fern'?.25+random()*.4:.45+random()*.6;
      if(kind==='grass'){
        const w=.018+random()*.023;quad([dx*.05,0,dz*.05],[dx*.05+w,0,dz*.05],[dx*.24,height,dz*.24],[dx*.24,height,dz*.24]);
      }else{
        const levels=kind==='fern'?7:4;
        for(let j=1;j<=levels;j++){
          const t=j/levels,c=[dx*t*.5,height*(t-.32*t*t),dz*t*.5],w=(1-t*.72)*(kind==='fern'?.13:.1),length=kind==='fern'?.055:.09;
          for(const side of [-1,1]){const tip=[c[0]-dz*w*side,c[1]+.025,c[2]+dx*w*side];quad(c,[c[0]+dx*length,c[1]+.01,c[2]+dz*length],tip,tip);}
        }
      }
    }
    const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(pos,3));g.setIndex(idx);g.computeVertexNormals();return g;
  }
  const saplingTransforms:THREE.Matrix4[]=[];
  function scatter(kind:string,geometry:THREE.BufferGeometry,mat:THREE.Material,count:number,minScale:number,maxScale:number){
    const batch=new THREE.InstancedMesh(geometry,mat,count);batch.name='Ecology_'+kind;let placed=0;
    for(let i=0;i<count*3&&placed<count;i++){
      const a=anchors[i%anchors.length],angle=random()*Math.PI*2,radius=Math.sqrt(random())*(i%3===0?12:32);
      const x=a[0]+Math.cos(angle)*radius,z=a[1]+Math.sin(angle)*radius;
      const density=.5+.5*Math.sin(x*.11+Math.sin(z*.07)*3);if(random()>.32+.65*density||!clear(x,z))continue;
      const hit=sample(x,z);if(!hit||hit.point.y<-.3||hit.normal.y<.65)continue;
      transform.position.copy(hit.point);transform.quaternion.setFromUnitVectors(up,hit.normal);transform.rotateY(random()*Math.PI*2);
      const scale=minScale+random()*(maxScale-minScale);transform.scale.setScalar(scale);transform.updateMatrix();batch.setMatrixAt(placed++,transform.matrix);
      if(kind==='Sapling_Trunks')saplingTransforms.push(transform.matrix.clone());
      if(placed<40)contacts.push({kind,position:hit.point.toArray(),normal:hit.normal.toArray()});
    }
    batch.count=placed;batch.receiveShadow=true;batch.castShadow=kind==='Shrubs';
    if(placed>1000){
      const tiles=new Map<string,THREE.Matrix4[]>(),matrix=new THREE.Matrix4();
      for(let i=0;i<placed;i++){batch.getMatrixAt(i,matrix);const p=new THREE.Vector3().setFromMatrixPosition(matrix),key=Math.floor(p.x/32)+','+Math.floor(p.z/32),list=tiles.get(key)??[];list.push(matrix.clone());tiles.set(key,list);}
      for(const [key,matrices] of tiles){const tile=new THREE.InstancedMesh(geometry,mat,matrices.length);tile.name=batch.name+'_'+key;matrices.forEach((m,i)=>tile.setMatrixAt(i,m));tile.receiveShadow=true;tile.castShadow=batch.castShadow;tile.computeBoundingSphere();scene.add(tile);}
    }else{batch.computeBoundingSphere();scene.add(batch);}
    return placed;
  }
  const counts={pebbles:0,grass:scatter('Sedges_Grasses',ribbons('grass'),grassMat,24000,.6,1.45),ferns:scatter('Fern_Colonies',ribbons('fern'),fernMat,6000,.55,1.3),shrubs:scatter('Shrubs',ribbons('shrub'),shrubMat,1100,.5,1.5)};
  // Very old-looking trunks: radial fissures, root flare and uneven taper.
  const p:number[]=[],uv:number[]=[],indices:number[]=[];
  for(let j=0;j<=16;j++)for(let k=0;k<=32;k++){
    const y=j/16,angle=k/32*Math.PI*2,r=(.58*(1-y*.8)+.45*Math.exp(-y*24))*(1+.085*Math.sin(k*4.1+j*.55));p.push(Math.cos(angle)*r,y*18,Math.sin(angle)*r);uv.push(k/32*3,y*12);
  }
  for(let j=0;j<16;j++)for(let k=0;k<32;k++){const a=j*33+k,b=a+33;indices.push(a,b,a+1,a+1,b,b+1);}
  const trunkGeometry=new THREE.BufferGeometry();trunkGeometry.setAttribute('position',new THREE.Float32BufferAttribute(p,3));trunkGeometry.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));trunkGeometry.setIndex(indices);trunkGeometry.computeVertexNormals();
  const ancient=new THREE.InstancedMesh(trunkGeometry,barkMat,20);ancient.name='Ancient_Trees';ancient.castShadow=true;ancient.receiveShadow=true;
  let crown:THREE.InstancedMesh|undefined;scene.traverse(o=>{if(!crown&&o instanceof THREE.InstancedMesh&&(Array.isArray(o.material)?o.material:[o.material]).some(m=>m.name.includes('Foliage')))crown=o;});
  const ancientPositions:THREE.Vector3[]=[],ancientMatrices:THREE.Matrix4[]=[];let placed=0;
  for(let i=0;i<100&&placed<20;i++){
    const a=anchors[i%anchors.length],x=a[0]+(random()-.5)*35,z=a[1]+(random()-.5)*35;if(!clear(x,z,2))continue;
    const hit=sample(x,z);if(!hit||hit.point.y<0||hit.normal.y<.88)continue;
    const wide=.65+random()*.6,height=.85+random()*.35;transform.position.copy(hit.point);transform.rotation.set((random()-.5)*.07,random()*Math.PI*2,(random()-.5)*.06);transform.scale.set(wide,height,wide);transform.updateMatrix();ancient.setMatrixAt(placed,transform.matrix);ancientPositions.push(hit.point.clone());
    ancientMatrices.push(transform.matrix.clone());
    manifest.obstacles??=[];manifest.obstacles.push({x,z,radius:wide*1.1});
    if(crown){const material=(Array.isArray(crown.material)?crown.material[0]:crown.material).clone();material.name=placed%4<2?'Foliage_Evergreen_Ancient':'Foliage_Ancient';const canopy=new THREE.Mesh(crown.geometry,material);canopy.name='Ancient_Crown';canopy.position.copy(hit.point);canopy.scale.set(wide*2.1,height,wide*2.1);canopy.rotation.y=random()*Math.PI*2;canopy.castShadow=true;scene.add(canopy);}
    placed++;
  }
  ancient.count=placed;ancient.computeBoundingSphere();scene.add(ancient);
  // Fallen timber rests between independently sampled endpoints; no free-floating logs.
  const wood=new THREE.MeshStandardMaterial({name:'Ecology_Decaying_Wood',color:'#4a4537',roughness:1});
  const moss=new THREE.MeshStandardMaterial({name:'Ecology_Moss',color:'#293b28',roughness:1});
  const debris=new THREE.Group();debris.name='Ecology_Debris';scene.add(debris);
  for(let i=0;i<55;i++){
    const a=anchors[i%anchors.length],x=a[0]+(random()-.5)*42,z=a[1]+(random()-.5)*42,length=.9+random()*3.7,angle=random()*6.28;
    const endX=x+Math.cos(angle)*length,endZ=z+Math.sin(angle)*length;if(!clear(x,z,.8)||!clear(endX,endZ,.8))continue;
    const start=sample(x,z),end=sample(endX,endZ);if(!start||!end||Math.abs(start.point.y-end.point.y)>1)continue;
    const radius=.07+random()*.18,startP=start.point.clone().addScaledVector(up,radius),endP=end.point.clone().addScaledVector(up,radius),delta=endP.clone().sub(startP);
    const log=new THREE.Mesh(new THREE.CylinderGeometry(radius*.8,radius,delta.length(),16,4),wood);log.position.copy(startP.add(endP).multiplyScalar(.5));log.quaternion.setFromUnitVectors(up,delta.normalize());log.castShadow=true;log.receiveShadow=true;debris.add(log);
    const cap=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),moss);cap.scale.set(length*.38,.03,radius*.9);cap.position.copy(log.position);cap.position.y+=radius*.82;cap.rotation.y=-angle;debris.add(cap);
  }
  const stone=new THREE.MeshStandardMaterial({name:'Ecology_Pebbles',color:'#747364',roughness:.96});
  const smallStone=new THREE.SphereGeometry(1,10,6);smallStone.translate(0,1,0);
  counts.pebbles=scatter('Pebbles',smallStone,stone,700,.03,.16);
  const mushroomMat=new THREE.MeshStandardMaterial({name:'Ecology_Mushrooms',color:'#7b6550',roughness:.8});
  const mushrooms=new THREE.Group();mushrooms.name='Ecology_Mushrooms';scene.add(mushrooms);
  for(const origin of ancientPositions.slice(0,12))for(let i=0;i<4;i++){
    const x=origin.x+.4+random()*.65,z=origin.z+(random()-.5)*.7,hit=sample(x,z);if(!hit)continue;
    const h=.03+random()*.07;const stem=new THREE.Mesh(new THREE.CylinderGeometry(.008,.014,h,8),mushroomMat);stem.position.copy(hit.point).add(new THREE.Vector3(0,h/2,0));mushrooms.add(stem);
    const cap=new THREE.Mesh(new THREE.SphereGeometry(.04+random()*.025,12,8,0,Math.PI*2,0,Math.PI/2),mushroomMat);cap.position.copy(hit.point).add(new THREE.Vector3(0,h,0));cap.scale.y=.45;mushrooms.add(cap);
  }
  const litterMat=new THREE.MeshStandardMaterial({name:'Ecology_Leaf_Litter',color:'#785036',roughness:1,side:THREE.DoubleSide});
  const leaf=new THREE.BufferGeometry();leaf.setAttribute('position',new THREE.Float32BufferAttribute([-.06,.003,0,0,.009,-.09,.065,.003,0,0,.009,.1],3));leaf.setIndex([0,2,1,0,3,2]);leaf.computeVertexNormals();
  const litter=scatter('Leaf_Litter',leaf,litterMat,12000,.4,1.6);
  const mossGeometry=new THREE.SphereGeometry(1,8,4,0,Math.PI*2,0,Math.PI/2);mossGeometry.scale(.35,.015,.26);mossGeometry.translate(0,.006,0);
  const mossPatches=scatter('Moss_Lichen',mossGeometry,moss,3500,.5,2);
  const sapling=new THREE.CylinderGeometry(.012,.035,1.1,8);sapling.translate(0,.55,0);
  const saplings=scatter('Sapling_Trunks',sapling,barkMat,240,.35,2);
  const needles=ribbons('shrub');needles.translate(0,.45,0);
  const saplingCrowns=new THREE.InstancedMesh(needles,shrubMat,saplings);saplingCrowns.name='Ecology_Sapling_Crowns';saplingTransforms.forEach((matrix,i)=>saplingCrowns.setMatrixAt(i,matrix));saplingCrowns.receiveShadow=true;scene.add(saplingCrowns);
  for(const [treeIndex,origin] of ancientPositions.entries()){
    for(let i=0;i<5;i++){
      const angle=i*1.256+random()*.3,len=.7+random()*1.2,tip=sample(origin.x+Math.cos(angle)*len,origin.z+Math.sin(angle)*len);if(!tip)continue;
      const start=origin.clone().add(new THREE.Vector3(Math.cos(angle)*.3,.14,Math.sin(angle)*.3)),end=tip.point.clone().add(new THREE.Vector3(0,.025,0)),delta=end.clone().sub(start);
      const root=new THREE.Mesh(new THREE.CylinderGeometry(.025,.13,delta.length(),10),barkMat);root.position.copy(start.add(end).multiplyScalar(.5));root.quaternion.setFromUnitVectors(up,delta.normalize());debris.add(root);
    }
    const points=Array.from({length:18},(_,i)=>{const y=i*.2,angle=i*.45,t=y/18,k=angle/(Math.PI*2)*32,r=(.58*(1-t*.8)+.45*Math.exp(-t*24))*(1+.085*Math.sin(k*4.1+t*16*.55))+.014;return new THREE.Vector3(Math.cos(angle)*r,y,Math.sin(angle)*r).applyMatrix4(ancientMatrices[treeIndex]);});
    const vine=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),35,.012,5,false),moss);debris.add(vine);
    for(let k=0;k<6;k++){const a=k*2.399,y=6+k*1.2,curve=[new THREE.Vector3(0,y,0),new THREE.Vector3(Math.cos(a)*2,y+.5,Math.sin(a)*2),new THREE.Vector3(Math.cos(a)*(3+k*.25),y+1.6,Math.sin(a)*(3+k*.25))].map(p=>p.applyMatrix4(ancientMatrices[treeIndex]));const branch=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(curve),14,.07,8,false),barkMat);debris.add(branch);}
  }
  const seedMat=new THREE.MeshStandardMaterial({name:'Ecology_Acorn_Cones',color:'#5f4830',roughness:.96}),insectMat=new THREE.MeshStandardMaterial({name:'Ecology_Beetle',color:'#262a20',roughness:.32}),wormMat=new THREE.MeshStandardMaterial({name:'Ecology_Worm',color:'#694938',roughness:.5});
  let acorns=0,cones=0,beetles=0,worms=0,footprints=0;
  for(let i=0;i<150;i++){
    const anchor=anchors[i%anchors.length],x=anchor[0]+(random()-.5)*12,z=anchor[1]+(random()-.5)*12,hit=sample(x,z);if(!hit||hit.point.y<-.31||!clear(x,z))continue;
    const cone=i%3===0,r=cone?.025:.009,h=cone?.075:.017,seed=new THREE.Mesh(new THREE.SphereGeometry(1,10,7),seedMat);seed.position.copy(hit.point).addScaledVector(hit.normal,r*.6);seed.quaternion.setFromUnitVectors(up,hit.normal);seed.rotateZ(.8);seed.scale.set(r,r,h);debris.add(seed);if(cone)cones++;else acorns++;
    const cap=new THREE.Mesh(new THREE.SphereGeometry(1,8,6,0,Math.PI*2,0,Math.PI/2),wood);cap.position.copy(seed.position).add(new THREE.Vector3(0,.003,-h*.4));cap.scale.set(r*1.15,r*.7,r*1.1);debris.add(cap);
    if(i%7===0){const shell=new THREE.Mesh(new THREE.SphereGeometry(1,12,8),insectMat);shell.position.copy(hit.point).addScaledVector(hit.normal,.007);shell.scale.set(.007,.005,.012);debris.add(shell);beetles++;}
    if(i%11===0){const points=Array.from({length:14},(_,j)=>{const px=x+j*.008,pz=z+Math.sin(j*.5)*.016,p=sample(px,pz)?.point??hit.point;return p.clone().add(new THREE.Vector3(0,.006,0));});const worm=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3(points),20,.004,6,false),wormMat);debris.add(worm);worms++;}
    if(i%5===0)for(const side of [-1,1]){const print=new THREE.Mesh(new THREE.SphereGeometry(1,8,5),wood);print.position.copy(hit.point).add(new THREE.Vector3(side*.018,.0008,.08));print.quaternion.setFromUnitVectors(up,hit.normal);print.scale.set(.015,.001,.025);debris.add(print);footprints++;}
  }
  // Consolidate static detail by material. Every detail keeps its authored contact
  // transform, without adding a draw call for each mushroom or exposed root.
  for(const group of [debris,mushrooms]){
    group.updateMatrixWorld(true);const groups=new Map<THREE.Material,THREE.Mesh[]>();group.traverse(o=>{if(o instanceof THREE.Mesh&&!Array.isArray(o.material)){const list=groups.get(o.material)??[];list.push(o);groups.set(o.material,list);}});
    for(const [mat,meshes] of groups){const geometries=meshes.map(m=>{const g=m.geometry.clone().applyMatrix4(m.matrixWorld);g.deleteAttribute('uv');return g.index?g.toNonIndexed():g;});const geo=mergeGeometries(geometries);geometries.forEach(g=>g.dispose());if(!geo)continue;meshes.forEach(m=>{m.geometry.dispose();m.removeFromParent();});const batch=new THREE.Mesh(geo,mat);batch.receiveShadow=true;batch.castShadow=true;scene.add(batch);}
  }
  Object.assign(counts,{litter,mossPatches,saplings,acorns,cones,beetles,worms,footprints});
  return {counts,ancientTrees:placed,contacts,sample};
}




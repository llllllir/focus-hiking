import * as THREE from 'three';
import { surfaceSampler } from './ecology';
export const creekCenter=(x:number)=>-108+Math.sin(x*.035)*1.2+Math.sin(x*.063)*.45;
export const creekWidth=(x:number)=>1.55+.42*Math.sin(x*.049)+.2*Math.cos(x*.13);
export const creekLevel=-.31;

export function refineCreek(scene:THREE.Scene,ground:THREE.Object3D[]){
  const obsolete:THREE.Mesh[]=[];scene.traverse(o=>{if(o instanceof THREE.Mesh&&(Array.isArray(o.material)?o.material:[o.material]).some(m=>m.name==='Water'))obsolete.push(o);});
  obsolete.forEach(m=>m.removeFromParent());
  const originalSample=surfaceSampler(ground);
  const bankHeights:number[]=[];
  for(let i=0;i<=280;i++){const x=-210+i*1.5;bankHeights.push(originalSample(x,creekCenter(x)-5)?.point.y??0,originalSample(x,creekCenter(x)+5)?.point.y??0);}
  const v=new THREE.Vector3(),inverse=new THREE.Matrix4();
  for(const tile of ground)if(tile instanceof THREE.Mesh&&!tile.name.includes('Bridge')){
    tile.updateMatrixWorld(true);inverse.copy(tile.matrixWorld).invert();const positions=tile.geometry.getAttribute('position');
    for(let i=0;i<positions.count;i++){
      v.fromBufferAttribute(positions,i).applyMatrix4(tile.matrixWorld);const d=Math.abs(v.z-creekCenter(v.x));
      if(d<12&&v.y<2){const bank=THREE.MathUtils.smoothstep(d,5,12);v.y=THREE.MathUtils.lerp(creekLevel-.17,v.y,bank);v.applyMatrix4(inverse);positions.setXYZ(i,v.x,v.y,v.z);}
    }
    positions.needsUpdate=true;tile.geometry.computeVertexNormals();tile.geometry.computeBoundingSphere();
  }
  const p:number[]=[],uv:number[]=[],index:number[]=[];
  for(let i=0;i<=280;i++)for(const side of [-1,1]){
    const x=-210+i*1.5;p.push(x,creekLevel,creekCenter(x)+side*creekWidth(x)*.5);uv.push(x*.2,side===-1?0:1);
    if(i<280&&side===-1){const k=i*2;index.push(k,k+1,k+2,k+1,k+3,k+2);}
  }
  const geo=new THREE.BufferGeometry();geo.setAttribute('position',new THREE.Float32BufferAttribute(p,3));geo.setAttribute('uv',new THREE.Float32BufferAttribute(uv,2));geo.setIndex(index);geo.computeVertexNormals();
  const material=new THREE.MeshStandardMaterial({name:'Water',color:'#476660',roughness:.055,metalness:.04});
  const water=new THREE.Mesh(geo,material);water.name='Water_Shallow_Meander';water.receiveShadow=true;scene.add(water);
  // The original terrain grid is wider than this stream. A separate bank/bed strip
  // resolves the narrow cross-section, while the original grid is recessed below it.
  const bedP:number[]=[],bedUV:number[]=[],bedIndex:number[]=[];
  for(let i=0;i<=280;i++){
    const x=-210+i*1.5,w=creekWidth(x)*.5,offsets=[-5,-2,-w-.12,-w,0,w,w+.12,2,5];
    for(let j=0;j<9;j++){const d=Math.abs(offsets[j]),outer=bankHeights[i*2+(j<4?0:1)];const y=d<=w?creekLevel-.15:THREE.MathUtils.lerp(creekLevel-.025,Math.max(creekLevel+.04,outer),THREE.MathUtils.smoothstep(d,w,5));bedP.push(x,y,creekCenter(x)+offsets[j]);bedUV.push(x*.4,offsets[j]*.4);if(i<280&&j<8){const k=i*9+j;bedIndex.push(k,k+1,k+9,k+1,k+10,k+9);}}
  }
  const bedGeo=new THREE.BufferGeometry();bedGeo.setAttribute('position',new THREE.Float32BufferAttribute(bedP,3));bedGeo.setAttribute('uv',new THREE.Float32BufferAttribute(bedUV,2));bedGeo.setIndex(bedIndex);bedGeo.computeVertexNormals();
  const bed=new THREE.Mesh(bedGeo,new THREE.MeshStandardMaterial({name:'Creek_Submerged_Bed',color:'#6d6c50',roughness:.96}));bed.name='Ground_Creek_Bed';bed.receiveShadow=true;scene.add(bed);bed.updateMatrixWorld(true);ground.push(bed);
  const stones=new THREE.InstancedMesh(new THREE.SphereGeometry(1,12,8),new THREE.MeshStandardMaterial({name:'Creek_Submerged_Stone',color:'#797b65',roughness:.93}),460);
  stones.name='Creek_Rounded_Pebbles';const obj=new THREE.Object3D();let seed=2146;const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  for(let i=0;i<stones.count;i++){const x=-120+random()*240,z=creekCenter(x)+(random()-.5)*creekWidth(x)*.82,r=.025+random()*.055;obj.position.set(x,creekLevel-.145+r*.45,z);obj.rotation.set(random(),random()*6.28,random());obj.scale.set(r,r*.6,r*.8);obj.updateMatrix();stones.setMatrixAt(i,obj.matrix);}
  stones.receiveShadow=true;scene.add(stones);
  const weeds=new THREE.InstancedMesh(new THREE.PlaneGeometry(.025,.13,1,4),new THREE.MeshStandardMaterial({name:'Creek_Weeds',color:'#3b5940',roughness:.85,side:THREE.DoubleSide}),160);
  for(let i=0;i<weeds.count;i++){const x=-80+random()*160;obj.position.set(x,creekLevel-.08,creekCenter(x)+(random()-.5)*creekWidth(x)*.7);obj.rotation.set(0,random()*6.28,.2);obj.scale.setScalar(.7+random()*.5);obj.updateMatrix();weeds.setMatrixAt(i,obj.matrix);}scene.add(weeds);
  const leaves=new THREE.InstancedMesh(new THREE.PlaneGeometry(.08,.12),new THREE.MeshStandardMaterial({name:'Creek_Drifting_Leaf',color:'#856035',roughness:.9,side:THREE.DoubleSide}),24);leaves.name='Creek_Drifting_Leaves';scene.add(leaves);
  const rings=new THREE.InstancedMesh(new THREE.RingGeometry(.92,1,32),new THREE.MeshBasicMaterial({name:'Creek_Contact_Ripple',color:'#849c99',transparent:true,opacity:.16,depthWrite:false,side:THREE.DoubleSide}),32);rings.name='Creek_Contact_Ripples';rings.frustumCulled=false;scene.add(rings);
  const contacts:{x:number;z:number;age:number}[]=Array.from({length:32},()=>({x:0,z:0,age:10}));let contactIndex=0,time=0;
  const tadpoles=new THREE.InstancedMesh(new THREE.SphereGeometry(1,10,7),new THREE.MeshStandardMaterial({name:'Creek_Tadpole',color:'#3e4230',roughness:.4}),28);
  const tadpoleTails=new THREE.InstancedMesh(new THREE.PlaneGeometry(.004,.026,1,3),new THREE.MeshStandardMaterial({name:'Creek_Tadpole_Tail',color:'#454c35',roughness:.5,side:THREE.DoubleSide}),28);scene.add(tadpoles,tadpoleTails);
  const striderRoot=new THREE.Group();striderRoot.name='Creek_Water_Striders';scene.add(striderRoot);
  const striderMaterial=new THREE.MeshStandardMaterial({name:'Creek_Strider',color:'#242c24',roughness:.5}),striders:THREE.Group[]=[];
  for(let i=0;i<4;i++){const insect=new THREE.Group();striders.push(insect);striderRoot.add(insect);const body=new THREE.Mesh(new THREE.SphereGeometry(1,10,6),striderMaterial);body.scale.set(.002,.002,.009);body.position.y=.004;insect.add(body);
    for(const side of [-1,1])for(let leg=0;leg<3;leg++){const start=new THREE.Vector3(side*.002,.003,.006-leg*.005),end=new THREE.Vector3(side*(leg===0?.012:.02),0,.017-leg*.014),delta=end.clone().sub(start);const l=new THREE.Mesh(new THREE.CylinderGeometry(.0003,.0003,delta.length(),5),striderMaterial);l.position.copy(start.add(end).multiplyScalar(.5));l.quaternion.setFromUnitVectors(new THREE.Vector3(0,1,0),delta.normalize());insect.add(l);}}
  function splash(x:number,z:number){contacts[contactIndex++%32]={x,z,age:0};}
  function update(dt:number,raining:boolean){time+=dt;
    for(let i=0;i<tadpoles.count;i++){const x=-7+(i%7)*.025+Math.sin(time*.5+i)*.05,z=creekCenter(x)+Math.floor(i/7)*.035;obj.position.set(x,creekLevel-.07,z);obj.rotation.set(0,Math.sin(time*.7+i)*.5,0);obj.scale.set(.003,.003,.005);obj.updateMatrix();tadpoles.setMatrixAt(i,obj.matrix);obj.position.z-=.015;obj.rotation.x=0;obj.rotation.y+=Math.sin(time*6+i)*.15;obj.scale.setScalar(1);obj.updateMatrix();tadpoleTails.setMatrixAt(i,obj.matrix);}tadpoles.instanceMatrix.needsUpdate=true;tadpoleTails.instanceMatrix.needsUpdate=true;
    striders.forEach((s,i)=>{const x=-6+i*.22+Math.sin(time*.2+i)*.1;s.position.set(x,creekLevel+.002,creekCenter(x)+Math.cos(time*.15+i)*.3);s.rotation.y=time*.12+i;});
    for(let i=0;i<leaves.count;i++){const x=-19+i*1.8+(time*.016)%1.8;obj.position.set(x,creekLevel+.004,creekCenter(x)+Math.sin(i*2.399)*creekWidth(x)*.30);obj.rotation.set(-Math.PI/2,0,i*2.399+time*.025);obj.scale.setScalar(.5+(i%4)*.2);obj.updateMatrix();leaves.setMatrixAt(i,obj.matrix);}leaves.instanceMatrix.needsUpdate=true;
    if(!raining&&Math.floor(time*2)!==Math.floor((time-dt)*2)&&Math.floor(time*2)%9===0){const x=-12+Math.sin(time)*4;splash(x,creekCenter(x));}
    for(let i=0;i<rings.count;i++){const c=contacts[i];c.age+=dt;obj.position.set(c.x,c.age<1.4?creekLevel+.006:-100,c.z);obj.rotation.set(-Math.PI/2,0,0);obj.scale.setScalar(.025+c.age*.28);obj.updateMatrix();rings.setMatrixAt(i,obj.matrix);}rings.instanceMatrix.needsUpdate=true;
  }
  return {water,level:creekLevel,center:creekCenter,width:creekWidth,splash,update,dispose:()=>obsolete.forEach(m=>{m.geometry.dispose();for(const mat of Array.isArray(m.material)?m.material:[m.material])mat.dispose();})};
}



import * as THREE from 'three';
import { mergeGeometries, mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { creekCenter, creekLevel, creekWidth } from './creek';
import { surfaceSampler } from './ecology';
import type { ForestManifest } from './forest';
import type { ForestSoundscape, WildlifeSound } from './soundscape';

export type Species='carp'|'frog'|'turtle'|'eagle'|'woodpecker'|'kingfisher'|'dragonfly'|'deer'|'hare'|'squirrel'|'fox';
export const speciesDimensions:Record<Species,number>={carp:.32,frog:.065,turtle:.16,eagle:1.5,woodpecker:.23,kingfisher:.17,dragonfly:.065,deer:1,hare:.43,squirrel:.22,fox:.72};
type Rig={mesh:THREE.SkinnedMesh;bones:THREE.Bone[];head:THREE.Bone;tail:THREE.Bone;limbs:THREE.Bone[];species:Species;age:string};

// Original, editable anatomical studies. Metres; +Z forward. These are not scanned
// wildlife or biologically reviewed production assets. Each actor has a real skin,
// named joints and PBR surface groups, including the depth/shadow rendering passes.
export function makeWildlife(species:Species,age='adult',male=false):Rig{
  const bones:THREE.Bone[]=[],parts:THREE.BufferGeometry[]=[],materials:THREE.MeshStandardMaterial[]=[];
  function bone(name:string,p:number[],parent?:THREE.Bone){const b=new THREE.Bone();b.name=name;b.position.set(p[0],p[1],p[2]);parent?.add(b);bones.push(b);return b;}
  const root=bone('root',[0,0,0]),head=bone('head',[0,0,0],root),tail=bone('tail',[0,0,0],root),limbs:THREE.Bone[]=[];
  function material(name:string,color:string,roughness=.85,metalness=0){const m=new THREE.MeshStandardMaterial({name:'Wildlife_'+name,color,roughness,metalness,side:THREE.DoubleSide});materials.push(m);return materials.length-1;}
  const base=material(species==='carp'?'Scales':species==='frog'?'Wet_Skin':species==='turtle'?'Shell':species==='dragonfly'?'Chitin':species==='eagle'||species==='woodpecker'||species==='kingfisher'?'Feathers':'Fur',({carp:'#797951',frog:'#607447',turtle:'#3f4936',eagle:'#4a3a2d',woodpecker:'#242825',kingfisher:'#237b83',dragonfly:'#386b64',deer:'#8d542f',hare:'#776b56',squirrel:'#72503a',fox:'#a4562f'})[species],species==='frog'?.28:.88,species==='carp'?.23:0);
  const light=material('Pale_Underside','#c8bc91'),dark=material('Eye_Hoof','#151812',.13),accent=material('Accent',species==='woodpecker'?'#a43a2b':species==='kingfisher'?'#b26931':'#a29150',.65);
  function add(g:THREE.BufferGeometry,mat:number,joint=root){
    if(g.index){const old=g;g=g.toNonIndexed();old.dispose();}g.deleteAttribute('uv');
    const n=g.getAttribute('position').count,si=new Uint16Array(n*4),sw=new Float32Array(n*4);for(let i=0;i<n;i++){si[i*4]=bones.indexOf(joint);sw[i*4]=1;}
    g.setAttribute('skinIndex',new THREE.Uint16BufferAttribute(si,4));g.setAttribute('skinWeight',new THREE.Float32BufferAttribute(sw,4));g.userData.material=mat;parts.push(g);
  }
  function oval(p:number[],s:number[],mat=base,joint=root){const smallScale=species==='carp'&&s[0]<.002;const g=new THREE.SphereGeometry(1,smallScale?10:20,smallScale?6:12);g.scale(s[0],s[1],s[2]);g.translate(p[0],p[1],p[2]);add(g,mat,joint);}
  function rod(a:number[],b:number[],r:number,mat=base,joint=root,r2=r*.65){const start=new THREE.Vector3(...a),end=new THREE.Vector3(...b),v=end.clone().sub(start);const g=new THREE.CylinderGeometry(r2,r,v.length(),10,3);g.applyQuaternion(new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0,1,0),v.normalize()));g.translate(...start.add(end).multiplyScalar(.5).toArray());add(g,mat,joint);}
  function membrane(points:number[][],mat:number,joint:THREE.Bone){const g=new THREE.BufferGeometry(),p:number[]=[];for(let i=1;i<points.length-1;i++)p.push(...points[0],...points[i],...points[i+1]);g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.computeVertexNormals();add(g,mat,joint);}
  function body(stations:number[][],mat=base,joint=root){const p:number[]=[],idx:number[]=[];for(const [z,y,w,h] of stations)for(let k=0;k<=24;k++){const a=k/24*Math.PI*2;p.push(Math.cos(a)*w,y+Math.sin(a)*h,z);}for(let j=0;j<stations.length-1;j++)for(let k=0;k<24;k++){const a=j*25+k,b=a+25;idx.push(a,b,a+1,a+1,b,b+1);}const g=new THREE.BufferGeometry();g.setAttribute('position',new THREE.Float32BufferAttribute(p,3));g.setIndex(idx);g.computeVertexNormals();add(g,mat,joint);
    if(['deer','hare','squirrel','fox'].includes(species)){
      const hairs:number[]=[],length=species==='deer'?.009:species==='fox'?.015:.007;
      for(let j=0;j<stations.length-1;j++)for(let k=0;k<80;k++){
        const u=(k*.618)%1,a=k*2.399,s=stations[j],e=stations[j+1],z=THREE.MathUtils.lerp(s[0],e[0],u),y=THREE.MathUtils.lerp(s[1],e[1],u),w=THREE.MathUtils.lerp(s[2],e[2],u),h=THREE.MathUtils.lerp(s[3],e[3],u),x=Math.cos(a)*w,sy=y+Math.sin(a)*h;
        hairs.push(x-.0007,sy,z,x+.0007,sy,z,x+Math.cos(a)*length,sy+Math.sin(a)*length,z-length*.6);
      }
      const hair=new THREE.BufferGeometry();hair.setAttribute('position',new THREE.Float32BufferAttribute(hairs,3));hair.computeVertexNormals();add(hair,mat,joint);
    }
  }
  const bird=['eagle','woodpecker','kingfisher'].includes(species);
  if(species==='carp'){
    body([[-.14,0,.008,.018],[-.10,0,.019,.036],[-.04,0,.028,.055],[.045,0,.029,.052],[.09,0,.024,.039],[.13,-.005,.006,.015]]);
    tail.position.z=-.105;membrane([[0,0,-.105],[0,.06,-.19],[0,.026,-.163],[0,0,-.146],[0,-.026,-.163],[0,-.06,-.19]],accent,tail);
    membrane([[0,.039,-.08],[0,.09,-.06],[0,.074,.035],[0,.042,.055]],accent,root);
    membrane([[0,-.03,-.095],[0,-.071,-.12],[0,-.046,-.04]],accent,root);
    for(const side of [-1,1]){const fin=bone('pectoral_'+side,[side*.023,-.01,.06],root);limbs.push(fin);membrane([[side*.02,-.005,.07],[side*.075,-.03,.025],[side*.055,-.018,.08]],accent,fin);membrane([[side*.012,-.04,-.015],[side*.044,-.064,-.05],[side*.02,-.04,-.06]],accent,root);oval([side*.023,.02,.085],[.004,.004,.004],dark,head);rod([side*.006,-.012,.125],[side*.012,-.025,.14],.001,light,head);}
    oval([0,-.014,.112],[.016,.015,.025],light,head);
    // Individually curved overlapping scales and a distinct lateral line.
    if(age!=='juvenile')for(const side of [-1,1])for(let row=0;row<5;row++)for(let col=0;col<15;col++){const z=-.085+col*.011+(row%2)*.005,angle=(row-2)*.3;oval([side*Math.cos(angle)*.028,Math.sin(angle)*.044,z],[.001,.006,.007],row===2?accent:base);}
  }else if(species==='frog'||species==='turtle'){
    const turtle=species==='turtle',s=turtle?2.3:1;
    oval([0,.015*s,0],[.026*s,.018*s,.031*s]);oval([0,.018*s,.027*s],[.023*s,.014*s,.014*s],turtle?base:accent,head);
    for(const side of [-1,1]){oval([side*.016*s,.032*s,.032*s],[.007*s,.007*s,.007*s],accent,head);oval([side*.017*s,.034*s,.036*s],[.003*s,.003*s,.003*s],dark,head);for(const rear of [false,true]){const leg=bone((rear?'hind':'fore')+'_'+side,[side*.02*s,.013*s,rear?-.02*s:.023*s],root);limbs.push(leg);const a=[side*.02*s,.014*s,rear?-.02*s:.021*s],b=[side*(rear?.045:.036)*s,.009*s,rear?-.036*s:.025*s],c=[side*.031*s,.002*s,rear?-.012*s:.044*s];rod(a,b,(rear?.009:.004)*s,base,leg);rod(b,c,.004*s,base,leg);for(let toe=0;toe<4;toe++)rod(c,[c[0]+(toe-1.5)*.004*s,.001*s,c[2]+.012*s],.001*s,light,leg);if(!turtle)membrane([c,[c[0]-.007*s,.001*s,c[2]+.011*s],[c[0]+.007*s,.001*s,c[2]+.011*s]],accent,leg);}}
    if(turtle){oval([0,.01,0],[.057,.009,.068],light);for(let r=0;r<3;r++)for(let k=0;k<7;k++){const a=k/7*6.28,rad=r*.017;oval([Math.cos(a)*rad,.055-r*.009,Math.sin(a)*rad*1.3],[.012,.003,.015],accent);}}
    else for(let i=0;i<18;i++)oval([Math.sin(i*2.399)*.019,.031,Math.cos(i*2.399)*.023],[.003,.001,.004],dark);
  }else if(bird||species==='dragonfly'){
    const eagle=species==='eagle',dragon=species==='dragonfly',len=dragon?.065:species==='kingfisher'?.17:species==='woodpecker'?.23:.58,span=dragon?.085:eagle?1.5:len*1.7;
    body([[-len*.42,0,.001,.001],[-len*.28,0,len*.12,len*.13],[0,0,len*.13,len*.15],[len*.21,len*.025,len*.09,len*.09],[len*.36,len*.04,len*.025,len*.04]]);
    head.position.set(0,len*.06,len*.23);oval([0,len*.075,len*.25],[len*.09,len*.095,len*.12],base,head);
    if(!dragon){rod([0,len*.06,len*.34],[0,len*.04,len*(eagle?.45:.58)],len*.025,eagle?accent:dark,head,.001);for(const side of [-1,1])oval([side*len*.079,len*.11,len*.28],[len*.011,len*.013,len*.011],dark,head);oval([0,-len*.047,len*.06],[len*.12,len*.08,len*.22],species==='kingfisher'?accent:light);}
    else for(const side of [-1,1]){oval([side*.007,.004,.022],[.005,.006,.005],accent,head);for(let k=0;k<3;k++)rod([side*.003,-.002,.007-k*.005],[side*.012,-.012,.009-k*.007],.00035,dark);}
    const wingMaterial=dragon?material('Transparent_Wing','#a8b6b1',.2):base;
    if(dragon){materials[wingMaterial].transparent=true;materials[wingMaterial].opacity=.42;}
    for(const side of [-1,1])for(let pair=0;pair<(dragon?2:1);pair++){
      const wing=bone('wing_'+side+'_'+pair,[side*len*.08,0,-pair*len*.16],root);limbs.push(wing);
      if(dragon){membrane([[side*.004,0,-pair*.013],[side*.043,0,.006-pair*.012],[side*.04,0,-.004-pair*.012],[side*.005,0,-.01-pair*.012]],wingMaterial,wing);for(let v=1;v<7;v++)rod([side*.006,0,-pair*.013],[side*.04,0,.006-v*.0016-pair*.012],.00015,dark,wing);}
      else{membrane([[side*len*.07,0,len*.09],[side*span*.26,0,len*.15],[side*span*.48,0,-len*.12],[side*span*.35,0,-len*.26],[side*len*.08,0,-len*.25]],base,wing);for(let k=0;k<11;k++)oval([side*(span*.28+k*span*.017),0,-len*(.10+k*.014)],[span*.09,.003+len*.012,len*.038],k%3===0?light:base,wing);}
    }
    if(!dragon){for(let k=0;k<7;k++)oval([(k-3)*len*.014,0,-len*.43],[len*.026,len*.009,len*.15],base,tail);for(const side of [-1,1]){rod([side*len*.045,-len*.08,-len*.07],[side*len*.045,-len*.2,-len*.06],len*.007,accent);for(let k=-1;k<2;k++)rod([side*len*.045,-len*.2,-len*.06],[side*len*.045+k*len*.025,-len*.20,len*.015],len*.002,dark);}if(species==='woodpecker')oval([0,len*.15,len*.22],[len*.06,.008,len*.05],accent,head);}
  }else{
    const deer=species==='deer',hare=species==='hare',squirrel=species==='squirrel',length=deer?1.15:hare?.43:squirrel?.22:.72,height=deer?.72:hare?.17:squirrel?.105:.32,width=length*.14;
    body([[-length*.49,height,.001,.001],[-length*.39,height,width*.7,length*.13],[-length*.20,height,width,length*.16],[length*.12,height,width*.9,length*.16],[length*.30,height,width*.6,length*.12],[length*.38,height,.005,.02]]);
    head.position.set(0,height,length*.27);rod([0,height,length*.25],[0,height+(deer?.29:.08),length*.38],width*.6,base,head,width*.43);oval([0,height+(deer?.35:.07),length*.44],[width*.53,width*.6,length*.12],base,head);rod([0,height+(deer?.32:.065),length*.49],[0,height+(deer?.29:.05),length*.62],width*.37,base,head,width*.19);oval([0,height+(deer?.29:.05),length*.625],[width*.22,width*.17,.012],dark,head);
    for(const side of [-1,1]){oval([side*width*.49,height+(deer?.39:.10),length*.45],[length*.012,length*.014,length*.012],dark,head);oval([side*width*.65,height+(deer?.49:hare?.20:.13),length*.39],[width*.3,hare?.12:length*.055,length*.018],base,head);
      for(const front of [false,true]){const z=front?length*.23:-length*.32,leg=bone((front?'fore':'hind')+'_'+side,[side*width*.65,height,z],root);limbs.push(leg);const knee=[side*width*.7,height*.48,z+(front?0:-length*.07)],foot=[side*width*.74,.027,z+length*.035];rod([side*width*.65,height,z],knee,width*(front?.23:.4),base,leg);rod(knee,foot,width*.14,base,leg);oval([foot[0],.018,foot[2]+.018],[width*.20,.02,length*.055],deer?dark:base,leg);}
    }
    tail.position.set(0,height,-length*.40);rod([0,height,-length*.40],[0,height+(squirrel?.12:-.08),-length*(squirrel?1.12:hare?.6:.96)],width*(squirrel?.55:.34),base,tail,squirrel?width*.8:width*.06);oval([0,height-.06,-length*.94],[width*.19,width*.19,length*.05],light,tail);
    if(deer){for(const side of [-1,1])for(let i=0;i<35;i++){const z=-.38+(i%9)*.09,y=height+.02+Math.floor(i/9)*.044;oval([side*width*.92,y,z],[.007,.013,.016],light);}if(male)for(const side of [-1,1]){const top=height+.90;rod([side*.07,height+.44,length*.39],[side*.17,top,length*.22],.024,accent,head,.006);for(let k=0;k<3;k++)rod([side*(.09+k*.025),height+.54+k*.1,length*.34-k*.04],[side*(.19+k*.04),height+.65+k*.14,length*.40-k*.055],.012,accent,head,.002);}}
  }
  root.updateMatrixWorld(true);const skeleton=new THREE.Skeleton(bones);skeleton.calculateInverses();
  parts.sort((a,b)=>(a.userData.material as number)-(b.userData.material as number));
  let geometry=mergeGeometries(parts,true)!;geometry.groups.forEach((g,i)=>g.materialIndex=parts[i].userData.material as number);
  const groups=geometry.groups.slice();geometry.clearGroups();for(const g of groups){const last=geometry.groups.at(-1);if(last&&last.materialIndex===g.materialIndex)last.count+=g.count;else geometry.addGroup(g.start,g.count,g.materialIndex);}parts.forEach(g=>g.dispose());
  const welded=mergeVertices(geometry,.00001);geometry.dispose();geometry=welded;
  const mesh=new THREE.SkinnedMesh(geometry,materials);mesh.name='Wildlife_'+species+'_'+age;mesh.add(root);mesh.bind(skeleton);mesh.castShadow=true;mesh.receiveShadow=true;mesh.frustumCulled=false;
  if(age==='juvenile')mesh.scale.setScalar(species==='deer'?.52:.18);else if(age==='subadult')mesh.scale.setScalar(.78);
  mesh.userData={species,age,sex:male?'male':'unspecified',modelStatus:'original anatomical study',bones:bones.length};
  return {mesh,bones,head,tail,limbs,species,age};
}

export function addWildlife(scene:THREE.Scene,ground:THREE.Object3D[],manifest:ForestManifest,sound:ForestSoundscape,ripple?:(x:number,z:number)=>void){
  const sample=surfaceSampler(ground),actors:{rig:Rig;origin:THREE.Vector3;phase:number;state:string;last:number}[]=[];
  function spawn(species:Species,x:number,z:number,age='adult',male=false){const rig=makeWildlife(species,age,male),hit=sample(x,z);rig.mesh.position.set(x,hit?.point.y??0,z);scene.add(rig.mesh);actors.push({rig,origin:rig.mesh.position.clone(),phase:actors.length*2.399,state:'idle',last:0});}
  for(let i=0;i<3;i++)spawn('carp',-9+i*.75,creekCenter(-9+i*.75));for(let i=0;i<16;i++)spawn('carp',-7+i*.04,creekCenter(-7),'juvenile');
  spawn('frog',-7,creekCenter(-7)+creekWidth(-7)*.5+.12);spawn('turtle',-4,creekCenter(-4)+creekWidth(-4)*.5+.18);
  spawn('eagle',0,-105);spawn('kingfisher',-5,-107);spawn('dragonfly',-8,-108);spawn('dragonfly',-9,-108);
  const tree=(manifest.obstacles??[]).find(t=>Math.abs(t.z+105)<25)??{x:-17,z:-95,radius:.4};spawn('woodpecker',tree.x+tree.radius,tree.z);
  spawn('deer',-14,creekCenter(-14)+creekWidth(-14)*.5+.2,'adult',true);spawn('deer',-12,creekCenter(-12)+creekWidth(-12)*.5+.2);spawn('deer',-11,creekCenter(-11)+1.2,'juvenile');spawn('deer',-17,-99,'subadult');
  spawn('hare',-17,-94);spawn('squirrel',tree.x+tree.radius+.1,tree.z+.2);spawn('fox',-24,-99);
  const perch=actors.find(a=>a.rig.species==='kingfisher')!;
  const p=perch.origin,base=sample(p.x+.6,p.z+.6)?.point??p;
  const branch=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([base,base.clone().add(new THREE.Vector3(-.1,.8,-.1)),new THREE.Vector3(p.x,p.y+1.466,p.z)]),18,.022,10,false),new THREE.MeshStandardMaterial({name:'Wildlife_Perch_Wood',color:'#554b3c',roughness:.97}));branch.castShadow=true;scene.add(branch);
  const oldTrees=scene.getObjectByName('Ancient_Trees'),oldMatrix=new THREE.Matrix4();let eaglePerch=new THREE.Vector3(tree.x+1.3,(sample(tree.x,tree.z)?.point.y??0)+12.116,tree.z);
  if(oldTrees instanceof THREE.InstancedMesh&&oldTrees.count){oldTrees.getMatrixAt(0,oldMatrix);const treeOrigin=new THREE.Vector3().setFromMatrixPosition(oldMatrix);eaglePerch=treeOrigin.clone().add(new THREE.Vector3(1.3,12.116,0));const b=new THREE.Mesh(new THREE.TubeGeometry(new THREE.CatmullRomCurve3([treeOrigin.clone().add(new THREE.Vector3(.2,11.8,0)),eaglePerch.clone().add(new THREE.Vector3(0,-.116,0))]),12,.075,12,false),branch.material);b.castShadow=true;scene.add(b);}
  for(const a of actors)if(a.rig.species==='frog'||a.rig.species==='turtle'){const rock=new THREE.Mesh(new THREE.SphereGeometry(.10,16,10),new THREE.MeshStandardMaterial({name:'Wildlife_Basking_Stone',color:'#67705a',roughness:.96}));rock.scale.set(1,.45,.8);rock.position.copy(a.origin).add(new THREE.Vector3(0,.02,0));rock.receiveShadow=true;scene.add(rock);a.origin.y+=.065;}
  let elapsed=0;
  function emit(a:typeof actors[number],kind:WildlifeSound,interval:number){if(elapsed-a.last>interval){sound.event(kind,a.rig.mesh.position);if(kind==='splash')ripple?.(a.rig.mesh.position.x,a.rig.mesh.position.z);a.last=elapsed;}}
  function update(dt:number,camera:THREE.PerspectiveCamera,raining:boolean){elapsed+=dt;
    for(const a of actors){const {rig,origin,phase}=a,m=rig.mesh,t=elapsed+phase,near=m.position.distanceTo(camera.position)<(rig.species==='deer'?8:3);
      a.state=raining?'shelter':near?'alert':'forage';rig.head.rotation.y=Math.sin(t*.37)*.1;rig.tail.rotation.y=Math.sin(t*(rig.species==='carp'?2:.7))*.14;
      let x=origin.x,z=origin.z,y=origin.y;
      if(rig.species==='carp'){x+=Math.sin(t*.12)*.8;z=creekCenter(x)+Math.sin(t*.19+phase)*creekWidth(x)*.22;y=creekLevel-.09;m.rotation.y=Math.cos(t*.12)>0?Math.PI/2:-Math.PI/2;const u=t%47,jump=rig.age==='adult'&&!raining&&u<.4?Math.max(0,1.962*u-4.905*u*u):0;y+=jump;if(jump>.01)emit(a,'splash',4);}
      else if(rig.species==='eagle'){if(raining){const blend=1-Math.exp(-dt*.9);x=THREE.MathUtils.lerp(m.position.x,eaglePerch.x,blend);z=THREE.MathUtils.lerp(m.position.z,eaglePerch.z,blend);y=THREE.MathUtils.lerp(m.position.y,eaglePerch.y,blend);rig.limbs.forEach((b,i)=>{b.rotation.z=0;b.rotation.y=(i?1:-1)*1.25;});}else{x=origin.x+Math.cos(t*.055)*22;z=origin.z+Math.sin(t*.055)*22;y=48;m.rotation.y=-t*.055;rig.limbs.forEach((b,i)=>{b.rotation.y=0;b.rotation.z=(i%2?1:-1)*(Math.floor(t)%12<2?Math.sin(t*2.6)*.22:.07);});emit(a,'eagle',45);}}
      else if(rig.species==='dragonfly'){if(raining){z=creekCenter(x)+creekWidth(x)*.5+.25;y=(sample(x,z)?.point.y??creekLevel)+.012;rig.limbs.forEach(b=>b.rotation.z=0);}else{x+=Math.sin(t*1.8)*.4;z=creekCenter(x)+Math.sin(t)*.2;y=creekLevel+.15+.13*Math.sin(t*.8);rig.limbs.forEach((b,i)=>b.rotation.z=Math.sin(t*75+i)*.22);}}
      else if(rig.species==='kingfisher'){const cycle=t%28,dive=!raining&&cycle>20&&cycle<23;if(dive){const u=(cycle-20)/3;x+=Math.sin(u*Math.PI)*.4;z=creekCenter(x);y=creekLevel+Math.abs(u-.5)*3.2;m.rotation.x=u<.5?1:-.6;rig.limbs.forEach((b,i)=>b.rotation.z=Math.sin(t*12)*(i?1:-1)*.55);if(Math.abs(u-.5)<.05)emit(a,'splash',5);}else{y=origin.y+1.5;m.rotation.x=0;rig.limbs.forEach((b,i)=>b.rotation.y=(i?1:-1)*1.3);emit(a,'kingfisher',33);}}
      else if(rig.species==='woodpecker'){y=origin.y+3+(raining?0:Math.floor(t/10)%3*.09);m.rotation.x=-Math.PI/2;rig.limbs.forEach((b,i)=>b.rotation.y=(i?1:-1)*1.35);rig.head.rotation.x=Math.floor(t)%12<2&&!raining?Math.sin(t*14)*.15:0;if(!raining&&Math.floor(t)%12<2)emit(a,'peck',2);}
      else if(rig.species==='frog'||rig.species==='turtle'){if(near||raining){z=THREE.MathUtils.lerp(m.position.z,creekCenter(x),1-Math.exp(-dt*2));y=THREE.MathUtils.lerp(m.position.y,creekLevel-.06,1-Math.exp(-dt*3));if(a.state!==m.userData.behavior)emit(a,'splash',5);}else{if(rig.species==='frog'){rig.head.scale.y=1+Math.sin(t*3)*.035;emit(a,'frog',22);}y=origin.y;}}
      else{const pace=rig.species==='hare'?.8:rig.species==='squirrel'?.65:.10;const walking=near||rig.species==='fox'||rig.species==='squirrel';
        let targetX=origin.x+(walking?Math.sin(t*pace)*(near?1.6:.65):0),targetZ=origin.z+(walking?Math.cos(t*pace)*.6:0)+(raining?1:0);
        if(rig.species==='deer'&&rig.age==='juvenile'){const mother=actors.find(other=>other.rig.species==='deer'&&other.rig.age==='adult'&&other.rig.mesh.userData.sex!=='male')!;targetX=THREE.MathUtils.lerp(m.position.x,mother.rig.mesh.position.x+.65,1-Math.exp(-dt*1.3));targetZ=THREE.MathUtils.lerp(m.position.z,mother.rig.mesh.position.z+.9,1-Math.exp(-dt*1.3));a.state='follow';}
        if(!(manifest.obstacles??[]).some(o=>Math.hypot(targetX-o.x,targetZ-o.z)<o.radius+.25)){x=targetX;z=targetZ;}
        const hit=sample(x,z);if(hit&&hit.normal.y>.7&&hit.point.y>creekLevel){y=hit.point.y;const hopping=walking&&(rig.species==='hare'||rig.species==='squirrel'),duration=Math.sqrt(8*.15/9.81),u=t%duration;y+=hopping?Math.max(0,9.81*duration*.5*u-4.905*u*u):0;m.rotation.y=Math.atan2(Math.cos(t*pace),-Math.sin(t*pace));}
        rig.limbs.forEach((b,i)=>b.rotation.x=walking?Math.sin(t*4+i*Math.PI)*.17:0);rig.head.rotation.x=near?-.12:rig.species==='deer'?.32:rig.species==='fox'?.2:0;
        if(rig.species==='deer'&&rig.age==='adult'&&!near&&!raining){m.rotation.y=Math.PI;rig.head.rotation.x=1.1;a.state='drink';}
        if(walking)emit(a,rig.species==='squirrel'?'claws':'leaves',7);
        if(rig.species==='fox')emit(a,'fox',55);
      }
      m.position.set(x,y,z);m.userData.behavior=a.state;
    }
  }
  scene.userData.wildlife=actors.map(a=>({species:a.rig.species,age:a.rig.age,joints:a.rig.bones.length}));
  return {actors,update};
}

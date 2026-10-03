import * as THREE from 'three';

export type WeatherMode = 'clear' | 'rain' | 'cloudy';

// Original synthesis: no recordings, remote audio or camera input. Panners are
// positioned in the same metre/y-up coordinate frame as the forest camera.
class StormAudio {
  private context: AudioContext | null = null;
  private master: GainNode | null = null;
  private loops: {source: AudioBufferSourceNode; gain: GainNode; volume:number; pan?:PannerNode; offset?:THREE.Vector3}[] = [];
  private transient = new Set<AudioBufferSourceNode>();
  private muted = false;
  private rain = false;
  private cloudy = false;
  private noise(seconds:number) {
    const ctx=this.context!;const buffer=ctx.createBuffer(1,Math.ceil(ctx.sampleRate*seconds),ctx.sampleRate);
    const samples=buffer.getChannelData(0);let state=0x217865;
    for(let i=0;i<samples.length;i++){state=(Math.imul(state,1664525)+1013904223)>>>0;samples[i]=(state/4294967296)*2-1;}
    return buffer;
  }
  async arm() {
    if(!this.context){
      this.context=new AudioContext();this.master=this.context.createGain();this.master.gain.value=0;this.master.connect(this.context.destination);
      const noise=this.noise(9);
      for(const [frequency,gain,x,z] of [[2800,.13,-8,-5],[1800,.12,9,-8],[480,.18,-15,2],[6000,.045,2,5]]){
        const source=this.context.createBufferSource();source.buffer=noise;source.loop=true;
        const filter=this.context.createBiquadFilter();filter.type='bandpass';filter.frequency.value=frequency;filter.Q.value=.65;
        const envelope=this.context.createGain();envelope.gain.value=gain;
        const pan=this.context.createPanner();pan.panningModel='HRTF';pan.distanceModel='inverse';pan.refDistance=8;pan.positionX.value=x;pan.positionZ.value=z;
        source.connect(filter).connect(envelope).connect(pan).connect(this.master);source.start(0,Math.random()*8);this.loops.push({source,gain:envelope,volume:gain,pan,offset:new THREE.Vector3(x,0,z)});
      }
      // Roof/window taps: irregular impulses filtered into a soft woody tick.
      const tapping=this.context.createBuffer(1,this.context.sampleRate*7,this.context.sampleRate),data=tapping.getChannelData(0);
      for(let t=0;t<7;t+=.028+Math.random()*.12){const begin=Math.floor(t*this.context.sampleRate);for(let k=0;k<600&&begin+k<data.length;k++)data[begin+k]+=(Math.random()*2-1)*Math.exp(-k/95)*.22;}
      const taps=this.context.createBufferSource();taps.buffer=tapping;taps.loop=true;
      const gain=this.context.createGain();gain.gain.value=.16;const pan=this.context.createStereoPanner();pan.pan.value=.6;
      taps.connect(gain).connect(pan).connect(this.master);taps.start();this.loops.push({source:taps,gain,volume:.16});
    }
    await this.context.resume();this.apply();
  }
  private apply(){if(this.context&&this.master){
    this.master.gain.setTargetAtTime(this.rain&&!this.muted ? .7 : 0,this.context.currentTime,.35);
    this.loops.forEach((loop,i)=>loop.gain.gain.setTargetAtTime(this.cloudy?(i===2?.06:0):loop.volume,this.context!.currentTime,.2));
  }}
  setRain(rain:boolean,cloudy=false){this.rain=rain||cloudy;this.cloudy=cloudy;this.apply();if(!this.rain){for(const source of this.transient){try{source.stop();}catch{/* already ended */}}this.transient.clear();}}
  setMuted(muted:boolean){this.muted=muted;this.apply();}
  thunder(position:THREE.Vector3) {
    const ctx=this.context;if(!ctx||ctx.state!=='running'||!this.rain)return;
    const now=ctx.currentTime;
    for(const [delay,duration,frequency,peak,distance] of [[2.4,7,95,.16,75],[4.5,5,150,.2,36],[7.8,2.8,260,.25,9]]){
      const source=ctx.createBufferSource();source.buffer=this.noise(duration);
      const filter=ctx.createBiquadFilter();filter.type='lowpass';filter.frequency.value=frequency;
      const envelope=ctx.createGain();envelope.gain.setValueAtTime(0,now+delay);envelope.gain.linearRampToValueAtTime(peak,now+delay+.07);envelope.gain.exponentialRampToValueAtTime(.0001,now+delay+duration);
      const pan=ctx.createPanner();pan.panningModel='HRTF';pan.refDistance=25;pan.positionX.value=position.x+distance*.6;pan.positionY.value=position.y+15;pan.positionZ.value=position.z-distance;
      source.connect(filter).connect(envelope).connect(pan).connect(this.master!);source.onended=()=>{this.transient.delete(source);source.disconnect();filter.disconnect();envelope.disconnect();pan.disconnect();};
      source.start(now+delay);source.stop(now+delay+duration);this.transient.add(source);
    }
  }
  listener(camera:THREE.PerspectiveCamera){
    if(!this.context)return;const l=this.context.listener,forward=new THREE.Vector3(0,0,-1).applyQuaternion(camera.quaternion),up=new THREE.Vector3(0,1,0).applyQuaternion(camera.quaternion);
    l.positionX.value=camera.position.x;l.positionY.value=camera.position.y;l.positionZ.value=camera.position.z;
    l.forwardX.value=forward.x;l.forwardY.value=forward.y;l.forwardZ.value=forward.z;l.upX.value=up.x;l.upY.value=up.y;l.upZ.value=up.z;
    for(const loop of this.loops)if(loop.pan&&loop.offset){const p=loop.offset.clone().applyQuaternion(camera.quaternion).add(camera.position);loop.pan.positionX.value=p.x;loop.pan.positionY.value=p.y;loop.pan.positionZ.value=p.z;}
  }
  dispose(){this.loops.forEach(l=>l.source.stop());this.transient.forEach(s=>{try{s.stop();}catch{/* ended */}});void this.context?.close();}
}

export function createWeather(scene:THREE.Scene,camera:THREE.PerspectiveCamera,ground:THREE.Object3D[],sample?: (x:number,z:number)=>{point:THREE.Vector3}|null) {
  let mode:WeatherMode='clear',time=0,stormAt=8,flashRemaining=0,surfaceAt=-1;
  const reducedMotion=matchMedia('(prefers-reduced-motion: reduce)').matches;
  const audio=new StormAudio();
  const rainRoot=new THREE.Group();rainRoot.name='Storm_Precipitation';rainRoot.visible=false;scene.add(rainRoot);
  const dropMaterial=new THREE.MeshBasicMaterial({name:'Storm_Rain',color:'#aebfc9',transparent:true,opacity:.28,depthWrite:false,side:THREE.DoubleSide});
  const rain=new THREE.InstancedMesh(new THREE.PlaneGeometry(.012,.32),dropMaterial,1400);rain.frustumCulled=false;rainRoot.add(rain);
  const rainPositions:THREE.Vector3[]=[];let seed=9813;
  const random=()=>{seed=(Math.imul(seed,1664525)+1013904223)>>>0;return seed/4294967296;};
  const transform=new THREE.Object3D();
  for(let i=0;i<rain.count;i++){
    const p=new THREE.Vector3((random()-.5)*24,random()*18,(random()-.5)*24);rainPositions.push(p);
    transform.position.copy(p);transform.rotation.set(0,0,-.27);transform.updateMatrix();rain.setMatrixAt(i,transform.matrix);
  }
  const rippleMaterial=new THREE.MeshBasicMaterial({name:'Storm_Ripple',color:'#aabac0',transparent:true,opacity:.2,side:THREE.DoubleSide,depthWrite:false});
  const ripples=new THREE.InstancedMesh(new THREE.RingGeometry(.075,.083,20),rippleMaterial,70);ripples.frustumCulled=false;rainRoot.add(ripples);
  const splashes=new THREE.InstancedMesh(new THREE.PlaneGeometry(.012,.055),rippleMaterial,140);splashes.frustumCulled=false;rainRoot.add(splashes);
  let boltGeometry=new THREE.BufferGeometry();
  boltGeometry.setAttribute('position',new THREE.Float32BufferAttribute([],3));
  boltGeometry.setAttribute('normal',new THREE.Float32BufferAttribute([],3));
  const bolt=new THREE.Mesh(boltGeometry,new THREE.MeshBasicMaterial({name:'Storm_Lightning',color:'#ddeaf6',side:THREE.DoubleSide}));bolt.name='Storm_Lightning';bolt.visible=false;bolt.frustumCulled=false;scene.add(bolt);
  const ray=new THREE.Raycaster();const surfaces:THREE.Vector3[]=[];
  // Local surface samples include roofs and windows; rays produce horizontal rings
  // on land/roof/water, plus vertical splashes on nearby window panes.
  const weatherSurfaces=sample?[]:[...ground];scene.traverse(o=>{if(!(o instanceof THREE.Mesh))return;let cabin=false;for(let p=o.parent;p;p=p.parent)if(p.name==='Autumn_Cabin')cabin=true;if(cabin||o.name.startsWith('Water'))weatherSurfaces.push(o);});
  const original=new Map<THREE.MeshStandardMaterial,{color:THREE.Color;roughness:number;metalness:number}>();
  scene.traverse(o=>{if(o instanceof THREE.Mesh)for(const m of Array.isArray(o.material)?o.material:[o.material])if(m instanceof THREE.MeshStandardMaterial)original.set(m,{color:m.color.clone(),roughness:m.roughness,metalness:m.metalness});});
  function setMode(next:WeatherMode) {
    if(mode===next&&scene.userData.weatherIntensity!==undefined)return;
    mode=next;rainRoot.visible=next==='rain';scene.userData.weatherIntensity=next==='rain'?1:next==='cloudy'?.6:0;scene.userData.rainIntensity=next==='rain'?1:0;audio.setRain(next==='rain',next==='cloudy');bolt.visible=false;
    for(const [m,saved] of original){m.color.copy(saved.color);m.roughness=saved.roughness;m.metalness=saved.metalness;
      if(next==='rain'&&!/Fur|Feather|Foliage|fern/.test(m.name)){m.color.multiplyScalar(.8);m.roughness=Math.min(m.roughness,.29);}}
    time=0;stormAt=next==='cloudy'?.1:8;surfaceAt=-1;
  }
  function lightning(){
    const direction=new THREE.Vector3(.35,.1,-1).applyQuaternion(camera.quaternion);direction.y=0;direction.normalize();
    const origin=camera.position.clone().addScaledVector(direction,170);origin.y=camera.position.y+55;
    const verts:number[]=[],segments=11;
    let last=origin.clone();
    for(let i=1;i<=segments;i++){
      const next=origin.clone().add(new THREE.Vector3((random()-.5)*9,-i*3.8,(random()-.5)*3));const w=.12;
      verts.push(last.x-w,last.y,last.z,last.x+w,last.y,last.z,next.x-w,next.y,next.z,next.x-w,next.y,next.z,last.x+w,last.y,last.z,next.x+w,next.y,next.z);last=next;
    }
    boltGeometry.dispose();boltGeometry=new THREE.BufferGeometry();bolt.geometry=boltGeometry;
    boltGeometry.setAttribute('position',new THREE.Float32BufferAttribute(verts,3));boltGeometry.computeVertexNormals();boltGeometry.computeBoundingSphere();
    bolt.visible=!reducedMotion;flashRemaining=.2;audio.thunder(camera.position);
  }
  return {
    setMode,mode:()=>mode,armAudio:()=>audio.arm(),mute:(muted:boolean)=>audio.setMuted(muted),
    update(dt:number){
      audio.listener(camera);if(mode==='clear')return;time+=dt;
      flashRemaining-=dt;if(flashRemaining<=0)bolt.visible=false;
      if(time>=stormAt){lightning();stormAt=time+30+random()*20;}
      if(mode==='cloudy')return;
      rainRoot.position.copy(camera.position);rainRoot.position.y=camera.position.y-8;
      // Update source matrices too: the explicit WebGL compatibility mode shares
      // the same precipitation, while the WebGPU adapter uploads the instance data.
      for(let i=0;i<rain.count;i++){
        const p=rainPositions[i];const y=18-((time*16+p.y)%18);transform.position.set(p.x-y*.27,y,p.z);transform.rotation.set(0,0,-.27);transform.scale.setScalar(1);transform.updateMatrix();rain.setMatrixAt(i,transform.matrix);
      }
      rain.instanceMatrix.needsUpdate=true;
      if(time-surfaceAt>1){surfaceAt=time;surfaces.length=0;scene.updateMatrixWorld(true);
        for(let i=0;i<ripples.count;i++){const x=camera.position.x+(random()-.5)*20,z=camera.position.z+(random()-.5)*20;
          ray.set(new THREE.Vector3(x,camera.position.y+15,z),new THREE.Vector3(0,-1,0));const hit=ray.intersectObjects(weatherSurfaces,true)[0],soil=sample?.(x,z);
          const contact=hit&&(!soil||hit.point.y>soil.point.y)?hit.point:soil?.point;surfaces.push(contact?contact.clone():new THREE.Vector3(x,-100,z));}}
      for(let i=0;i<ripples.count;i++){
        const phase=(time*1.8+i*.618)%1;transform.position.copy(surfaces[i]??new THREE.Vector3(0,-100,0)).sub(rainRoot.position);transform.position.y+=.012;
        transform.rotation.set(-Math.PI/2,0,0);transform.scale.setScalar(.3+phase*3.4);transform.updateMatrix();ripples.setMatrixAt(i,transform.matrix);
      }
      ripples.instanceMatrix.needsUpdate=true;
      for(let i=0;i<splashes.count;i++){
        const phase=(time*2.6+i*.618)%1,angle=i*2.4;
        transform.position.copy(surfaces[Math.floor(i/2)]??new THREE.Vector3(0,-100,0)).sub(rainRoot.position);
        transform.position.add(new THREE.Vector3(Math.cos(angle)*phase*.15,Math.sin(phase*Math.PI)*.15+.025,Math.sin(angle)*phase*.15));
        transform.rotation.set(0,angle,Math.sin(angle)*.6);transform.scale.setScalar(1-phase);transform.updateMatrix();splashes.setMatrixAt(i,transform.matrix);
      }
      splashes.instanceMatrix.needsUpdate=true;
    },
    dispose(){audio.dispose();rain.geometry.dispose();dropMaterial.dispose();ripples.geometry.dispose();splashes.geometry.dispose();rippleMaterial.dispose();boltGeometry.dispose();(bolt.material as THREE.Material).dispose();rainRoot.removeFromParent();bolt.removeFromParent();},
  };
}

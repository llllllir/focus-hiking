import * as THREE from 'three';
import { acquireForestAudio, releaseForestAudio, resumeForestAudio } from './audio-context';
export type WildlifeSound = 'splash'|'frog'|'eagle'|'peck'|'kingfisher'|'wings'|'leaves'|'claws'|'fox';

export class ForestSoundscape {
  private context:AudioContext|null=null;
  private master:GainNode|null=null;
  private buffers=new Map<string,AudioBuffer>();
  private sources=new Set<AudioScheduledSourceNode>();
  private stream:{pan:PannerNode;gain:GainNode}|null=null;
  private rustle:{pan:PannerNode;gain:GainNode}|null=null;
  private muted=false;
  private raining=false;
  private nextBird=5;
  private elapsed=0;
  private lastEvent=new Map<string,number>();
  private camera=new THREE.Vector3();
  private pending:Promise<void>|null=null;
  private disposed=false;
  private birdTimer:ReturnType<typeof setInterval>|null=null;
  async arm(camera?:THREE.PerspectiveCamera){
    if(this.disposed)return;
    if(camera)this.camera.copy(camera.position);
    if(!this.pending)this.pending=this.initialize().catch(e=>{this.master?.disconnect();if(this.context)releaseForestAudio(this.context);this.context=null;this.pending=null;throw e;});
    const resume=resumeForestAudio(this.context!);
    await Promise.all([this.pending,resume]);if(this.disposed)return;if(camera)this.update(camera,0);this.apply();
  }
  private async initialize(){
    const audio=acquireForestAudio(),ctx=this.context=audio.context;this.master=ctx.createGain();this.master.gain.value=0;
    const limiter=ctx.createDynamicsCompressor();limiter.threshold.value=-18;limiter.ratio.value=4;limiter.attack.value=.03;limiter.release.value=.3;
    this.master.connect(limiter).connect(audio.output);
    const names=['great-tit','sparrows','leaf-rustle','quiet-stream','frog','peck','fox','eagle'];
    await Promise.all(names.map(async name=>{
      const response=await fetch('/audio/forest/'+name+'.mp3');if(!response.ok)throw Error('声景资源加载失败: '+name);
      const buffer=await ctx.decodeAudioData(await response.arrayBuffer());
      // Raise quiet recordings while protecting peaks; source files stay intact.
      let peak=0,energy=0,count=0;for(let c=0;c<buffer.numberOfChannels;c++){const d=buffer.getChannelData(c);for(const v of d){peak=Math.max(peak,Math.abs(v));energy+=v*v;count++;}}
      const rms=Math.sqrt(energy/Math.max(1,count));
      const scale=Math.min(8,.85/(peak||1),.14/(rms||1));for(let c=0;c<buffer.numberOfChannels;c++){const d=buffer.getChannelData(c);for(let i=0;i<d.length;i++)d[i]*=scale;}
      if(this.disposed)return;
      this.buffers.set(name,buffer);
    }));
    if(this.disposed)return;
    this.stream=this.loop('quiet-stream',.24,new THREE.Vector3(0,-.28,-108),14);
    this.rustle=this.loop('leaf-rustle',.32,this.camera.clone().add(new THREE.Vector3(-5,2,-7)),12);
    // A quiet continuous canopy bed fills the silent gaps in real rustle recordings.
    const wind=ctx.createBuffer(1,ctx.sampleRate*12,ctx.sampleRate),data=wind.getChannelData(0);
    let seed=0x510872,brown=0;
    for(let i=0;i<data.length;i++){seed=(Math.imul(seed,1664525)+1013904223)>>>0;brown=(brown+.025*(seed/4294967296*2-1))/1.025;const fade=Math.min(1,i/(ctx.sampleRate*.04),(data.length-1-i)/(ctx.sampleRate*.04));data[i]=brown*3.5*fade;}
    const source=ctx.createBufferSource();source.buffer=wind;source.loop=true;
    const high=ctx.createBiquadFilter();high.type='highpass';high.frequency.value=100;
    const low=ctx.createBiquadFilter();low.type='lowpass';low.frequency.value=1500;
    const gain=ctx.createGain();gain.gain.value=.22;
    source.connect(high).connect(low).connect(gain).connect(this.master!);source.start();this.sources.add(source);
    this.nextBird=ctx.currentTime+2;
    this.birdTimer=setInterval(()=>this.bird(),500);
  }
  private panner(position:THREE.Vector3,ref=5){const pan=this.context!.createPanner();pan.panningModel='HRTF';pan.distanceModel='inverse';pan.refDistance=ref;pan.rolloffFactor=1.2;pan.positionX.value=position.x;pan.positionY.value=position.y;pan.positionZ.value=position.z;return pan;}
  private loop(name:string,volume:number,position:THREE.Vector3,ref:number){
    const ctx=this.context!,source=ctx.createBufferSource();source.buffer=this.buffers.get(name)!;source.loop=true;
    const gain=ctx.createGain();gain.gain.value=volume;const pan=this.panner(position,ref);
    source.connect(gain).connect(pan).connect(this.master!);source.start();this.sources.add(source);return {pan,gain};
  }
  private apply(){if(this.master&&this.context)this.master.gain.setTargetAtTime(this.muted?0:this.raining?.2:.85,this.context.currentTime,.6);}
  setRain(rain:boolean){this.raining=rain;this.apply();}
  mute(muted:boolean){this.muted=muted;this.apply();}
  private recordedBird(name:string,position:THREE.Vector3){
    const ctx=this.context!,source=ctx.createBufferSource();source.buffer=this.buffers.get(name)!;
    const gain=ctx.createGain(),duration=Math.min(name==='great-tit'?source.buffer.duration:2.2,source.buffer.duration),now=ctx.currentTime;
    gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(.3,now+.08);gain.gain.setValueAtTime(.3,now+duration-.12);gain.gain.linearRampToValueAtTime(0,now+duration);
    const pan=this.panner(position,12);source.connect(gain).connect(pan).connect(this.master!);this.sources.add(source);
    source.onended=()=>{this.sources.delete(source);source.disconnect();gain.disconnect();pan.disconnect();};
    source.start(now,name==='sparrows'?Math.random()*Math.max(0,source.buffer.duration-duration):0,duration);
  }
  private bird(){
    const ctx=this.context;if(!ctx||ctx.state!=='running'||this.raining||this.muted||this.buffers.size!==8||ctx.currentTime<this.nextBird)return;
    const angle=Math.random()*Math.PI*2,radius=12+Math.random()*15;
    this.recordedBird(Math.random()<.5?'great-tit':'sparrows',this.camera.clone().add(new THREE.Vector3(Math.cos(angle)*radius,5,Math.sin(angle)*radius)));
    this.nextBird=ctx.currentTime+5+Math.random()*7;
  }
  event(kind:WildlifeSound,position:THREE.Vector3){
    const ctx=this.context;if(!ctx||ctx.state!=='running'||this.muted)return;
    if(position.distanceTo(this.camera)>65||(this.lastEvent.get(kind)??-Infinity)+1.8>this.elapsed)return;
    this.lastEvent.set(kind,this.elapsed);
    if(this.buffers.has(kind)){this.recordedBird(kind,position);return;}
    const now=ctx.currentTime,pan=this.panner(position,2),gain=ctx.createGain();gain.gain.value=0;gain.connect(pan).connect(this.master!);
    const tonal=['frog','eagle','kingfisher','fox'].includes(kind);
    let source:AudioScheduledSourceNode;
    if(tonal){const osc=ctx.createOscillator();source=osc;osc.type=kind==='frog'?'sine':'triangle';const f={frog:220,eagle:1400,kingfisher:2900,fox:150}[kind as 'frog'|'eagle'|'kingfisher'|'fox'];osc.frequency.setValueAtTime(f,now);osc.frequency.exponentialRampToValueAtTime(f*(kind==='eagle'?.45:1.12),now+.3);osc.connect(gain);}
    else{const noise=ctx.createBuffer(1,ctx.sampleRate*.35,ctx.sampleRate),d=noise.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=(Math.random()*2-1)*Math.exp(-i/(ctx.sampleRate*.1));const s=ctx.createBufferSource();source=s;s.buffer=noise;const filter=ctx.createBiquadFilter();filter.type='bandpass';filter.frequency.value=kind==='peck'?1800:kind==='splash'?650:3500;filter.Q.value=.5;s.connect(filter).connect(gain);}
    const duration=tonal?.38:.24;gain.gain.setValueAtTime(0,now);gain.gain.linearRampToValueAtTime(kind==='splash'?.15:.07,now+.02);gain.gain.exponentialRampToValueAtTime(.0001,now+duration);
    this.sources.add(source);source.onended=()=>{this.sources.delete(source);source.disconnect();gain.disconnect();pan.disconnect();};source.start(now);source.stop(now+duration);
  }
  update(camera:THREE.PerspectiveCamera,dt:number){
    this.elapsed+=dt;this.camera.copy(camera.position);const ctx=this.context;if(!ctx||ctx.state!=='running')return;
    const l=ctx.listener,dir=new THREE.Vector3(0,0,-1).applyQuaternion(camera.quaternion),up=new THREE.Vector3(0,1,0).applyQuaternion(camera.quaternion);
    l.positionX.value=camera.position.x;l.positionY.value=camera.position.y;l.positionZ.value=camera.position.z;
    l.forwardX.value=dir.x;l.forwardY.value=dir.y;l.forwardZ.value=dir.z;l.upX.value=up.x;l.upY.value=up.y;l.upZ.value=up.z;
    if(this.stream){this.stream.pan.positionX.value=camera.position.x;this.stream.gain.gain.setTargetAtTime(.24,ctx.currentTime,.8);}
    if(this.rustle){const p=this.camera.clone().add(new THREE.Vector3(-5,2,-7));this.rustle.pan.positionX.value=p.x;this.rustle.pan.positionY.value=p.y;this.rustle.pan.positionZ.value=p.z;this.rustle.gain.gain.setTargetAtTime(.28+.06*(.5+.5*Math.sin(this.elapsed*.13)),ctx.currentTime,1);}
  }
  dispose(){this.disposed=true;if(this.birdTimer)clearInterval(this.birdTimer);this.sources.forEach(s=>{try{s.stop();}catch{/* ended */}});this.sources.clear();this.master?.disconnect();if(this.context)releaseForestAudio(this.context);this.context=null;}
}

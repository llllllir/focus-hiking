// Forest adapter for the vendored V-Island/tidewater WebGPU engine. Three.js remains
// the authoring, picking and navigation representation; every visible draw uses WGSL.
import { GPU } from './vendor/v-island/engine/gpu/GPU.js';
import { MeshRenderer } from './vendor/v-island/engine/render/MeshRenderer.js';
import { SceneRenderer, SCENE_FORMATS, DEPTH_FORMAT, LAYERS } from './vendor/v-island/engine/render/SceneRenderer.js';
import { SunShadows } from './vendor/v-island/engine/render/Shadows.js';
import { setShadowMap, ShadowUniforms, shadowModule } from './vendor/v-island/engine/render/wgsl/lighting.js';
import { FullscreenPass } from './vendor/v-island/engine/render/FullscreenPass.js';
import { Material } from './vendor/v-island/engine/render/Material.js';
import { FrameUniforms, setFrameCamera, createViewUniforms } from './vendor/v-island/engine/render/Frame.js';
import { Texture, StorageBuffer, RenderTarget } from './vendor/v-island/engine/gpu/Texture.js';
import { Matrix4, Vector3 } from './vendor/v-island/engine/math/index.js';
import { skinnedMaterial } from './vendor/v-island/engine/render/Skinning.js';
import { generateMipmaps } from './vendor/v-island/engine/gpu/Mipmaps.js';
import { Scene } from './vendor/v-island/engine/scene/Scene.js';
import { Mesh, InstancedMesh } from './vendor/v-island/engine/scene/Mesh.js';
import { PerspectiveCamera } from './vendor/v-island/engine/scene/Camera.js';
import { BufferGeometry } from './vendor/v-island/engine/geometry/BufferGeometry.js';
import { BufferAttribute, InstancedBufferAttribute } from './vendor/v-island/engine/geometry/BufferAttribute.js';

// The upstream shader/layout caches belong to one device. Keep that idle device
// across visits while releasing each scene's buffers, textures and view uniforms.
// Its two small shared frame/shadow buffers stay with their cached bind groups.
let deviceLost=false;

export async function createIslandRenderer(host, sourceScene, original) {
  const canvas = document.createElement('canvas'); host.append(canvas);
  try {
    if(deviceLost)throw new Error('图形设备已中断，请刷新页面，或使用 WebGL 兼容模式');
    if(!GPU.device){await GPU.init({canvas});GPU.device.lost.then(()=>{deviceLost=true;});}
    else {GPU.canvas=canvas;GPU.context=canvas.getContext('webgpu');GPU.context.configure({device:GPU.device,format:GPU.format,alphaMode:'opaque',usage:GPUTextureUsage.RENDER_ATTACHMENT|GPUTextureUsage.COPY_SRC});}
  } catch (e) { canvas.remove(); throw e; }
  const scene = new Scene(), camera = new PerspectiveCamera(56, 1, .08, 1000);
  const meshes = new MeshRenderer(); meshes.syncPipelines = true;
  const pipeline = new SceneRenderer(meshes, scene, camera);
  const reflectedCamera=new PerspectiveCamera(56,1,.08,1000),reflectedFrame=createViewUniforms('creek reflection');
  const reflectionMatrix=new Matrix4(),reflectionTarget=new RenderTarget(1,1,{colors:SCENE_FORMATS,depth:DEPTH_FORMAT,label:'creek reflection'});
  let frameNumber=0;
  const shadowCameraPosition=new Vector3(1e6,1e6,1e6);let lastShadowTime=-Infinity;
  const shadows = new SunShadows({size:2048, splits:[16,65,190], lightMargin:90});
  const geometries = new Map(), materials = new Map(), textures = new Map(), pairs = [];
  const skins=[];
  const F = FrameUniforms.fields;
  F.sunDir.value.set(-.38,.82,.43).normalize(); F.sunColor.value.setRGB(3.1,2.45,1.7);
  F.skyIrradiance.value.setRGB(.22,.29,.36); F.horizonColor.value.setRGB(.58,.64,.68);
  F.exposure.value = .94;
  const background = new FullscreenPass({label:'autumn sky',colorFormats:SCENE_FORMATS,writeMasks:[15,0,0],depthFormat:DEPTH_FORMAT,depthCompare:'equal',code:`
    fn fragment(in: FSIn) -> vec4f {
      let farP = frame.invViewProj * vec4f(in.uv.x*2.0-1.0,1.0-in.uv.y*2.0,0.00001,1.0);
      let dir = normalize(farP.xyz/farP.w-frame.cameraPos);
      let h = max(dir.y,0.0);
      var sky = mix(vec3f(.67,.72,.74),vec3f(.18,.36,.61),sqrt(h));
      let cumulus=smoothstep(.3,.57,mx_fractal_noise_float3(dir*9.0+vec3f(frame.time*.002,0.0,0.0),3,2.0,.5))*smoothstep(.15,.3,h)*(1.0-smoothstep(.6,.85,h));
      sky=mix(sky,vec3f(.87,.89,.91),cumulus*.72*(1.0-smoothstep(.97,.995,dot(dir,frame.sunDir))));
      let highCloudMask=smoothstep(.15,.38,mx_fractal_noise_float3(dir*3.1,2,2.0,.5))*smoothstep(.5,.8,h);
      let cirrus=pow(max(0.0,sin(dir.x*95.0+dir.z*30.0+sin(dir.z*7.0)*8.0)),10.0)*highCloudMask*.12;
      let altocumulus=smoothstep(.29,.55,mx_fractal_noise_float3(dir*35.0,2,2.0,.5))*highCloudMask*.15;
      let cirrocumulus=smoothstep(.35,.6,mx_fractal_noise_float3(dir*90.0,2,2.0,.5))*highCloudMask*.075;
      sky=mix(sky,vec3f(.87,.9,.95),max(cirrus,max(altocumulus,cirrocumulus))*(1.0-smoothstep(.96,.995,dot(dir,frame.sunDir))));
      let clouds=mx_fractal_noise_float3(dir*5.0+vec3f(frame.time*.012,0.0,0.0),4,2.0,.5);
      let stormSky=mix(vec3f(.12,.16,.19),vec3f(.29,.34,.38),clamp(clouds*.55+.5,0.0,1.0));
      sky=mix(sky,stormSky,frame.debug.x);
      let sun = max(dot(dir,frame.sunDir),0.0);
      sky += vec3f(1.0,.71,.36)*(pow(sun,180.0)*.14+pow(sun,18000.0)*12.0)*(1.0-frame.debug.x);
      return vec4f(sky,1.0);
    }`});
  pipeline.background = background;
  const output = new FullscreenPass({label:'forest exposure and air',modules:[shadowModule],colorFormats:[GPU.format],bindings:{hdr:{texture:()=>pipeline.sceneRT.texture},depth:{texture:()=>pipeline.sceneRT.depthTexture}},code:`
    fn fragment(in: FSIn) -> vec4f {
      var c = textureSampleLevel(hdr,smpLinearClamp,in.uv,0.0).rgb;
      let d = textureLoad(depth,vec2i(in.pos.xy),0);
      let P = worldFromDepth(in.uv,d);
      let distance = select(length(P-frame.cameraPos),1000.0,d<0.00001);
      let haze = select(1.0-exp(-max(distance-mix(50.0,15.0,frame.debug.x),0.0)*mix(.0015,.009,frame.debug.x)),0.0,d<0.00001);
      let view = normalize(P-frame.cameraPos);
      var scatter = 0.0;
      for(var i=0;i<8;i++) {
        let t=(f32(i)+.5)/8.0*min(distance,65.0);
        scatter += sunShadowHard(frame.cameraPos+view*t);
      }
      c += vec3f(.055,.038,.016)*(scatter/8.0)*pow(max(dot(view,frame.sunDir),0.0),6.0)*min(distance/35.0,1.0)*(1.0-frame.debug.x);
      c = mix(c,frame.horizonColor,haze)*frame.exposure;
      c = clamp((c*(2.51*c+.03))/(c*(2.43*c+.59)+.14),vec3f(0.0),vec3f(1.0));
      return vec4f(linearToSrgb(c),1.0);
    }`});
  function texture(t) {
    if(textures.has(t)) return textures.get(t);
    const image=t.image; const tex=new Texture({label:t.name||'forest texture',width:image.width,height:image.height,
      format:t.colorSpace==='srgb'?'rgba8unorm-srgb':'rgba8unorm',mips:true,usage:['sample','copyDst','render']});
    GPU.queue.copyExternalImageToTexture({source:image,flipY:t.flipY},{texture:tex.getGPU()},{width:image.width,height:image.height});
    generateMipmaps(tex);textures.set(t,tex);return tex;
  }
  function geometry(g) {
    if(geometries.has(g))return geometries.get(g);
    const out=new BufferGeometry();
    for(const [name,a] of Object.entries(g.attributes)) {
      // Deinterleave explicitly; engine vertex buffers need packed attributes.
      const data=name==='skinIndex'?new Uint32Array(a.count*a.itemSize):new Float32Array(a.count*a.itemSize);
      for(let i=0;i<a.count;i++) for(let j=0;j<a.itemSize;j++) data[i*a.itemSize+j]=a.getComponent(i,j);
      out.setAttribute(name,new BufferAttribute(data,a.itemSize));
    }
    if(g.index)out.setIndex(new BufferAttribute(g.index.array,1));
    for(const group of g.groups)out.addGroup(group.start,group.count,group.materialIndex);
    out.computeBoundingSphere();geometries.set(g,out);g.addEventListener('dispose',()=>{out.dispose();geometries.delete(g);});return out;
  }
  function material(m,skin=null) {
    if(materials.has(m))return materials.get(m);
    const bindings={}, uniforms={}, code=[];
    code.push('#if REFLECTION_PASS\nif(in.P.y<-.29){discard;}\n#endif');
    for(const [key,t] of Object.entries({albedo:m.map,normalMap:m.normalMap,roughMap:m.roughnessMap,aoMap:m.aoMap})) {
      if(!t)continue;bindings[key]=texture(t);
      t.updateMatrix();uniforms[key+'Uv']=['mat3x3f',t.matrix];
      code.push(`let ${key}UV=(mat.${key}Uv*vec3f(in.uv,1.0)).xy;`);
    }
    if(m.map)code.push('let colorTex=textureSample(albedo,smpAnisoRepeat,albedoUV); s.albedo*=colorTex.rgb; s.alpha*=colorTex.a;');
    if(m.map && !m.normalMap && /Bark|Wood|Granite/.test(m.name))code.push('let relief=dot(colorTex.rgb,vec3f(.2126,.7152,.0722)); s.normal=perturbNormalByHeight(in.P,in.N,dpdx(relief),dpdy(relief),.035);');
    if(m.normalMap)code.push('s.normal=perturbNormalByMap(in.P,in.N,normalMapUV,textureSample(normalMap,smpAnisoRepeat,normalMapUV).xyz*2.0-1.0);');
    if(m.roughnessMap)code.push('s.roughness*=textureSample(roughMap,smpAnisoRepeat,roughMapUV).g;');
    if(m.aoMap)code.push('s.ao=textureSample(aoMap,smpAnisoRepeat,aoMapUV).r;');
    const leaf=/Foliage|fern|Ecology_Grass|Ecology_Rhododendron|Creek_Weeds/.test(m.name);
    if(m.name.includes('Foliage')&&!m.name.includes('Evergreen'))code.push('let leafLuma=dot(s.albedo,vec3f(.2126,.7152,.0722)); s.albedo=mix(vec3f(.13,.045,.012),vec3f(.65,.36,.065),clamp(leafLuma*2.5,0.0,1.0)); s.translucency=s.albedo*.55; s.roughness=.86;');
    if(/Fur/.test(m.name))code.push('let hair=sin(in.P.x*650.0+sin(in.P.y*43.0)*4.0)*sin(in.P.z*420.0); s.albedo*=.92+.08*hair; s.roughness=.96;');
    if(m.name==='Forest_Floor')code.push('let mossNoise=mx_fractal_noise_float3(in.P*1.7,3,2.0,.5); let moss=smoothstep(.0,.25,mossNoise)*smoothstep(.65,.9,in.N.y); s.albedo=mix(s.albedo,vec3f(.055,.085,.036),moss*.75); s.roughness=.98;');
    if(/Creek_Submerged/.test(m.name))code.push('let caustic=pow(max(0.0,sin(in.P.x*18.0+frame.time*.3)*sin(in.P.z*15.0-frame.time*.2)),9.0); s.albedo*=1.0+caustic*.25*(1.0-frame.debug.x);');
    if(/Cabin_Weathered|Cabin_Timber/.test(m.name))code.push('let grain=sin(in.P.y*650.0+sin(in.P.x*38.0+in.P.z*38.0)*.35); s.albedo*=.96+.04*grain; s.normal=perturbNormalByHeight(in.P,in.N,dpdx(grain),dpdy(grain),.0001);');
    if(!/Storm_|Water/.test(m.name))code.push('s.albedo*=mix(1.0,.77,frame.debug.y); s.roughness=mix(s.roughness,max(.12,s.roughness*.35),frame.debug.y);');
    if(m.name==='Cabin_Window_Glass')code.push('let drops=sin(in.P.x*150.0+in.P.z*135.0)*sin(in.P.y*85.0+frame.time*3.0); s.normal=perturbNormalByHeight(in.P,in.N,dpdx(drops),dpdy(drops),frame.debug.x*.0005);');
    const lowPlant=/fern|Ecology_Grass|Ecology_Rhododendron|Creek_Weeds/.test(m.name);
    let vertex=leaf?`v.position.x+=sin(frame.time*mix(1.4,2.4,frame.debug.x)+v.position.y*.7+v.position.x+f32(v.instance)*2.399)*smoothstep(${lowPlant?'.02,.6':'2.0,8.0'},v.position.y)*mix(${lowPlant?'.012,.055':'.055,.17'},frame.debug.x);`:'';
    const water=m.name==='Water';
    if(water) {
      bindings.refracted=pipeline.opaqueCopy.texture; bindings.riverDepth=pipeline.opaqueCopy.depthTexture;
      bindings.forestReflection={texture:()=>reflectionTarget.texture};uniforms.reflectionVP=['mat4x4f',reflectionMatrix];
      code.push(`
        let wave=vec2f(sin(in.P.x*3.1+in.P.z*1.7-frame.time*.3),cos(in.P.z*4.6+in.P.x*.8-frame.time*.2))*mix(.008,.035,frame.debug.x);
        s.normal=normalize(in.N+vec3f(wave.x,0.0,wave.y));
        let uv=clamp(in.pixel/frame.resolution+wave*.012,vec2f(.001),vec2f(.999));
        let opaque=textureSampleLevel(refracted,smpLinearClamp,uv,0.0).rgb;
        let depth=textureLoad(riverDepth,vec2i(uv*frame.resolution),0);
        let bed=worldFromDepth(uv,depth); let thickness=clamp(length(bed-in.P),0.0,6.0);
        let transmission=exp(-vec3f(.25,.1,.055)*thickness);
        let fresnel=.02+.98*pow(1.0-max(dot(s.normal,in.V),0.0),5.0);
        let reflectedClip=mat.reflectionVP*vec4f(in.P,1.0);
        let reflectionUV=clamp(vec2f(reflectedClip.x/reflectedClip.w*.5+.5,.5-reflectedClip.y/reflectedClip.w*.5)+wave*.01,vec2f(.001),vec2f(.999));
        let reflection=textureSampleLevel(forestReflection,smpLinearClamp,reflectionUV,0.0).rgb;
        s.albedo=mix(opaque*transmission+vec3f(.08,.14,.13)*(1.0-transmission),reflection,fresnel);
        s.roughness=.09; s.metalness=0.0;
        let foam=(1.0-smoothstep(.03,.3,thickness))*(.5+.5*sin(in.P.x*15.0-frame.time*2.0));
        s.albedo=mix(s.albedo,vec3f(.65,.7,.68),foam*.2);
      `);
    }
    const out=skin?skinnedMaterial({name:m.name,joints:skin.joints,jointBuffer:skin.buffer,color:m.color,roughness:m.roughness??1,metalness:m.metalness??0,doubleSided:true,surface:code.join('\n')}):new Material({name:m.name,color:m.color,roughness:m.roughness??1,metalness:m.metalness??0,
      alphaTest:m.alphaTest||0,side:m.side===2?'double':'front',vertexColors:m.vertexColors,
      opacity:m.opacity??1,transparent:!!m.transparent,depthWrite:m.depthWrite,uniforms,textures:bindings,surface:code.join('\n'),vertex,lit:!water&&!m.isMeshBasicMaterial,receiveShadows:!water});
    materials.set(m,out);return out;
  }
  sourceScene.updateMatrixWorld(true);
  sourceScene.traverse(o=>{
    if(!o.isMesh || o.name==='Sky')return;
    let skin=null;
    if(o.isSkinnedMesh){
      const joints=o.skeleton.bones.length,data=new Float32Array(joints*32);
      skin={source:o,joints,data,buffer:new StorageBuffer({label:o.name+' joints',count:joints*2,type:'mat4x4f',data}),inverse:o.matrixWorld.clone(),matrix:o.matrixWorld.clone(),first:true};
      skins.push(skin);
    }
    const mat=Array.isArray(o.material)?o.material.map(m=>material(m,skin)):material(o.material,skin);
    const n=o.isInstancedMesh?new InstancedMesh(geometry(o.geometry),mat,o.count):new Mesh(geometry(o.geometry),mat);
    if(o.isInstancedMesh)n.instanceMatrix.array.set(o.instanceMatrix.array);
    if(o.instanceColor)n.instanceColor=new InstancedBufferAttribute(o.instanceColor.array,3);
    n.userData.sourceInstanceVersion=o.instanceMatrix?.version;
    n.name=o.name; n.matrixAutoUpdate=false;
    if((Array.isArray(o.material)?o.material:[o.material]).some(m=>m.name==='Water'))n.layers.set(LAYERS.WATER);
    else if((Array.isArray(o.material)?o.material:[o.material]).some(m=>m.transparent))n.layers.set(LAYERS.TRANSPARENT);
    scene.add(n);pairs.push([o,n]);
  });
  GPU.submit(); await GPU.pipelinesReady();
  original.domElement.hidden=true;
  let time=0;
  const adapterInfo=GPU.adapter.info;
  let retired=false;
  const facade={backend:'v-island-webgpu',gpuDescription:JSON.stringify(adapterInfo?{vendor:adapterInfo.vendor,architecture:adapterInfo.architecture,device:adapterInfo.device,description:adapterInfo.description}:{}),domElement:canvas,
    info:{render:{calls:0,triangles:0}},
    setPixelRatio(r){facade.ratio=r;},ratio:1,
    setSize(w,h){canvas.width=Math.max(1,Math.floor(w*facade.ratio));canvas.height=Math.max(1,Math.floor(h*facade.ratio));canvas.style.width=w+'px';canvas.style.height=h+'px';pipeline.setSize(canvas.width,canvas.height);reflectionTarget.setSize(Math.max(1,canvas.width>>1),Math.max(1,canvas.height>>1));},
    setQuality(size){if(shadows.size===size)return;shadows.texture.destroy();shadows.texture=new Texture({label:'sunShadowMap',width:size,height:size,depth:3,dimension:'2d-array',format:'depth32float',usage:['sample','render']});shadows.size=size;shadows.lightMargin=size<=512?40:90;setShadowMap(shadows.texture);ShadowUniforms.fields.mapSize.value=size;shadows.cascades.forEach(c=>c.dirty=true);},
    render(s,c){
      if(retired)return;
      s.updateMatrixWorld(true);camera.position.copy(c.position);camera.quaternion.copy(c.quaternion);
      for(const skin of skins){
        const {source:o,joints,data}=skin;data.copyWithin(joints*16,0,joints*16);skin.inverse.copy(o.matrixWorld).invert();
        for(let j=0;j<joints;j++){skin.matrix.copy(skin.inverse).multiply(o.skeleton.bones[j].matrixWorld).multiply(o.skeleton.boneInverses[j]);skin.matrix.toArray(data,j*16);}
        if(skin.first){data.copyWithin(joints*16,0,joints*16);skin.first=false;}skin.buffer.write(data);
      }
      camera.aspect=c.aspect;camera.fov=c.fov;camera.updateProjectionMatrix();
      F.debug.value.x=Number(s.userData.weatherIntensity)||0;
      F.debug.value.y=Number(s.userData.rainIntensity)||0;
      F.sunColor.value.setRGB(...(F.debug.value.x?[.12,.15,.18]:[3.1,2.45,1.7]));
      F.skyIrradiance.value.setRGB(...(F.debug.value.x?[.18,.22,.26]:[.22,.29,.36]));
      F.horizonColor.value.setRGB(...(F.debug.value.x?[.25,.3,.35]:[.58,.64,.68]));
      for(const [o,n] of pairs){let visible=o.visible;for(let p=o.parent;p;p=p.parent)visible=visible&&p.visible;n.visible=visible;n.castShadow=o.castShadow;n.matrix.copy(o.matrixWorld);n.geometry=geometry(o.geometry);
        if(o.isInstancedMesh&&n.userData.sourceInstanceVersion!==o.instanceMatrix.version){n.instanceMatrix.array.set(o.instanceMatrix.array);n.instanceMatrix.needsUpdate=true;n.userData.sourceInstanceVersion=o.instanceMatrix.version;}}
      time=performance.now()/1000;F.time.value=time;
      GPU.beginFrame();setFrameCamera(camera,canvas.width,canvas.height);
      const economical=shadows.size<=512;
      if(time-lastShadowTime>(economical?.9:.12)||camera.position.distanceTo(shadowCameraPosition)>(economical?1.2:.7)){
        shadows.render(scene,meshes,shadows.update(camera,F.sunDir.value));shadowCameraPosition.copy(camera.position);lastShadowTime=time;
      }
      if((frameNumber++%2===0||frameNumber===1)&&Math.abs(camera.position.z+108)<85){
        reflectedCamera.position.copy(camera.position);reflectedCamera.position.y=-.62-camera.position.y;
        const direction=camera.getWorldDirection(new Vector3());direction.y=-direction.y;
        reflectedCamera.lookAt(reflectedCamera.position.clone().add(direction));reflectedCamera.aspect=camera.aspect;reflectedCamera.fov=camera.fov;reflectedCamera.updateProjectionMatrix();
        setFrameCamera(reflectedCamera,reflectionTarget.width,reflectionTarget.height,{block:reflectedFrame});reflectionMatrix.copy(reflectedFrame.fields.viewProj.value);
        meshes.render(scene,{label:'forest reflected in creek',kind:'main',camera:reflectedCamera,frameBlock:reflectedFrame,layerMask:1<<LAYERS.OPAQUE,colorViews:reflectionTarget.textures.map(t=>t.view()),colorFormats:SCENE_FORMATS,depthView:reflectionTarget.depthTexture.view(),depthFormat:DEPTH_FORMAT,clearDepth:0,clearColors:[[0,0,0,1],[0,0,0,0],[0,0,0,0]],defines:{REFLECTION_PASS:1},after:rp=>background.draw(rp,reflectedFrame)});
      }
      pipeline.render();output.render({colorViews:[GPU.context.getCurrentTexture().createView()],clear:[0,0,0,1]});GPU.submit();
      facade.info.render.calls=meshes.stats.draws;facade.info.render.triangles=meshes.stats.triangles;
    },
    dispose(){if(retired)return;retired=true;skins.forEach(s=>s.buffer.destroy());geometries.forEach(g=>g.dispose());materials.forEach(m=>m.dispose());textures.forEach(t=>t.destroy());
      shadows.texture.destroy();for(const rt of [reflectionTarget,pipeline.sceneRT,pipeline.opaqueCopy,pipeline.opaqueDepthHalf,pipeline.hullMaskRT]){rt.textures.forEach(t=>t.destroy());rt.depthTexture?.destroy();}
      meshes.drawBuffer?.destroy();pipeline.hullMaskMaterial.dispose();reflectedFrame.destroy();shadows.cascades.forEach(c=>c.block.destroy());canvas.remove();GPU.context.unconfigure();}
  };
  return facade;
}




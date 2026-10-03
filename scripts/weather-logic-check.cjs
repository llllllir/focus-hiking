// CPU state checks, independent of browser/GPU/audio acceptance.
const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict'),ts=require('typescript');
(async()=>{
 const dir=path.resolve('.tools/weather-check');fs.mkdirSync(dir,{recursive:true});
 for(const name of ['weather','autumn']){
  const input=fs.readFileSync('src/scene/'+name+'.ts','utf8');
  const output=ts.transpileModule(input,{compilerOptions:{module:ts.ModuleKind.ESNext,target:ts.ScriptTarget.ES2022}}).outputText;
  fs.writeFileSync(path.join(dir,name+'.mjs'),output);
 }
 const {pathToFileURL}=require('node:url');const THREE=await import('three');
 const {createWeather}=await import(pathToFileURL(path.join(dir,'weather.mjs')));
 const {addAutumnScenery}=await import(pathToFileURL(path.join(dir,'autumn.mjs')));
 global.matchMedia=()=>({matches:false});
 const scene=new THREE.Scene(),camera=new THREE.PerspectiveCamera();camera.position.set(-32,1.7,24);
 const mat=new THREE.MeshStandardMaterial({color:'#8d7657',roughness:.92,metalness:.02});
 const plane=new THREE.Mesh(new THREE.PlaneGeometry(500,500),mat);plane.rotation.x=-Math.PI/2;plane.updateMatrixWorld();scene.add(plane);
 const autumn=addAutumnScenery(scene,[plane]);const weather=createWeather(scene,camera,[plane]);
 const initial=mat.color.clone(),initialRoughness=mat.roughness;
 weather.setMode('rain');assert.equal(scene.userData.weatherIntensity,1);assert.ok(mat.roughness<initialRoughness);
 for(let i=0;i<200;i++){weather.update(.1);autumn.update(i*.1,true);}
 let meshes=0;scene.traverse(o=>{if(o.isMesh){meshes++;for(const value of o.geometry.getAttribute('position')?.array||[])assert.ok(Number.isFinite(value));
  if(o.isInstancedMesh)for(const value of o.instanceMatrix.array)assert.ok(Number.isFinite(value));}});
 assert.ok(autumn.ducks.every(d=>d.position.y<1));assert.ok(autumn.moose[0].position.z<24);
 weather.setMode('clear');assert.ok(mat.color.equals(initial));assert.equal(mat.roughness,initialRoughness);
 assert.equal(scene.getObjectByName('Storm_Precipitation').visible,false);assert.equal(scene.getObjectByName('Storm_Lightning').visible,false);
 for(const b of autumn.solids)assert.ok(b.minX<b.maxX&&b.minZ<b.maxZ);
 weather.dispose();const result={checks:['finite animal/cabin/rain/splash meshes','rain wet materials','animal shelter and duck landing','clear restores original materials','clear hides rain/lightning','cabin collision bounds'],meshes,passed:true,scope:'CPU only; no browser, GPU or audio acceptance'};
 fs.mkdirSync('docs/acceptance/v-island-upgrade',{recursive:true});fs.writeFileSync('docs/acceptance/v-island-upgrade/weather-cpu.json',JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
})().catch(e=>{console.error(e);process.exit(1);});

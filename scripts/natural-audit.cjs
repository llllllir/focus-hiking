const fs=require('node:fs'),crypto=require('node:crypto'),path=require('node:path');
const root='docs/acceptance/scene-2.0-natural',out=root+'/browser';
const sha=file=>crypto.createHash('sha256').update(fs.readFileSync(file)).digest('hex');
const config=JSON.parse(fs.readFileSync('src/scene/config/natural-upgrade.json'));
const assets=JSON.parse(fs.readFileSync('src/scene/natural-assets.json'));
for(const asset of assets)if(sha(asset.file)!==asset.sha256)throw Error('Asset changed: '+asset.file);
const perf=JSON.parse(fs.readFileSync(out+'/performance.json'));
const report=JSON.parse(fs.readFileSync(out+'/walking-60s.json'));
const model='public/assets/forest.glb',bytes=fs.statSync(model).size;
const result={version:'场景2.0自然升级',date:'2026-10-03',model:{bytes,sha256:sha(model)},assetsVerified:assets.length,
 build:JSON.parse(fs.readFileSync('public/assets/forest-build.json')),performance:perf,
 budgets:{sceneBytes:{target:config.budgets.maxSceneBytes,actual:bytes,passed:bytes<=config.budgets.maxSceneBytes},
 frameP95:{target:config.budgets.frameP95Ms,actual:perf.frameP95Ms,passed:perf.frameP95Ms<=config.budgets.frameP95Ms},
 drawSnapshot:{target:config.budgets.maxMainDraws,actual:report.renderInfo.calls,passed:report.renderInfo.calls<=config.budgets.maxMainDraws,note:'Three.js info includes shadow rendering; not an isolated main-pass measurement.'},
 trianglesSnapshot:{target:config.budgets.maxMainTriangles,actual:report.renderInfo.triangles,passed:report.renderInfo.triangles<=config.budgets.maxMainTriangles,note:'Includes shadow rendering; snapshot, not a route maximum.'}},
 verified:JSON.parse(fs.readFileSync(out+'/checks.json')),humanVisualAcceptance:'not-reviewed',comfortAcceptance:'not-reviewed',cameraJointAcceptance:'not-tested',remotePR:'not-created'};
fs.mkdirSync(root,{recursive:true});fs.writeFileSync(path.join(root,'release-audit.json'),JSON.stringify(result,null,2));
console.log(JSON.stringify({bytes,assetsVerified:assets.length,meanFps:perf.meanFps,frameP95Ms:perf.frameP95Ms,budgets:result.budgets},null,2));

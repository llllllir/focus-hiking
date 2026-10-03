import fs from 'node:fs/promises';
import path from 'node:path';
import { createHash } from 'node:crypto';
const root=process.cwd(), folder=path.join(root,'public/assets/textures');
await fs.mkdir(folder,{recursive:true});
async function request(url) {
  for(let attempt=0;attempt<3;attempt++) {
    try { const r=await fetch(url,{signal:AbortSignal.timeout(45000)}); if(!r.ok) throw new Error(`${r.status} ${url}`); return r; }
    catch(e) { if(attempt===2) throw e; }
  }
}
const records=[];
for(const asset of ['forest_ground_04','bark_brown_02','rocky_terrain_02']) {
  const files=await (await request(`https://api.polyhaven.com/files/${asset}`)).json();
  const info=await (await request(`https://api.polyhaven.com/info/${asset}`)).json();
  for(const kind of ['diff','nor_gl','rough']) {
    const key={diff:'Diffuse',nor_gl:'nor_gl',rough:'Rough'}[kind];
    const file=files[key]?.['1k']?.jpg; if(!file) throw new Error(`Missing ${asset}/${kind}/1k jpg`);
    const filename=`${asset}_${kind}_1k.jpg`;
    const bytes=Buffer.from(await (await request(file.url)).arrayBuffer());
    if(file.size && bytes.length!==file.size) throw new Error(`Incomplete download ${filename}`);
    if(file.md5 && createHash('md5').update(bytes).digest('hex')!==file.md5) throw new Error(`Checksum mismatch ${filename}`);
    await fs.writeFile(path.join(folder,filename),bytes);
    records.push({file:`public/assets/textures/${filename}`,source:`https://polyhaven.com/a/${asset}`,download:file.url,license:'CC0-1.0',author:Object.keys(info.authors??{}).join(', '),sha256:createHash('sha256').update(bytes).digest('hex'),bytes:bytes.length,obtained:'2026-10-03'});
    console.log(filename,bytes.length);
  }
}
await fs.writeFile(path.join(root,'src/scene/natural-assets.json'),JSON.stringify(records,null,2)+'\n');

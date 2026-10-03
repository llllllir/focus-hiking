import fs from 'node:fs';
import path from 'node:path';
const dirs=['docs/acceptance/v-island-upgrade','docs/acceptance/framework-scene-1.0','docs/acceptance/scene-2.0','docs/acceptance/scene-2.0-natural','docs/acceptance/v0.1','public/assets','refs'];
let count=0;
function walk(dir){for(const entry of fs.readdirSync(dir,{withFileTypes:true})){
 const file=path.join(dir,entry.name);if(entry.isDirectory()){walk(file);continue;}
 if(!file.endsWith('.png'))continue;const data=fs.readFileSync(file);
 if(!/C:[\\/]Users[\\/]/i.test(data.toString('utf8')))continue;
 const chunks=[data.subarray(0,8)];let offset=8;
 while(offset<data.length){const length=data.readUInt32BE(offset),end=offset+length+12,type=data.toString('ascii',offset+4,offset+8);if(end>data.length)throw new Error(`Invalid PNG ${file}`);
  if(!['tEXt','iTXt','zTXt'].includes(type))chunks.push(data.subarray(offset,end));offset=end;
 }
 const clean=Buffer.concat(chunks);if(/C:[\\/]Users[\\/]/i.test(clean.toString('utf8')))throw new Error(`Nonmetadata private path ${file}`);
 fs.writeFileSync(file,clean);count++;
}}
dirs.forEach(walk);console.log(`Removed private render metadata from ${count} PNG files; image pixels unchanged`);

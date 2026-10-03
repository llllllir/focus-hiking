import {spawnSync} from 'node:child_process';
import fs from 'node:fs'; import path from 'node:path'; import crypto from 'node:crypto';
const zip='.tools/sapling-0.3.7.zip';
if(crypto.createHash('sha256').update(fs.readFileSync(zip)).digest('hex')!=='27a478262e1c86612a9c3daffe7f4dce2802f5bc2294033462e5adc6d9c0080f') throw Error('Sapling SHA mismatch');
const user=path.resolve('.tools/blender-user');fs.mkdirSync(user,{recursive:true});
const result=spawnSync(path.resolve('.tools/blender/blender-4.5.9-windows-x64/blender.exe'),['--background','--factory-startup','--python-exit-code','1','--python',path.resolve('src/scene/build_forest.py')],{stdio:'inherit',env:{...process.env,BLENDER_USER_CONFIG:user,BLENDER_USER_SCRIPTS:user,BLENDER_USER_DATAFILES:user}});
process.exit(result.status??1);

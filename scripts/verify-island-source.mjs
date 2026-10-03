import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
const root='src/scene/vendor/v-island';
const collect=dir=>fs.readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?collect(path.join(dir,e.name)):[path.join(dir,e.name)]);
const fingerprint=file=>{const bytes=fs.readFileSync(file);return {path:path.relative(root,file).replaceAll('\\','/'),bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')};};
const actual=collect(path.join(root,'engine')).sort().map(fingerprint);
actual.push(fingerprint(path.join(root,'LICENSE-tidewater.txt')));
const manifestPath=path.join(root,'source-manifest.json');
if(process.argv.includes('--record'))fs.writeFileSync(manifestPath,JSON.stringify({repository:'https://github.com/BAP-CAMP/v-island',commit:'ba73c70c3b591b2aca874da40a68cfdd0dfc7ab4',source:'src/engine/',files:actual},null,2)+'\n');
else{
 const expected=JSON.parse(fs.readFileSync(manifestPath,'utf8')).files;
 if(JSON.stringify(expected)!==JSON.stringify(actual))throw Error('Vendored engine fingerprint mismatch');
 console.log(`Verified ${actual.length} engine/license fingerprints.`);
}

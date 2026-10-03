import fs from 'node:fs';
import crypto from 'node:crypto';
const entries=[
 {name:'great-tit',author:'D4XX',id:607242,source:'https://freesound.org/people/D4XX/sounds/607242/'},
 {name:'sparrows',author:'Kimskell',id:628949,source:'https://freesound.org/people/Kimskell/sounds/628949/'},
 {name:'leaf-rustle',author:'giddster',id:437356,source:'https://freesound.org/people/giddster/sounds/437356/'},
 {name:'quiet-stream',author:'kedart',id:433602,source:'https://freesound.org/people/kedart/sounds/433602/'},
 {name:'frog',author:'Benboncan',id:67261,source:'https://freesound.org/people/Benboncan/sounds/67261/',license:'CC-BY-4.0'},
 {name:'peck',author:'johnaudiotech',id:347047,source:'https://freesound.org/people/johnaudiotech/sounds/347047/'},
 {name:'fox',author:'Setzilla',id:173208,source:'https://freesound.org/people/Setzilla/sounds/173208/'},
 {name:'eagle',author:'1888software',id:575525,source:'https://freesound.org/people/1888software/sounds/575525/',identification:'Red-tailed hawk recording; generic raptor reference, not independently verified eagle call'},
];
fs.mkdirSync('public/audio/forest',{recursive:true});
const files=await Promise.all(entries.map(async entry=>{
 const page=await fetch(entry.source);if(!page.ok)throw Error(entry.name+' page '+page.status);const html=await page.text();
 const license=entry.license??'CC0-1.0',licensePath=license==='CC-BY-4.0'?'creativecommons.org/licenses/by/4.0':'creativecommons.org/publicdomain/zero/1.0';
 if(!html.includes(licensePath))throw Error('License not verified: '+entry.name);
 const url=html.match(new RegExp('https://cdn\\.freesound\\.org/previews/[^"\\s]+/'+entry.id+'_[^"\\s]+-hq\\.mp3'))?.[0];
 if(!url)throw Error('Official HQ preview unavailable: '+entry.name);
 const result=await fetch(url);if(!result.ok)throw Error('Audio '+result.status);const bytes=Buffer.from(await result.arrayBuffer());
 if(bytes.length<1000||bytes.length>4000000)throw Error('Unexpected audio size: '+entry.name);
 const file='public/audio/forest/'+entry.name+'.mp3';fs.writeFileSync(file,bytes);
 return {...entry,file,download:url,format:'official HQ MP3 preview',license,bytes:bytes.length,sha256:crypto.createHash('sha256').update(bytes).digest('hex')};
}));
fs.writeFileSync('src/scene/soundscape-assets.json',JSON.stringify({files},null,2)+'\n');
fs.writeFileSync('public/audio/forest/CREDITS.md','# Forest soundscape\n\nOfficial HQ preview files from Freesound. Source titles/recordists describe the species; no independent identification was performed. Runtime uses quiet excerpt playback with fades; source files are unchanged.\n\n'+files.map(f=>`- ${f.name}: ${f.author}, [source](${f.source}), [${f.license}](https://creativecommons.org/${f.license==='CC-BY-4.0'?'licenses/by/4.0/':'publicdomain/zero/1.0/'}), ${f.bytes} bytes.${f.identification?' '+f.identification:''}`).join('\n')+'\n');
console.log(files.map(f=>({name:f.name,bytes:f.bytes,license:f.license})));

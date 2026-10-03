// Blender's FileGlobal stores the save destination even with relative asset paths.
// Replace only this workspace prefix with an equally sized neutral project prefix;
// fixed-size serialized fields and all binary block offsets remain unchanged.
import fs from 'node:fs';
import path from 'node:path';
import os from 'node:os';
const root = process.cwd();
for (const file of ['src/scene/assets/forest.blend', 'assets/wildlife.blend']) {
  const bytes = fs.readFileSync(file);
  let count = 0;
  for (const prefix of [root, root.replaceAll('\\', '/'), os.homedir(), os.homedir().replaceAll('\\', '/')]) {
    const source = Buffer.from(prefix);
    const neutral = Buffer.from('/project'.padEnd(source.length, '_'));
    let at;
    while ((at = bytes.indexOf(source)) >= 0) { neutral.copy(bytes, at); count++; }
  }
  if (/C:[\\/]Users[\\/]/i.test(bytes.toString('utf8'))) throw new Error(`Other private path in ${file}`);
  fs.writeFileSync(path.resolve(file), bytes);
  console.log(`Sanitized ${count} local save paths in ${file}`);
}

import { defineConfig } from 'vite';
import { resolve } from 'node:path';
// Scope the tools exclusion to this project's child directory. A worktree may
// itself live under a parent .tools directory and must still receive updates.
const toolsDir=resolve(process.cwd(),'.tools').replaceAll('\\','/')+'/';
export default defineConfig({
  base: process.env.SITE_BASE || '/',
  optimizeDeps: { include: ['@mediapipe/tasks-vision'] },
  server: { watch: { ignored: [(file:string)=>file.replaceAll('\\','/').startsWith(toolsDir), '**/src/scene/assets/**', '**/docs/acceptance/**'] } },
});

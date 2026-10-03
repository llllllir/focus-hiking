import { defineConfig } from 'vite';
export default defineConfig({
  optimizeDeps: { include: ['@mediapipe/tasks-vision'] },
  server: { watch: { ignored: ['**/.tools/**', '**/src/scene/assets/**', '**/docs/acceptance/**'] } },
});

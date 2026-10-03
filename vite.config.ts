import { defineConfig } from 'vite';
export default defineConfig({
  server: { watch: { ignored: ['**/.tools/**', '**/src/scene/assets/**', '**/docs/acceptance/**'] } },
});

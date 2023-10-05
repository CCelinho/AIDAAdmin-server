import { defineConfig } from 'vite';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: path.join(__dirname, 'build'),
  },
});

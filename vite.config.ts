import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@/pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@/routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: '@/styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@/utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
});

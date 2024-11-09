import react from '@vitejs/plugin-react-swc';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  define: {
    global: 'window', // sockjs-client 라이브러리가 window 객체를 global로 인식하도록 설정
  },
  plugins: [react(), svgr()],
  resolve: {
    alias: [
      { find: '@', replacement: path.resolve(__dirname, 'src') },
      { find: '@/apis', replacement: path.resolve(__dirname, 'src/apis') },
      { find: '@/assets', replacement: path.resolve(__dirname, 'src/assets') },
      { find: '@/components', replacement: path.resolve(__dirname, 'src/components') },
      { find: '@/constants', replacement: path.resolve(__dirname, 'src/constants') },
      { find: '@/hooks', replacement: path.resolve(__dirname, 'src/hooks') },
      { find: '@/pages', replacement: path.resolve(__dirname, 'src/pages') },
      { find: '@/routes', replacement: path.resolve(__dirname, 'src/routes') },
      { find: '@/store', replacement: path.resolve(__dirname, 'src/store') },
      { find: '@/styles', replacement: path.resolve(__dirname, 'src/styles') },
      { find: '@/types', replacement: path.resolve(__dirname, 'src/types') },
      { find: '@/utils', replacement: path.resolve(__dirname, 'src/utils') },
    ],
  },
});

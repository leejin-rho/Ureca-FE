import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      exportAsDefault: true,
      svgrOptions: {
        icon: true,
      },
    }),
  ],
  resolve: {
    alias: [
      { find: '@', replacement: '/src' },
      { find: '@pages', replacement: '/src/pages' },
      { find: '@components', replacement: '/src/components' },
      { find: '@assets', replacement: '/src/assets' },
    ],
  },
  // 로컬 호스트 바깥에서도 접근 가능하도록 설정
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
});

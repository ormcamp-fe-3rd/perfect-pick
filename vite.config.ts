import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  resolve: {
    alias: [{ find: '@', replacement: '/src' }],
  },
  server: {
    proxy: {
      '/api': {
        target: 'https://api.vworld.kr', // 요청할 실제 API 서버 주소
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''), // "/api"를 제거
      },
    },
  },
});

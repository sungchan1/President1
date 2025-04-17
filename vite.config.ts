import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  root: '.', // ✅ 루트 경로 명시 (혹시 누락됐을 경우)
  plugins: [react()],
});

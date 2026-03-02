import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/src/components',
      '@hooks': '/src/hooks',
      '@types': '/src/types',
      '@utils': '/src/utils',
      '@constants': '/src/constants',
      '@assets': '/src/assets',
      '@images': '/src/assets/images',
      '@icons': '/src/assets/icons',
    },
  },
});

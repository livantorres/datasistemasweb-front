/*import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})*/

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';
import viteCompression from 'vite-plugin-compression';
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ['react', 'react-dom'],
          framer: ['framer-motion'],
          icons: ['react-icons'],
        },
      },
    },
  },
  plugins: [
    
    react(),
    viteCompression({
      algorithm: 'gzip', // También puedes usar 'brotliCompress'
      ext: '.gz',       // Extensión para archivos comprimidos
      threshold: 10240, // Comprime archivos mayores a 10KB
      deleteOriginFile: false // No elimina los originales
    }),
    ViteImageOptimizer({
      png: { quality: 70 },
      jpeg: { quality: 70 },
      jpg: { quality: 70 },
      webp: { quality: 70 },
    }),
  ],
});
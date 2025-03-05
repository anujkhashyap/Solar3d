import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: true,
    port: 3000,
  },
  base: '/',
  build: {
    rollupOptions: {
      output: {
        format: 'es',
        entryFileNames: '[name].[hash].js',
        chunkFileNames: '[name].[hash].js',
        assetFileNames: '[name].[hash][extname]',
        manualChunks: {
          'react-three': ['@react-three/fiber', '@react-three/drei'],
          'three': ['three']
        }
      }
    },
    chunkSizeWarningLimit: 1000,
    sourcemap: true
  }
}) 
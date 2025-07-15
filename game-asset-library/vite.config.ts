import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/game-asset-library/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'three-js': ['three', '@react-three/fiber', '@react-three/drei']
        }
      }
    }
  }
})

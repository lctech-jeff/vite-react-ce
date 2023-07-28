import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { fileURLToPath, URL } from 'url'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    devSourcemap: true,
  },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    lib: {
      entry: './src/main.ce.ts',
      name: 'jeff-react-ce',
      fileName: 'jeff-react-ce',
    },
    sourcemap: true,
    minify: false,
  },
  define: {
    'process.env': process.env,
  },
})

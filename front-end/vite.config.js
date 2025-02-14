import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'process.env': {}, // Evita erro "process is not defined" no navegador
    'process.argv': '[]', // Simula process.argv como um array vazio
  },
  build: {
    target: "esnext",
  }
})

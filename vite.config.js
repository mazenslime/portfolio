import path from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { analyzer } from 'vite-bundle-analyzer'

export default defineConfig({
  plugins: [react(), tailwindcss(),analyzer()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

import path from 'node:path'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import { analyzer } from 'vite-bundle-analyzer'
import { defineConfig } from 'vite'
import viteCompression from 'vite-plugin-compression'
export default defineConfig({
  plugins: [react(), tailwindcss(),analyzer(), viteCompression()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
})

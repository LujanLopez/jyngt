// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/jynglobaltrade/',      // 👈 importante para GitHub Pages
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    allowedHosts: true,
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },
  },
})

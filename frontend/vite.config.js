// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,

    // ✅ permite cualquier dominio (ideal para quick tunnels)
    allowedHosts: true,

    // ✅ HMR detrás de HTTPS del túnel
    hmr: {
      protocol: 'wss',
      clientPort: 443,
    },
  },
})

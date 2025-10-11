import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
    server: {
    host: 'localhost',
    port: 5173,
    strictPort: true,
    watch: {
      usePolling: true,
      interval: 100, // check every 100ms for changes
    },
  },
 })

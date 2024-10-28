import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',  // Ensures Vite uses the PostCSS configuration
  },
  server: {
    port: 3000, // You can customize the dev server port here if needed
    open: true, // Opens the browser automatically
  },
})

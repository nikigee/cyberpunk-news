import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/cyberpunk-news/', // Set the base URL to match your GitHub Pages repository
  plugins: [react()],
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages: Set base to your repo name if deploying to username.github.io/repo-name/
  // If deploying to username.github.io (user site), use base: '/'
  base: '/Shrinidhi_portfolio/',
})

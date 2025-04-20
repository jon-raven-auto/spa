import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteSingleFile } from "vite-plugin-singlefile"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), viteSingleFile()],
  base: '/s/spa/', // Match Rewst's path
  build: {
    assetsDir: '.' // Flat structure
  }
})

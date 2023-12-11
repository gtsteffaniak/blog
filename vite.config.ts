import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      // Define your aliases here
      '@js': 'src/js',
      '@comp': 'src/components',
    },
  },
  base: "./",
  plugins: [svelte()],
})

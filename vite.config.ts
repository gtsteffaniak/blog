import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  base: '',
  plugins: [svelte()],
  build: {
    chunkSizeWarningLimit: 2000, // Change this value as needed
  },
});

import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://tu-dominio.com',
  vite: {
    plugins: [tailwindcss()],
  },
});
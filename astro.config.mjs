import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind'; 
import sitemap from '@astrojs/sitemap'; 
import sass from 'sass'; 

export default defineConfig({
  site: 'http://example.com', // Gantilah dengan domain aslimu jika sudah online
  integrations: [tailwind(), sitemap()],
  build: {
    format: 'directory', // Bisa diubah ke 'file' jika ingin output HTML dalam satu folder
  },
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          implementation: sass, // Gunakan `sass` untuk SCSS
        },
      },
    },
  },
  server: {
    port: 3000, // Bisa diubah sesuai kebutuhan
    host: true,
  },
});

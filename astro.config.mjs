import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
// IMPORTANT: Replace 'https://konte.es' with your actual production domain before deploying
export default defineConfig({
  site: 'https://konte.es',
  integrations: [tailwind(), react()]
});

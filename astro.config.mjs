// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://wiederbau.rs',
  integrations: [sitemap()],
  i18n: {
    defaultLocale: 'sr',
    locales: ['sr', 'en', 'hu', 'de'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    plugins: [tailwindcss()],
  },
});

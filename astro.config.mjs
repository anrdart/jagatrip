// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://jagatrip.com',
  output: 'static',
  integrations: [
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'id',
        locales: { id: 'id-ID' },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Plus Jakarta Sans',
      cssVariable: '--font-body',
      weights: [400, 500, 600, 700, 800],
    },
    {
      provider: fontProviders.google(),
      name: 'Fraunces',
      cssVariable: '--font-display',
      weights: [400, 500, 700, 900],
      styles: ['normal', 'italic'],
    },
    {
      provider: fontProviders.google(),
      name: 'JetBrains Mono',
      cssVariable: '--font-mono',
      weights: [400, 500, 700],
    },
  ],
});

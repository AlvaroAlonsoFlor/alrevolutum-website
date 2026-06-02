// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import cloudflare from '@astrojs/cloudflare';

// https://astro.build/config
export default defineConfig({
  site: 'https://alrevolutum.com',
  integrations: [sitemap()],
  build: {
    // hack due to https://github.com/withastro/astro/issues/16919#issuecomment-4601042890
    client: "./",
  },
  adapter: cloudflare({
    imageService: 'compile',
  }),
});
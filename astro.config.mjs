// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import { rehypeHeadingIds, unified } from '@astrojs/markdown-remark';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import cloudflare from '@astrojs/cloudflare';
import { remarkReadingTime } from './src/utils/remark-reading-time';
import rehypeMermaid from "rehype-mermaid";

const linkIcon = {
  type: 'element',
  tagName: 'svg',
  properties: {
    xmlns: 'http://www.w3.org/2000/svg',
    width: 16,
    height: 16,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 2,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    'aria-hidden': 'true',
  },
  children: [
    {
      type: 'element',
      tagName: 'path',
      properties: { d: 'M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71' },
      children: [],
    },
    {
      type: 'element',
      tagName: 'path',
      properties: { d: 'M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71' },
      children: [],
    },
  ],
};

// https://astro.build/config
export default defineConfig({
  site: 'https://alrevolutum.com',
  integrations: [sitemap()],
  markdown: {
    syntaxHighlight: {
      excludeLangs: ['mermaid']
    },
    processor: unified({
      remarkPlugins: [remarkReadingTime],
      rehypePlugins: [
        rehypeHeadingIds,
        [rehypeMermaid, {strategy: 'inline-svg'}],
        [
          rehypeAutolinkHeadings,
          {
            properties: {
              className: ['heading-anchor'],
              ariaLabel: 'Link to this section',
            },
            content: linkIcon,
          },
        ],
      ],
    }),
  },
  build: {
    // hack due to https://github.com/withastro/astro/issues/16919#issuecomment-4601042890
    client: "./",
  },
  adapter: cloudflare({
    imageService: 'compile',
  }),
});
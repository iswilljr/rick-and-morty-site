import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import vercel from '@astrojs/vercel/serverless'
import serviceWorker from 'astrojs-service-worker'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://therickandmortyapi.vercel.app',
  integrations: [mdx(), sitemap(), tailwind(), serviceWorker()],
  output: 'hybrid',
  adapter: vercel({
    edgeMiddleware: true,
    imageService: process.env.VERCEL != null,
    imagesConfig: {
      sizes: [240, 320, 640, 1280],
      domains: ['raw.githubusercontent.com'],
    },
  }),
  markdown: {
    syntaxHighlight: 'prism',
  },
})

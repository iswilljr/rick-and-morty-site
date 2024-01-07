import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import node from '@astrojs/node'
import serviceWorker from 'astrojs-service-worker'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://therickandmortyapi.vercel.app',
  integrations: [mdx(), sitemap(), tailwind(), serviceWorker()],
  output: 'hybrid',
  adapter: node({ mode: 'standalone' }),
  markdown: {
    syntaxHighlight: 'prism',
  },
})

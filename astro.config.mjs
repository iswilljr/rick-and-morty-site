import mdx from '@astrojs/mdx'
import sitemap from '@astrojs/sitemap'
import tailwind from '@astrojs/tailwind'
import { defineConfig } from 'astro/config'

export default defineConfig({
  site: 'https://therickandmortyapi.vercel.app',
  integrations: [mdx(), sitemap(), tailwind()],
  markdown: {
    syntaxHighlight: 'prism',
  },
})

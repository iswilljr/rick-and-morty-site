import rss from '@astrojs/rss'
import { getCollection } from 'astro:content'
import { SITE_TITLE, SITE_DESCRIPTION } from '@/utils/constants'

export async function GET(context) {
  const docs = await getCollection('docs')

  return await rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: docs.map(doc => ({
      ...doc.data,
      pubDate: new Date(),
      link: `/docs/${doc.slug}`,
    })),
  })
}

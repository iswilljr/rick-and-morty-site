import { Slot, component$, useStyles$ } from '@builder.io/qwik'
import { routeLoader$ } from '@builder.io/qwik-city'
import { Navbar } from '~/components/navbar/navbar'
import draculaTheme from 'prism-themes/themes/prism-dracula.min.css?inline'

export const useDocLinks = routeLoader$(() => {
  const createDocLinks = (id: string) => {
    const capitalized = id[0].toUpperCase() + id.slice(1)

    return {
      label: capitalized,
      href: `/docs/${id}`,
      categories: [
        { label: `${capitalized} schema`, href: `#${id}-schema` },
        { label: `Get all ${id}s`, href: `#get-all-${id}s` },
        { label: `Get a single ${id}`, href: `#get-a-single-${id}` },
        { label: `Get multiple ${id}s`, href: `#get-multiple-${id}s` },
        { label: `Filter ${id}s`, href: `#filter-${id}s` },
      ],
    }
  }

  const docLinks = [
    {
      label: 'Introduction',
      href: '/docs/introduction',
      categories: [
        { label: 'REST', href: '#rest' },
        { label: 'GraphQL', href: '#graphql' },
        { label: 'Info and Pagination', href: '#info-and-pagination' },
      ],
    },
    createDocLinks('character'),
    createDocLinks('location'),
    createDocLinks('episode'),
  ]

  return docLinks
})

export default component$(() => {
  useStyles$(draculaTheme)

  return (
    <div class='flex'>
      <aside>
        <Navbar />
      </aside>
      <div class='w-full md:w-[calc(100%-15rem)]'>
        <article class='prose mx-auto my-[60px] w-full max-w-4xl break-words px-3 text-dark-secondary lg:prose-xl prose-headings:-mt-[28px] prose-headings:pt-[84px] prose-headings:font-extrabold prose-h1:mb-0 prose-h1:!pt-0 prose-a:border-b-2 prose-a:border-b-primary prose-a:no-underline prose-a:duration-100 prose-blockquote:border-l-primary prose-blockquote:bg-primary/30 prose-blockquote:py-3 prose-code:rounded prose-code:bg-[#1b1f230d] prose-code:px-2 prose-code:py-1 prose-code:text-[#476582] prose-pre:mb-2 prose-pre:mt-0 prose-th:pt-0 md:px-6 [&_a:hover]:border-b-transparent [&_a:hover]:text-primary [&_blockquote_p::after]:content-none [&_blockquote_p::before]:content-none [&_blockquote_p]:m-0 [&_code::after]:content-none [&_code::before]:content-none [&_li::marker]:text-dark-secondary [&_pre+pre]:!mt-0 [&_pre_code]:text-green-500'>
          <Slot />
        </article>
      </div>
    </div>
  )
})

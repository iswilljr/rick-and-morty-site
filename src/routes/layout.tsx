import { component$, Slot } from '@builder.io/qwik'
import { Footer } from '~/components/footer/footer'
import { Header } from '~/components/header/header'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <>
      <Header />
      <Slot />
      <Footer />
    </>
  )
})

export const head: DocumentHead = {
  title: 'The Rick And Morty API',
  links: [
    { rel: 'icon', href: '/favicon.png', type: 'image/png' },
    { rel: 'apple-touch-icon', sizes: '48x48', href: '/icon-48x48.png' },
    { rel: 'apple-touch-icon', sizes: '72x72', href: '/icon-72x72.png' },
    { rel: 'apple-touch-icon', sizes: '96x96', href: '/icon-96x96.png' },
    { rel: 'apple-touch-icon', sizes: '144x144', href: '/icon-144x144.png' },
    { rel: 'apple-touch-icon', sizes: '192x192', href: '/icon-192x192.png' },
    { rel: 'apple-touch-icon', sizes: '256x256', href: '/icon-256x256.png' },
    { rel: 'apple-touch-icon', sizes: '384x384', href: '/icon-384x384.png' },
    { rel: 'apple-touch-icon', sizes: '512x512', href: '/icon-512x512.png' },
  ],
  meta: [
    {
      name: 'description',
      content: 'The Rick and Morty API is a REST API based on the television show Rick and Morty',
    },
  ],
}

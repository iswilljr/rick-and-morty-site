import { component$ } from '@builder.io/qwik'
import type { DocumentHead } from '@builder.io/qwik-city'

export default component$(() => {
  return (
    <main class='flex h-auto min-h-[calc(100vh-180px)] flex-col items-center justify-center bg-dark p-6 text-center font-black text-white'>
      <h1 class='max-w-2xl text-6xl md:text-7xl'>You you broke the page</h1>
      <h2 class='mt-10 text-5xl md:text-6xl xl:mt-20'>404</h2>
    </main>
  )
})

export const head: DocumentHead = {
  title: 'Oh Jeez Rick!',
}

import { component$ } from '@builder.io/qwik'
import { type DocumentHead, routeLoader$ } from '@builder.io/qwik-city'
import { RANDOM_CHARACTER_URL } from '~/utils/constants'
import { Card } from '~/components/card/card'
import { Hero } from '~/components/icons/hero'
import type { Character } from '~/types/character'

export const useRandomCharacters = routeLoader$(async ({ status, error }) => {
  const res = await fetch(RANDOM_CHARACTER_URL)

  if (!res.ok) {
    throw error(500, 'Server Error')
  }

  const data = await res.json().catch(() => null)

  if (data == null) {
    throw error(500, 'Server Error')
  }

  return data as Character[]
})

export default component$(() => {
  const characters = useRandomCharacters()

  return (
    <>
      <section class='relative flex min-h-[285px] items-center justify-center px-5 py-2 text-center md:h-[50vh]'>
        <h1 class='z-10 text-6xl font-black text-dark md:text-8xl'>The Rick and Morty API</h1>
        <div class='absolute h-full w-full'>
          <Hero />
        </div>
      </section>
      <section class='flex min-h-[calc(50vh-60px)] items-center justify-center bg-section p-6 lg:py-20'>
        <div class='flex max-w-[2000px] flex-wrap items-center justify-center'>
          {characters.value.map(character => (
            <Card key={character.id} {...character} />
          ))}
        </div>
      </section>
    </>
  )
})

export const head: DocumentHead = {
  title: 'The Rick And Morty API',
}

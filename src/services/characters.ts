import type { Character } from '@/types/character'
import { RANDOM_CHARACTER_URL } from '@/utils/constants'

export async function getRandomCharacters() {
  const res = await fetch(RANDOM_CHARACTER_URL)

  if (!res.ok) {
    throw Error('Server Error')
  }

  const data = await res.json()

  if (!Array.isArray(data)) {
    throw Error('Server Error')
  }

  return data as Character[]
}

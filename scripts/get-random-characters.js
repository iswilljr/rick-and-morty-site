/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/no-throw-literal */
/* eslint-disable @typescript-eslint/no-var-requires */

const fs = require('fs')
const path = require('path')

const BASE_URL = 'https://therickandmortyapi.vercel.app/api'
const API_IMAGE_BASE_URL = 'https://therickandmortyapi.vercel.app/api/character/avatar'
const IMAGE_BASE_URL = 'https://raw.githubusercontent.com/iswilljr/rick-and-morty-api/master/src/images'

const request = async path => {
  const res = await fetch(`${BASE_URL}/${path}`)

  if (!res.ok) {
    const err = {
      data: await res.text(),
      url: res.url,
      status: res.status,
      statusText: res.statusText,
    }

    throw err
  }

  return {
    ...res,
    data: await res.json(),
  }
}

const createGetEndpointById = endpoint => {
  return async id => {
    const res = await request(`${endpoint}/${typeof id === 'string' ? id : id.join(',')}`)
    return res.data
  }
}

const getEpisodeById = createGetEndpointById('episode')
const getCharacterById = createGetEndpointById('character')
const getIdFromUrl = url => +(url.split('/')?.at(-1) ?? 1)

const DATA_PATH = path.resolve('.data/random-characters.json')
const CHARACTERS_COUNT = 826
const MAX_CHARACTERS = 6

const getRandomGroupOfCharacters = async () => {
  const charactersToFetch = [...Array(MAX_CHARACTERS)].map(() => Math.floor(Math.random() * CHARACTERS_COUNT))
  const characters = await getCharacterById(charactersToFetch)

  const episodesToFetch = characters.map(character => getIdFromUrl(character.episode[0]))
  const episodes = await getEpisodeById(episodesToFetch)

  const getEpisodeFromUrl = url => {
    const id = getIdFromUrl(url)
    const episode = episodes.find(episode => id === episode.id)

    return episode != null ? { name: episode.name, url: episode.url } : undefined
  }

  return characters.map(character => {
    const { id, name, species, status, location, image, url } = character
    const episode = getEpisodeFromUrl(character.episode[0])

    const characterImage = image.replace(API_IMAGE_BASE_URL, IMAGE_BASE_URL)

    return { id, name, status, species, location, image: characterImage, episode, url }
  })
}

getRandomGroupOfCharacters()
  .then(res => {
    fs.writeFileSync(DATA_PATH, `${JSON.stringify(res, null, 2)}\n`, 'utf-8')
  })
  .catch(err => {
    const info = `GET ${err.url} - ${err.status} ${err.statusText}`
    const message = err.data.replace(/\n+/g, ' ').replace(/\s+$/, '')

    console.error(`${message}. ${info}`)
    process.exit(1)
  })

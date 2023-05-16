type Status = 'Alive' | 'Dead' | 'unknown'

export interface Character {
  id: number
  name: string
  status: Status
  species: string
  location?: Origin
  image: string
  episode?: Origin
  url: string
}

export interface Origin {
  name: string
  url: string
}

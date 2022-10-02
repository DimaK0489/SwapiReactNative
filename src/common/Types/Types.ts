export interface IPeople {
  count: number,
  next: string,
  previous: string,
  results: Array<PeopleResult>
}

export interface PeopleResult {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: Array<string>,
  "species": [],
  "vehicles": Array<string>,
  "starships": Array<string>,
  "created": string,
  "edited": string,
  "url": string
}

export interface IFilms {
  count: number,
  next: string,
  previous: null,
  results: Array<FilmsResult>
}

export interface FilmsResult {
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  characters: Array<string>,
  planets: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
  species: Array<string>,
  created: string,
  edited: string,
  url: string
}

export interface FilmDetails {
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  characters: Array<string>,
  planets: Array<string>,
  starships: Array<string>,
  vehicles: Array<string>,
  species: Array<string>,
  created: string,
  edited: string,
  url: string
}

export interface PersonDetails {
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: Array<string>,
  species: [],
  vehicles: Array<string>,
  starships: Array<string>,
  created: string,
  edited: string,
  url: string
}

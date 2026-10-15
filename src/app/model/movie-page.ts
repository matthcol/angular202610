import { Movie } from "./movie"

export interface MoviePage {
  first: number
  prev: number | null
  next: number | null
  last: number
  pages: number
  items: number
  data: Movie[]
}

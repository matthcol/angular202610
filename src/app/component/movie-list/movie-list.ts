import { Component, signal } from '@angular/core';
import { Movie } from '../../model/movie';
import movies from '../../../data/movies.json'
import { MovieCard2 } from '../movie-card-2/movie-card-2';

@Component({
  imports: [MovieCard2],
  selector: 'app-movie-list',
  styleUrl: './movie-list.css',
  templateUrl: './movie-list.html',
})
export class MovieList {

  // ce composant gère la liste de films
  movieList = signal<Movie[]>(movies);

  addMovie() {
    const newMovie: Movie = {
      id: crypto.randomUUID(),
      title: "New Movie",
      year: (new Date()).getFullYear()
    }
    this.movieList.update(prevMovieList => [newMovie, ...prevMovieList])
  }

  removeMovie(movieId: string){
    this.movieList.update(prevMovieList => prevMovieList.filter(m => m.id !== movieId))
  }

  saveMovie(movieUpdated: Movie){
    this.movieList.update(
        prevMovieList => prevMovieList.map(
            prevMovie => prevMovie.id === movieUpdated.id ? movieUpdated : prevMovie
        )
    )
  }

  // slot reception des signaux 
  onMovieRemoved(movieId: string) {
    console.log("[Movie list] Receive signal movie removed:", movieId)
    this.removeMovie(movieId)
  }

  onMovieEdited(movieForm: Movie) {
    console.log("[Movie list] Receive signal movie edited:", movieForm)
    this.saveMovie(movieForm)
  }
}

import { Component, inject } from '@angular/core';
import { MovieMock } from '../../service/movie-mock';
import { MovieCard2 } from '../movie-card-2/movie-card-2';

@Component({
  imports: [MovieCard2],
  selector: 'app-movie-list-mock',
  styleUrl: './movie-list-mock.css',
  templateUrl: './movie-list-mock.html',
})
export class MovieListMock {

  movieService = inject(MovieMock)

  movies = this.movieService.movies // alias sur le signal
}

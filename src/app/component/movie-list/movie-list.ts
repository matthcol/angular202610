import { Component } from '@angular/core';
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
  movieList: Movie[] = movies;
}

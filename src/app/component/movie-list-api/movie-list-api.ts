import { Component, inject } from '@angular/core';
import { MovieApi } from '../../service/movie-api';
import { MovieCardDetail } from '../movie-card-detail/movie-card-detail';
import { MovieCard2 } from '../movie-card-2/movie-card-2';

@Component({
  imports: [MovieCardDetail, MovieCard2],
  selector: 'app-movie-list-api',
  styleUrl: './movie-list-api.css',
  templateUrl: './movie-list-api.html',
})
export class MovieListApi {
  movieApiService = inject(MovieApi)

}

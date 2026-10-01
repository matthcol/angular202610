import { Component, input } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  imports: [],
  selector: 'app-movie-card-2',
  styleUrl: './movie-card-2.css',
  templateUrl: './movie-card-2.html',
})
export class MovieCard2 {
  movie = input<Movie>({
    id: "000",
    title: "Unknown",
    year: 1900
  })  // donnée issue du parent (ou valeur par défaut)
}

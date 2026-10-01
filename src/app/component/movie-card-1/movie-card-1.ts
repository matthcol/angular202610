import { Component } from '@angular/core';
import { Movie } from '../../model/movie';

@Component({
  imports: [],
  selector: 'app-movie-card-1',
  styleUrl: './movie-card-1.css',
  templateUrl: './movie-card-1.html',
})
export class MovieCard1 {
  movie: Movie = {
    id: "123",
    title: "Toy Story 5",
    year: 2026,
    // posterUrl: "https://media.themoviedb.org/t/p/w440_and_h660_face/b2bt3UomRX41rHHZmIsSNmXzidU.jpg"
  }
}
// 
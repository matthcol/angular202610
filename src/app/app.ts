import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Counter1 } from './component/counter-1/counter-1';
import { Counter2 } from './component/counter-2/counter-2';
import { MovieCard1 } from './component/movie-card-1/movie-card-1';
import { MovieList } from './component/movie-list/movie-list';
import { Navigate } from './component/navigate/navigate';


@Component({
  imports: [RouterOutlet, Counter1, Counter2, MovieCard1, MovieList, Navigate],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('cinema');
}

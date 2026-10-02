import { Component, input, output, signal } from '@angular/core';
import { Movie } from '../../model/movie';
import { SlicePipe, UpperCasePipe } from '@angular/common';

@Component({
  imports: [
    UpperCasePipe,
    SlicePipe
  ],
  selector: 'app-movie-card-detail',
  styleUrl: './movie-card-detail.css',
  templateUrl: './movie-card-detail.html',
})
export class MovieCardDetail {
  displayMode = signal<boolean>(true)

  movie = input<Movie>({
    id: "000",
    title: "Unknown",
    year: 1900
  })  // donnée issue du parent (ou valeur par défaut)

  movieRemoved = output<void>()
  movieEdited = output<Movie>()

  
  handleRemove() {
    console.log("[Movie Card] handle click remove movie", this.movie().id)
    this.movieRemoved.emit()

  }

  handleSave(title: string, year: string, duration: string, posterUrl: string) {
    console.log("[Movie Card] handle click save movie")
    const movieForm: Movie = {
      id: this.movie().id,
      title: title,
      year: +year,
      duration: duration === "" ? undefined : Number.parseInt(duration),
      posterUrl: posterUrl === "" ? undefined : posterUrl 
    }
    console.log("[Movie Card] movir from form:", movieForm)
    this.movieEdited.emit(movieForm)
    this.displayMode.set(true)
  }
}

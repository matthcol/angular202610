import { Component, computed, input, output, signal } from '@angular/core';
import { Movie } from '../../model/movie';
import { DatePipe, DecimalPipe, JsonPipe, LowerCasePipe, PercentPipe, SlicePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import { HourMinutePipePipe } from '../../pipe/hour-minute-pipe-pipe';
import { DatetimeDmyPipe } from '../../pipe/datetime-dmy-pipe';

type HourMinute = {
  hour: number
  minute: number
}

@Component({
  imports: [
    UpperCasePipe,
    LowerCasePipe,
    TitleCasePipe,
    SlicePipe,
    DatePipe,
    JsonPipe,
    PercentPipe,
    DecimalPipe,
    HourMinutePipePipe,
    DatetimeDmyPipe
  ],
  selector: 'app-movie-card-detail',
  styleUrl: './movie-card-detail.css',
  templateUrl: './movie-card-detail.html',
})
export class MovieCardDetail {
  displayMode = signal<boolean>(true)

  movie = input<Movie>({
    id: "000",
    title: "Unknown in the unknown",
    year: 1900,
    duration: 500
  })  // donnée issue du parent (ou valeur par défaut)

  now = new Date()

  movieRemoved = output<void>()
  movieEdited = output<Movie>()

  hourMinute = computed<HourMinute>(() => {
    if (!this.movie().duration) return {hour: 0, minute: 0}
    const hour = Math.floor(this.movie().duration! / 60)
    const minute = this.movie().duration! % 60
    return {hour, minute}
  }) /// analyse auto des dépendances de signaux pour recalculer la formule
  
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

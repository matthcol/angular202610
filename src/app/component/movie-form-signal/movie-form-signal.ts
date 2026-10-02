import { Component, model } from '@angular/core';
import { Movie } from '../../model/movie';
import { form, min, minLength, required, schema, FormRoot, FormField } from '@angular/forms/signals';

@Component({
  imports: [FormRoot, FormField],
  selector: 'app-movie-form-signal',
  styleUrl: './movie-form-signal.css',
  templateUrl: './movie-form-signal.html',
})
export class MovieFormSignal {
  movie = model.required<Movie>()

  signalSchema = schema<Movie>(path => {
    required(path.title, {message: 'Title required'})
    minLength(path.title, 1, {message: 'Title must have 1 character at least'})
    required(path.year, {message: 'Year required'})
    min(path.year, 1888, {message: 'Year invalid (min 1888)'})
  })

  signalForm = form(this.movie, this.signalSchema, {
    submission: {
      action: async () => {
        console.log('movie from form:', this.movie())
        return undefined  // pour gerer l'acuitement du save service
      }
    }
  })  
  
}

import { Component, computed, model } from '@angular/core';
import { Movie } from '../../model/movie';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-movie-form-reactive',
  styleUrl: './movie-form-reactive.css',
  templateUrl: './movie-form-reactive.html',
})
export class MovieFormReactive {

  movie = model.required<Movie>()

  reactiveForm = computed(() => new FormGroup({
    title: new FormControl(
      this.movie().title, {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.minLength(1)
        ]
      }
    ),
    year: new FormControl(  // ou explicite FormControl<number>
      this.movie().year,
      {
        nonNullable: true,
        validators: [
          Validators.required,
          Validators.min(1888),
        ]  
      }
    ),
    // TODO : other fields
  }))

  save() {
    console.log("save movie edited")
    console.log(" - movie draft model:", this.movie())
    console.log(" - partial movie:", this.reactiveForm().getRawValue())
    const movieForm: Partial<Movie> = this.reactiveForm().getRawValue()
    const movieMerged: Movie = {
      ...this.movie(),
      ...movieForm
    }
    console.log(" - movie merged:", movieMerged)
  }

}

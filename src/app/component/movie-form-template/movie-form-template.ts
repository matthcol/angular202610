import { Component, model } from '@angular/core';
import { Movie } from '../../model/movie';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  imports: [
    FormsModule
  ],
  selector: 'app-movie-form-template',
  styleUrl: './movie-form-template.css',
  templateUrl: './movie-form-template.html',
})
export class MovieFormTemplate {

  movie = model.required<Movie>()

  saveMovie(tdForm: NgForm) {
    if (tdForm.invalid) return;
    console.log(tdForm)
    // TODO: remonter l'objet à sauver
  }
}

import { Service, signal } from '@angular/core';
import moviesInit from '../../data/movies.json' 
import { Movie } from '../model/movie';


@Service()   // ou @Injectable({ providedIn: 'root'})
export class MovieMock {

    movies = signal<Movie[]>(moviesInit)

    getMovie(movieId: string): Movie | undefined {
        return this.movies()
            .find(m => m.id === movieId)
    }

}

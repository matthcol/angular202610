import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Service, signal } from '@angular/core';
import { MoviePage } from '../model/movie-page';
import { MovieQueryParam } from '../model/movie-query-param';
import { environment } from '../../environments/environment';
import { Movie } from '../model/movie';


// note : page
// <
//   "first": 1,
//   "prev": 4,
//   "next": 6,
//   "last": 30,
//   "pages": 30,
//   "items": 300,
//   "data": [
//     {
//       "id": "9966",
//       "title": "Broken Ocean: The Awakening",
//       "year": 1963,
//       "duration": 148,
//       "posterUrl": "https://picsum.photos/seed/movie-9966/300/450"
//     },

const API_URL = `${environment.apiUrl}/movies`

const DEFAULT_QUERY_PARAM: MovieQueryParam = {
    page: 1,
    pageSize: 10
}

@Service()
export class MovieApi {

    // POST/PUT/PATCH/DELETE (GET fait httpResource)
    private httpClient = inject(HttpClient)

    queryParams = signal<MovieQueryParam>({...DEFAULT_QUERY_PARAM})
    
    // Note: angular 22 resources : resource, rxResource, httpResource
    // Note 2: httpResource pour GET only
    // Signaux fournis par httpResource:
    //  - value() : response body en JSON 
    //  - headers() : response header
    //  - status()
    //  - error()
    //  - isLoading() + progress()
    private pageResource = httpResource<MoviePage>(
        () => ({
            url: API_URL,
            params: {
                _page: this.queryParams().page,  
                _per_page: this.queryParams().pageSize 
            }
        }),
        {
            defaultValue: {
                first: 1,
                last: 1,
                next: null,
                prev: null,
                pages: 1,
                items: 0,
                data: []
            }
        }
    ) 


    // page response en entier
    moviePage = computed(() =>  this.pageResource.value())  // ou + simplement  = this.pageResource.value

    // decomposition de la response en plusieurs valeurs computed
    moviePageData = computed(() => this.pageResource.value().data)

    totalPages = computed(() => this.pageResource.value().pages)
    totalMovies = computed(() => this.pageResource.value().items)

    isLoading = this.pageResource.isLoading // isLoading est signal

    // CRUD avec httpClient
    updateMovie(movie: Movie) {
        this.httpClient.put<Movie>(`${API_URL}/${movie.id}`, movie)
            // traiter l'observable: subscribe, pipe, switchMap, ...
            .subscribe(() => this.pageResource.reload())
    }

}

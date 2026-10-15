import { HttpClient, httpResource } from '@angular/common/http';
import { computed, inject, Service } from '@angular/core';
import { MoviePage } from '../model/movie-page';


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

@Service()
export class MovieApi {

    // POST/PUT/PATCH/DELETE (GET fait httpResource)
    private httpClient = inject(HttpClient)

    // Note: angular 22 resources : resource, rxResource, httpResource
    private pageResource = httpResource<MoviePage>(
        () => ({
            url: 'http://localhost:3000/movies',
            params: {
                _page: 1,  // TODO: signal
                _per_page: 10  // TODO: signal
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
    ) // anu

    // page response en entier
    moviePage = computed(() =>  this.pageResource.value())

    // decomposition de la response en plusieurs valeurs computed
    moviePageData = computed(() => this.pageResource.value().data)

    totalPages = computed(() => this.pageResource.value().pages)
    totalMovies = computed(() => this.pageResource.value().items)
}

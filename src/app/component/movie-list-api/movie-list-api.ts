import { Component, computed, inject } from '@angular/core';
import { MovieApi } from '../../service/movie-api';
import { MovieCard2 } from '../movie-card-2/movie-card-2';
import { Movie } from '../../model/movie';
import { OutputEdition } from '../../directive/output-edition';

@Component({
  imports: [MovieCard2, OutputEdition],
  selector: 'app-movie-list-api',
  styleUrl: './movie-list-api.css',
  templateUrl: './movie-list-api.html',
})
export class MovieListApi {

  movieApiService = inject(MovieApi)

  // settings pour la navigation
  readonly maxPageButtons = 10
  readonly pageSizeOptions = [10, 25, 50]

  pageNumbers = computed(() => {
    const total = this.movieApiService.totalPages()
    const current = this.movieApiService.currentPage()
    let start = Math.max(1, current - Math.floor(this.maxPageButtons / 2))
    let end = Math.min(total, start + this.maxPageButtons - 1)
    start = Math.max(1, end - this.maxPageButtons + 1)

    const pages: number[] = []
    for (let page = start; page <= end; page++) pages.push(page)
    return pages
  })

  onPageSizeChange(event: Event) {
    const pageSize = +(event.target as HTMLSelectElement).value
    this.movieApiService.setQuery({ pageSize, page: 1 })
  }

  onPrevPage() {
    this.movieApiService.prevPage()
  }

  onNextPage() {
    this.movieApiService.nextPage()
  }

  onGoPage(page: number) {
    this.movieApiService.goPage(page)
  }

  onMovieEdited(movieEdited: Movie) {
    this.movieApiService.updateMovie(movieEdited)
  }

  onMovieRemoved(movieId: string) {
    // TODO: call API
    console.log("movie removed: soon implemented", movieId)
  }

  // Demo directive : OutputEdition
  onDemoRemoved(movie: Movie) {
    console.log("[OutputEdition demo] appOutputEditionRem reçu pour", movie.id)
  }

  onDemoEdited(movie: Movie) {
    console.log("[OutputEdition demo] edited reçu pour", movie.id)
  }


}

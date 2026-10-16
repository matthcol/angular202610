import { TestBed } from '@angular/core/testing';
import { MovieApi } from './movie-api';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { MoviePage } from '../model/movie-page';

const API_URL = `${environment.apiUrl}/movies`

// page 1 : 10 films (= pageSize par defaut), il existe une page suivante (items répartis sur 2 pages)
const PAGE_1_RESPONSE: MoviePage = {
  first: 1,
  prev: null,
  next: 2,
  last: 2,
  pages: 2,
  items: 12,
  data: [
    { id: "m101", title: "The Odyssey", year: 2026, duration: 192, posterUrl: "odyssey.jpg" },
    { id: "m102", title: "Spider-Man: Brand New Day", year: 2026, duration: 130, posterUrl: "spiderman.jpg" },
    { id: "m103", title: "Dune: Part Three", year: 2026, duration: 155, posterUrl: "dune3.jpg" },
    { id: "m104", title: "Toy Story 5", year: 2026, duration: 100, posterUrl: "toystory5.jpg" },
    { id: "m105", title: "Mission Impossible: Legacy", year: 2026, duration: 148, posterUrl: "mi-legacy.jpg" },
    { id: "m106", title: "The Batman Part II", year: 2026, duration: 176, posterUrl: "batman2.jpg" },
    { id: "m107", title: "Shrek 5", year: 2026, duration: 94, posterUrl: "shrek5.jpg" },
    { id: "m108", title: "Supergirl: Woman of Tomorrow", year: 2026, duration: 142, posterUrl: "supergirl.jpg" },
    { id: "m109", title: "Zootopia 2", year: 2026, duration: 108, posterUrl: "zootopia2.jpg" },
    { id: "m110", title: "Project Hail Mary", year: 2026, duration: 134, posterUrl: "hailmary.jpg" },
  ]
}

// page 2 : 2 films, derniere page
const PAGE_2_RESPONSE: MoviePage = {
  first: 1,
  prev: 1,
  next: null,
  last: 2,
  pages: 2,
  items: 12,
  data: [
    { id: "m111", title: "Avatar 4", year: 2026, duration: 190, posterUrl: "avatar4.jpg" },
    { id: "m112", title: "Zootopia 3", year: 2026, duration: 108, posterUrl: "zootopia3.jpg" },
  ]
}

describe('MovieApi', () => {
  let service: MovieApi;
  let httpMock: HttpTestingController

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        provideHttpClient(), 
        provideHttpClientTesting()
      ]
    });
    service = TestBed.inject(MovieApi)
    httpMock = TestBed.inject(HttpTestingController)
  });

  afterEach(() => httpMock.verify())

  // test de la requete initiale : query params envoyes + toutes les donnees (page + films) recues
  it('1st GET at startup', async () => {
    const mockRequest = await vi.waitFor(
        () => httpMock.expectOne(
            (request) => request.url == API_URL
        )
    )

    // Verify the HTTP dialog has been done for the 1st page
    expect(mockRequest.request.method).toBe('GET')
    expect(mockRequest.request.params.get('_page')).toBe('1')
    expect(mockRequest.request.params.get('_per_page')).toBe('10')

    // mock the HTTP response
    mockRequest.flush(PAGE_1_RESPONSE)

    // attente du chargement de la response
    await vi.waitFor(
        () => expect(service.isLoading()).toBe(false)
    )

    // Verify that response has well filled the signal
    // - page description
    expect(service.moviePage().first).toBe(1)
    expect(service.moviePage().prev).toBeNull()
    expect(service.moviePage().next).toBe(2)
    expect(service.moviePage().last).toBe(2)
    expect(service.totalPages()).toBe(2)
    expect(service.totalMovies()).toBe(12)
    expect(service.hasPrevPage()).toBe(false)
    expect(service.hasNextPage()).toBe(true)
    expect(service.currentPage()).toBe(1)
    expect(service.pageSize()).toBe(10)
    // - page content
    expect(service.moviePageData()).toHaveLength(10)
    expect(service.moviePageData()).toEqual(PAGE_1_RESPONSE.data)
  })

  // test du changement de page : requete rejouee avec une nouvelle query, nouvelles donnees recues
  it('2nd GET when queryParams signal changed', async () => {
    // 1er appel au demarrage (page 1 par defaut) : 10 films
    const firstRequest = await vi.waitFor(
        () => httpMock.expectOne(
            (request) => request.url == API_URL
        )
    )
    expect(firstRequest.request.params.get('_page')).toBe('1')
    firstRequest.flush(PAGE_1_RESPONSE)

    await vi.waitFor(
        () => expect(service.isLoading()).toBe(false)
    )
    // verify only it's the 1s page
    expect(service.currentPage()).toBe(1)
    expect(service.moviePageData()).toHaveLength(10)
    

    // trigger changement de page: signal queryParams -> page 2
    service.goPage(2)

    // verify HTTP query has been done
    const secondRequest = await vi.waitFor(
        () => httpMock.expectOne(
            (request) => request.url == API_URL && request.params.get('_page') == '2'
        )
    )
    expect(secondRequest.request.params.get('_page')).toBe('2')
    expect(secondRequest.request.params.get('_per_page')).toBe('10')

    // mock response for 2nd page
    secondRequest.flush(PAGE_2_RESPONSE)

    // verify mock response fills the signal
    await vi.waitFor(
      () => expect(service.isLoading()).toBe(false)
    )
    expect(service.moviePageData()).toHaveLength(2)
    expect(service.currentPage()).toBe(2)
    expect(service.hasPrevPage()).toBe(true)
    expect(service.hasNextPage()).toBe(false)
    expect(service.moviePageData()).toEqual(PAGE_2_RESPONSE.data)
  })

});

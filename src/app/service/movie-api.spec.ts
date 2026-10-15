import { TestBed } from '@angular/core/testing';
import { MovieApi } from './movie-api';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { provideHttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';

const API_URL = `${environment.apiUrl}/movies`

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

  it('1st GET at startup', async () => {
    const mockRequest = await vi.waitFor(
        () => httpMock.expectOne(
            (request) => request.url == API_URL  // + quary param initiaux + method GET
        )
    )
    mockRequest.flush({
      items: 2, // TODO: page header
      data: [
        {id: "m123", title: "The Odyssey", year: 2026},
        {id: "m456", title: "Spider-Man: Brand New Day ", year: 2026},
      ] 
    })

    await vi.waitFor(
        () => expect(service.moviePage().items).toBe(2)
    )
    expect(service.moviePageData()).toHaveLength(2)  // TODO: other page headers
    expect(service.moviePageData()[0].title).toBe('The Odyssey')  // TODO: other fields
    expect(service.isLoading()).toBe(false)
  })

  // test si signal query changed (page ou pageSize)
  it('2nd GET when queryParams signal changed', async () => {
    // 1er appel au demarrage (page 1 par defaut)
    const firstRequest = await vi.waitFor(
        () => httpMock.expectOne(
            (request) => request.url == API_URL
        )
    )
    firstRequest.flush({
      items: 2,
      data: [
        {id: "m123", title: "The Odyssey", year: 2026},
        {id: "m456", title: "Spider-Man: Brand New Day ", year: 2026},
      ]
    })

    await vi.waitFor(
        () => expect(service.isLoading()).toBe(false)
    )

    // changement du signal queryParams -> page 2
    service.queryParams.set({ page: 2, pageSize: 10 })

    const secondRequest = await vi.waitFor(
        () => httpMock.expectOne(
            (request) => request.url == API_URL && request.params.get('_page') == '2'
        )
    )
    secondRequest.flush({
      items: 1,
      data: [
        {id: "m789", title: "Dune: Part Three", year: 2026},
      ]
    })

    await vi.waitFor(
        () => expect(service.moviePageData()).toHaveLength(1)
    )
    expect(service.moviePageData()[0].title).toBe('Dune: Part Three')
    expect(service.isLoading()).toBe(false)
  })

});

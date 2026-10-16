import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { provideHttpClient } from '@angular/common/http';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { MovieListApi } from './movie-list-api';

describe('MovieListApi', () => {
  let component: MovieListApi;
  let fixture: ComponentFixture<MovieListApi>;
  let httpMock: HttpTestingController;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListApi],
      providers: [
        provideRouter([]),
        provideHttpClient(),
        provideHttpClientTesting(),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListApi);
    component = fixture.componentInstance;
    httpMock = TestBed.inject(HttpTestingController);

    // httpResource declenche un GET au demarrage : il faut le flusher,
    // sinon whenStable() attend indefiniment la fin de la requete en cours
    const request = await vi.waitFor(() => httpMock.expectOne(() => true));
    request.flush({ first: 1, prev: null, next: null, last: 1, pages: 1, items: 0, data: [] });

    await fixture.whenStable();
  });

  afterEach(() => httpMock.verify());

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

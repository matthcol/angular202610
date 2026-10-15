import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListApi } from './movie-list-api';

describe('MovieListApi', () => {
  let component: MovieListApi;
  let fixture: ComponentFixture<MovieListApi>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListApi],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListApi);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCard2 } from './movie-card-2';

describe('MovieCard2', () => {
  let component: MovieCard2;
  let fixture: ComponentFixture<MovieCard2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCard2],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCard2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

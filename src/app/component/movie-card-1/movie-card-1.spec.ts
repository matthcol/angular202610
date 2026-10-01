import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCard1 } from './movie-card-1';

describe('MovieCard1', () => {
  let component: MovieCard1;
  let fixture: ComponentFixture<MovieCard1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCard1],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCard1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

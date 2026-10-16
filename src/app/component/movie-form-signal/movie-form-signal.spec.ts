import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieFormSignal } from './movie-form-signal';
import { Movie } from '../../model/movie';

describe('MovieFormSignal', () => {
  let component: MovieFormSignal;
  let fixture: ComponentFixture<MovieFormSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFormSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieFormSignal);
    component = fixture.componentInstance;

    // movie est un model() required : doit etre fourni avant le 1er rendu
    const movie: Movie = { id: '42', title: 'Inception', year: 2010, duration: 148 };
    fixture.componentRef.setInput('movie', movie);

    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

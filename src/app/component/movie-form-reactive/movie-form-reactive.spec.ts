import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieFormReactive } from './movie-form-reactive';
import { Movie } from '../../model/movie';

describe('MovieFormReactive', () => {
  let component: MovieFormReactive;
  let fixture: ComponentFixture<MovieFormReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFormReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieFormReactive);
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

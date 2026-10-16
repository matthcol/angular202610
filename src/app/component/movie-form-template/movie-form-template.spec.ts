import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieFormTemplate } from './movie-form-template';
import { Movie } from '../../model/movie';

describe('MovieFormTemplate', () => {
  let component: MovieFormTemplate;
  let fixture: ComponentFixture<MovieFormTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFormTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieFormTemplate);
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

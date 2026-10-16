import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter } from '@angular/router';
import { MovieCard2 } from './movie-card-2';
import { Movie } from '../../model/movie';

describe('MovieCard2', () => {
  let component: MovieCard2;
  let fixture: ComponentFixture<MovieCard2>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCard2],
      providers: [provideRouter([])],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCard2);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('edit passe en mode formulaire', () => {
    const movie: Movie = {
      id: '42',
      title: 'Inception',
      year: 2010,
      duration: 148,
      posterUrl: 'inception.jpg',
    };
    fixture.componentRef.setInput('movie', movie);
    fixture.detectChanges();

    // trigger: clique sur le bouton Edit
    const editButton: HTMLButtonElement = fixture.nativeElement.querySelector('button');
    editButton.click();
    fixture.detectChanges();

    // effet attendu sur le DOM: bascule sur le formulaire
    expect(component.displayMode()).toBe(false);

    // les champs du formulaire sont preremplis avec les champs du movie
    const inputs: NodeListOf<HTMLInputElement> = fixture.nativeElement.querySelectorAll('input');
    expect(inputs.length).toBe(4);
    const [titleInput, yearInput, durationInput, posterUrlInput] = inputs;
    expect(titleInput.value).toBe(movie.title);
    expect(yearInput.value).toBe(String(movie.year));
    expect(durationInput.value).toBe(String(movie.duration));
    expect(posterUrlInput.value).toBe(movie.posterUrl);
  })
});

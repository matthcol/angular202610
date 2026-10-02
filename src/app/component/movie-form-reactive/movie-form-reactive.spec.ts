import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieFormReactive } from './movie-form-reactive';

describe('MovieFormReactive', () => {
  let component: MovieFormReactive;
  let fixture: ComponentFixture<MovieFormReactive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFormReactive],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieFormReactive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

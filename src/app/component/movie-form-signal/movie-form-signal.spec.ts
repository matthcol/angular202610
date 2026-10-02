import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieFormSignal } from './movie-form-signal';

describe('MovieFormSignal', () => {
  let component: MovieFormSignal;
  let fixture: ComponentFixture<MovieFormSignal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFormSignal],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieFormSignal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

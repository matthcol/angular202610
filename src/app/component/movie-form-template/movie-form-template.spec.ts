import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieFormTemplate } from './movie-form-template';

describe('MovieFormTemplate', () => {
  let component: MovieFormTemplate;
  let fixture: ComponentFixture<MovieFormTemplate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieFormTemplate],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieFormTemplate);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

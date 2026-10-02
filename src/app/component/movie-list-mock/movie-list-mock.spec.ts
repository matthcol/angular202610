import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieListMock } from './movie-list-mock';

describe('MovieListMock', () => {
  let component: MovieListMock;
  let fixture: ComponentFixture<MovieListMock>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieListMock],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieListMock);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

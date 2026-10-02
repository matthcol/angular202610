import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MovieCardDetail } from './movie-card-detail';

describe('MovieCardDetail', () => {
  let component: MovieCardDetail;
  let fixture: ComponentFixture<MovieCardDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieCardDetail],
    }).compileComponents();

    fixture = TestBed.createComponent(MovieCardDetail);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

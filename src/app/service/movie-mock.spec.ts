import { TestBed } from '@angular/core/testing';
import { MovieMock } from './movie-mock';

describe('MovieMock', () => {
  let service: MovieMock;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MovieMock);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

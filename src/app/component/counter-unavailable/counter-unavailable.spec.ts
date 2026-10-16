import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CounterUnavailable } from './counter-unavailable';

describe('CounterUnavailable', () => {
  let component: CounterUnavailable;
  let fixture: ComponentFixture<CounterUnavailable>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CounterUnavailable],
    }).compileComponents();

    fixture = TestBed.createComponent(CounterUnavailable);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

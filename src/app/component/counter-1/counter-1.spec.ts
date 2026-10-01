import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Counter1 } from './counter-1';

describe('Counter1', () => {
  let component: Counter1;
  let fixture: ComponentFixture<Counter1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Counter1],
    }).compileComponents();

    fixture = TestBed.createComponent(Counter1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

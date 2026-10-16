import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';
import { randomGuardGuard } from './random-guard-guard';

describe('randomGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) =>
    TestBed.runInInjectionContext(() => randomGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

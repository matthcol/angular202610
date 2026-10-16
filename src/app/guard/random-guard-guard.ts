import { CanActivateFn } from '@angular/router';

export const randomGuardGuard: CanActivateFn = (route, state) => {
  const d = new Date()
  return (d.getSeconds() % 2) == 0;
};

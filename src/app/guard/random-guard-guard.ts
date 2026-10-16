import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const randomGuardGuard: CanActivateFn = (route, state) => {
  const d = new Date()
  const active = (d.getSeconds() % 2) == 0;
  return active  // NB: si false, navigation annulée silencieusement
    // en renvoyant un UrlTree on fait une redirection
    || inject(Router).createUrlTree(['/counter-unavailable']);
};

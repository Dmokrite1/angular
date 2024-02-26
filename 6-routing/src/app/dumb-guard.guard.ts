import { CanActivateFn } from '@angular/router';

export const dumbGuardGuard: CanActivateFn = (route, state) => {
  // const userservice = inject userService
  // si c'est vrai la route est accessible = localhost:4200/other et si c'est faux la page renvoi vers localhost:4200 
  return true;
};

import { CanActivateFn } from '@angular/router';

export const isEvenMinuteGuard: CanActivateFn = (route, state) => {
  const minute = new Date().getMinutes();
  if (minute % 2 === 0) {
    return true
  } else {
    return false
  }
};

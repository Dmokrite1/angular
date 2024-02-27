import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isEvenMinuteGuard } from './is-even-minute.guard';

describe('isEvenMinuteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isEvenMinuteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

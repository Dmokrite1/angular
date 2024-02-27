import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { isOddMinuteGuard } from './is-odd-minute.guard';

describe('isOddMinuteGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => isOddMinuteGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

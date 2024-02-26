import { TestBed } from '@angular/core/testing';
import { CanActivateFn } from '@angular/router';

import { dumbGuardGuard } from './dumb-guard.guard';

describe('dumbGuardGuard', () => {
  const executeGuard: CanActivateFn = (...guardParameters) => 
      TestBed.runInInjectionContext(() => dumbGuardGuard(...guardParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeGuard).toBeTruthy();
  });
});

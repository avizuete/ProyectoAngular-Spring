import { TestBed, async, inject } from '@angular/core/testing';

import { NegocioGuardGuard } from './negocio-guard.guard';

describe('NegocioGuardGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [NegocioGuardGuard]
    });
  });

  it('should ...', inject([NegocioGuardGuard], (guard: NegocioGuardGuard) => {
    expect(guard).toBeTruthy();
  }));
});

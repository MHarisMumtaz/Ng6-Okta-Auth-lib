import { TestBed, async, inject } from '@angular/core/testing';

import { Ng6OktaAuthGuard } from './ng6-okta-auth.guard';

describe('Ng6OktaAuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng6OktaAuthGuard]
    });
  });

  it('should ...', inject([Ng6OktaAuthGuard], (guard: Ng6OktaAuthGuard) => {
    expect(guard).toBeTruthy();
  }));
});

import { TestBed, inject } from '@angular/core/testing';

import { Ng6OktaAuthService } from './ng6-okta-auth.service';

describe('Ng6OktaAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng6OktaAuthService]
    });
  });

  it('should be created', inject([Ng6OktaAuthService], (service: Ng6OktaAuthService) => {
    expect(service).toBeTruthy();
  }));
});

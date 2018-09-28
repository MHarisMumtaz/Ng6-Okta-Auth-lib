import { TestBed, inject } from '@angular/core/testing';

import { Ng6OktaTokenService } from './ng6-okta-token.service';

describe('Ng6OktaTokenService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Ng6OktaTokenService]
    });
  });

  it('should be created', inject([Ng6OktaTokenService], (service: Ng6OktaTokenService) => {
    expect(service).toBeTruthy();
  }));
});

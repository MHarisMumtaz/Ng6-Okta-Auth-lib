import { Component } from '@angular/core';
import { NgxOktaAuthService } from '../ngx-okta-auth.service';

@Component({
  selector: 'enl-ngx-okta-callback',
  templateUrl: './ngx-okta-callback.component.html'
})
export class NgxOktaCallbackComponent {

  constructor(private okta : NgxOktaAuthService) { 
  	// Handles the response from Okta and parses tokens
    okta.handleAuthentication();
  }
}

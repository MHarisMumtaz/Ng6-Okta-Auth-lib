import { Component } from '@angular/core';
import { Ng6OktaAuthService } from '../ng6-okta-auth.service';

@Component({
  selector: 'enl-ng6-okta-callback',
  templateUrl: './ng6-okta-callback.component.html',
  styleUrls: ['./ng6-okta-callback.component.css']
})
export class Ng6OktaCallbackComponent {

  constructor(private okta : Ng6OktaAuthService) { 
  	// Handles the response from Okta and parses tokens
    okta.handleAuthentication();
  }
}

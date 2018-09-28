import { Component } from '@angular/core';
import { Ng6OktaAuthService,Ng6OktaTokenService } from 'ng6-okta-auth-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private oktaService:Ng6OktaAuthService,private tokenService:Ng6OktaTokenService){
  	 console.log(this.tokenService.hasToken());
  }
}

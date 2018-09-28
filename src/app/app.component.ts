import { Component } from '@angular/core';
import { NgxOktaAuthService,NgxOktaTokenService } from 'ngx-okta-auth-lib';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  constructor(private oktaService:NgxOktaAuthService,private tokenService:NgxOktaTokenService){
  	 console.log(this.tokenService.hasToken());
  }
}

import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { NgxOktaAuthService } from './ngx-okta-auth.service';
import { NgxOktaTokenService } from './ngx-okta-token.service';

@Injectable({
  providedIn: 'root'
})
export class NgxOktaAuthGuard implements CanActivate {
  
  private _oktaAuth;
  private _authenticated;

  constructor(private okta: NgxOktaAuthService,private oktaTokenService:NgxOktaTokenService, private router: Router) {
      this._authenticated = this.oktaTokenService.hasToken();
      this._oktaAuth = this.okta;
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      console.log("isAuthenticated: "+this._authenticated);
      if (this._authenticated) { return true; }
    	// Redirect to login flow.
	    this._oktaAuth.login();
	    return false;
  }
}

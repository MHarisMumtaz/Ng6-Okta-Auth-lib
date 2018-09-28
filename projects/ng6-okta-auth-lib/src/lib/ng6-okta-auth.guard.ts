import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Ng6OktaAuthService } from './ng6-okta-auth.service';
import { Ng6OktaTokenService } from './ng6-okta-token.service';

@Injectable({
  providedIn: 'root'
})
export class Ng6OktaAuthGuard implements CanActivate {
  
  private _oktaAuth;
  private _authenticated;

  constructor(private okta: Ng6OktaAuthService,private oktaTokenService:Ng6OktaTokenService, private router: Router) {
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

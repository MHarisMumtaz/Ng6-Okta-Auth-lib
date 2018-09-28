import { Injectable,Optional } from '@angular/core';
import * as OktaAuth from '@okta/okta-auth-js';
import {Observable,Subject} from 'rxjs';
import {OIDCConfig} from './oidcConfig';
@Injectable({
  providedIn: 'root'
})
export class Ng6OktaAuthService {

  private _oidc : OIDCConfig;
  private _oktaAuth;
  private _storageSub = new Subject<any>();
  
  constructor(@Optional() config: OIDCConfig) {
    if (config) { 
      this._oidc = config;
      this.initOktaConfig(this._oidc);
    }
  }

  public get getOidc() : OIDCConfig {
  	return this._oidc;
  }

  public initOktaConfig(oidcObj){
  	this._oidc = oidcObj;
  	this._oktaAuth = new OktaAuth(oidcObj);
  }

  public isAuthenticated() :boolean {
  	if(!this._oktaAuth) {
  		throw "FROM ISAUTH:-> Oidc object not set";
  	}
    // Checks if there is a current accessToken in the TokenManger.
    let token = this._oktaAuth.tokenManager.get('accessToken');
    console.log(token);
    return !!token;
  }

  public watchAuthentication(): Observable<any> {
    return this._storageSub.asObservable();
  }

  public async handleAuthentication() {
  	if(!this._oktaAuth) {
  		throw "FROM HANDLEAUTH:-> Oidc object not set";
  	}
    try{
        const tokens = await this._oktaAuth.token.parseFromUrl();
        tokens.forEach(token => {
          if (token.idToken) {
            this._oktaAuth.tokenManager.add('idToken', token);
            this._storageSub.next({
              isAuth : this.isAuthenticated()
            });
          }
          if (token.accessToken) {
            this._oktaAuth.tokenManager.add('accessToken', token);
            this._storageSub.next({
              isAuth : this.isAuthenticated()
            });
          }
        });
    }catch(e){
      switch (e.errorCode) {
        case "access_denied":
          this._storageSub.next({
            isAuth : false,
            isAccessDenied : true,
            isInternalError : false 
          });
          console.error(e);
        break;
        case "INTERNAL":
          this._storageSub.next({
            isAuth : false,
            isAccessDenied : false,
            isInternalError : true
          });
          console.error(e);
         break;
        default:
        	console.error(e);
          // throw e;
        break;
      }
    }
  }

  public login() {
  	if(!this._oktaAuth) {
  		throw "FROM LOGIN:-> Oidc object not set";
  	}
    // Launches the login redirect.
    this._oktaAuth.token.getWithRedirect({
      responseType: ['id_token', 'token'],
      scopes: ['openid', 'email', 'profile']
    });
  }

  public async logout() {
  	if(!this._oktaAuth) {
  		throw "FROM LOGOUT:-> Oidc object not set";
  	}
    this._oktaAuth.tokenManager.clear();
    await this._oktaAuth.signOut();
  }
}

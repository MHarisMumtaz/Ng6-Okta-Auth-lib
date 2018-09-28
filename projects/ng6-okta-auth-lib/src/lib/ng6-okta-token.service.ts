import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Ng6OktaTokenService {

  public getClaims(){
    return this.getLocalTokenObject().idToken.claims;
  }

  public getOktaToken(){
    return this.getLocalTokenObject().accessToken.accessToken;
  }

  public getLocalTokenObject(){
      return JSON.parse(localStorage.getItem("okta-token-storage"));
  }

  public hasToken() : boolean {
    let tokenObj = this.getLocalTokenObject();
    if(tokenObj && Object.keys(tokenObj).length>0){
      return true;
    }
    return false;
  }
  
  public getExpireDate(){
  	let tokenObj = this.getLocalTokenObject();
  	if(this.hasToken()){
  		return (tokenObj.accessToken.expiresAt * 1000);
  	}else{
  		throw "Token doesn't exist"
  	}
  }

}

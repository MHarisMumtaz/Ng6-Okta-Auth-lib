import { NgModule,ModuleWithProviders } from '@angular/core';
import { Ng6OktaAuthLibComponent } from './ng6-okta-auth-lib.component';
import { Ng6OktaAuthService } from './ng6-okta-auth.service';
import { Ng6OktaTokenService } from './ng6-okta-token.service';
import { Ng6OktaCallbackComponent } from './ng6-okta-callback/ng6-okta-callback.component';
import { OIDCConfig } from './oidcConfig';

@NgModule({
  imports: [
  ],
  providers: [Ng6OktaTokenService],
  declarations: [Ng6OktaAuthLibComponent, Ng6OktaCallbackComponent],
  exports: [Ng6OktaAuthLibComponent]
})
export class Ng6OktaAuthLibModule {

  public static forRoot(config: OIDCConfig): ModuleWithProviders {
    return {
	    ngModule  : Ng6OktaAuthLibModule,
	    providers : [
	      {provide: OIDCConfig, useValue: config }
	    ]
  	};
  }

}

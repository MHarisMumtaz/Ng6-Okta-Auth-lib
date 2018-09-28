import { NgModule,ModuleWithProviders } from '@angular/core';
import { NgxOktaAuthLibComponent } from './ngx-okta-auth-lib.component';
import { NgxOktaAuthService } from './ngx-okta-auth.service';
import { NgxOktaTokenService } from './ngx-okta-token.service';
import { NgxOktaCallbackComponent } from './ngx-okta-callback/ngx-okta-callback.component';
import { OIDCConfig } from './oidcConfig';

@NgModule({
  imports: [
  ],
  providers: [NgxOktaTokenService],
  declarations: [NgxOktaAuthLibComponent, NgxOktaCallbackComponent],
  exports: [NgxOktaAuthLibComponent]
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

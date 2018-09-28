# Ng6OktaAuthLibApp
 version 0.0.1
 Okta integeration with angular 6

# Exposed Api's/Services
 ```Ng6OktaAuthService```
 ```Ng6OktaTokenService```

# Git Repository
 https://github.com/MHarisMumtaz/Ng6-Okta-Auth-lib

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# INSTALLATION

`npm install @okta/okta-auth-js`

import Ng6OktaAuthLibModule in your app module

```import { Ng6OktaAuthLibModule } from 'ng6-okta-auth-lib';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
       Ng6OktaAuthLibModule.forRoot({
        tokenManager : {
          storage  : "localStorage"
        },
        clientId   : "{oktaClientID}",
        redirectUri: "{RedirectURI}",
        issuer     : "{issureURL}",
        url        : "{UserURL}",
        scope      : "openid email"
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})```

import and Add callback component on routing

```import { Ng6OktaCallbackComponent } from 'ng6-okta-auth-lib';
const appRoutes: Routes = [
  { path: 'implicit/callback', component: Ng6OktaCallbackComponent}
]
```

Add oktaAuthGuard on your components

```import { Ng6OktaAuthGuard } from 'ng6-okta-auth-lib';
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'implicit/callback', component: Ng6OktaCallbackComponent},
  { path: 'home', component: HomeComponent, canActivate: [ Ng6OktaAuthGuard ] }
]
```

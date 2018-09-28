# Ng6OktaAuthLibApp
 version 0.0.1
 Okta integeration with angular 6

# Exposed Api's/Services
 ```Ng6OktaAuthService```
 ```Ng6OktaTokenService```

# Git Repository
 https://github.com/MHarisMumtaz/Ng6-Okta-Auth-lib

# npm Package
 https://www.npmjs.com/package/ngx-okta-auth-lib
 
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

# INSTALLATION

```
npm install @okta/okta-auth-js
npm install ngx-okta-auth-lib
```

#USAGE

import NgxOktaAuthLibModule in your app module

```import { NgxOktaAuthLibModule } from 'ngx-okta-auth-lib';```
```@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
       NgxOktaAuthLibModule.forRoot({
        tokenManager : {
          storage  : 'localStorage'
        },
        clientId   : '{oktaClientID}',
        redirectUri: '{RedirectURI}',
        issuer     : '{issureURL}',
        url        : '{UserURL}',
        scope      : 'openid email'
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
}) 
```

import and Add callback component on routing

```import { NgxOktaCallbackComponent } from 'ngx-okta-auth-lib';
const appRoutes: Routes = [
  { path: 'implicit/callback', component: NgxOktaCallbackComponent}
]
```

Add oktaAuthGuard on your components

```import { NgxOktaAuthGuard } from 'ngx-okta-auth-lib';
const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'implicit/callback', component: NgxOktaCallbackComponent},
  { path: 'home', component: HomeComponent, canActivate: [ NgxOktaAuthGuard ] }
]
```

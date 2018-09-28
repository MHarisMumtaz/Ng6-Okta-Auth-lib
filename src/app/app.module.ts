import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { NgxOktaAuthLibModule,NgxOktaAuthGuard,NgxOktaCallbackComponent } from 'ngx-okta-auth-lib';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent, canActivate: [ NgxOktaAuthGuard ] },
  { path: 'implicit/callback', component: NgxOktaCallbackComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
       NgxOktaAuthLibModule.forRoot({
        tokenManager : {
          storage  : "localStorage"
        },
        clientId   : "0oafkl9qjigSbX0L90h7",
        redirectUri: "http://localhost:4200/implicit/callback",
        issuer     : "https://dev-803557.oktapreview.com/oauth2/default",
        url        : "https://dev-803557.oktapreview.com",
        scope      : "openid email"
    }),
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
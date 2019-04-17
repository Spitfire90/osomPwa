import { Injectable } from '@angular/core';
import { OAuthService, JwksValidationHandler } from 'angular-oauth2-oidc';
import { authConfig } from '../_helpers/auth.config';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private oauthService: OAuthService) { }

  login() {
    console.log('AuthenticationService - Init ImplicitFlow');
    this.oauthService.initImplicitFlow();
  }

  logout() {
    console.log('AuthenticationService - Logout');
    this.oauthService.logOut();
  }

  tryLogin() {
    this.oauthService.tryLogin();
  }

  configureAuth() {
    // Get the config from a local file
    this.oauthService.configure(authConfig);
    this.oauthService.setStorage(localStorage);
    this.oauthService.tokenValidationHandler = new JwksValidationHandler();

    // Enable silent refresh (to be tested)
    this.oauthService.setupAutomaticSilentRefresh();
    // Not required as default value should be fine - only for tests
    // this.oauthService.timeoutFactor = 0.01;

    this.oauthService.events.subscribe(e => {
      console.log('oauth/oidc event', e);
    });

  }

  public get isAuthenticated(): boolean {
    const hasIdToken = this.oauthService.hasValidIdToken();
    const hasAccessToken = this.oauthService.hasValidAccessToken();
    return (hasIdToken && hasAccessToken);
  }

  public isTokenExpired(): boolean {
    // Here we test only the access token
    return this.oauthService.getAccessTokenExpiration() < Date.now();
  }

  public getAccessTokenExpiration(): number {
    return this.oauthService.getAccessTokenExpiration();
  }

  public authorizationHeader(): string {
    return this.oauthService.authorizationHeader();
  }

  public get userName(): string {
    const claims = this.oauthService.getIdentityClaims();
    console.log('claims');
    console.log(claims);
    if (!claims) {
      return null;
    }
    return claims['upn'];
}
}

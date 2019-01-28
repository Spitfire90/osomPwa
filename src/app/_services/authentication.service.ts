import { Injectable } from '@angular/core';
import { OAuthService } from 'angular-oauth2-oidc';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor(private oauthService: OAuthService) { }

  login() {
    console.log("AuthenticationService - Init ImplicitFlow");
    this.oauthService.initImplicitFlow();
  }

  logout() {
    console.log("AuthenticationService - Logout");
    this.oauthService.logOut();
  }

  public get isAuthenticated(): boolean {
    var hasIdToken = this.oauthService.hasValidIdToken();
    var hasAccessToken = this.oauthService.hasValidAccessToken();
    console.log(`AuthenticationService - isAuthenticated ${hasIdToken && hasAccessToken}`);
    return (hasIdToken && hasAccessToken);
  }

  public get userName(): string {
    var claims = this.oauthService.getIdentityClaims() as Claims;
    if (!claims) return null;
    return claims.given_name;
    //return claims['given_name'];
  }
}

interface Claims {
  given_name: string;
}

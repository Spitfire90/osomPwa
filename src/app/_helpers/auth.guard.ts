import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../_services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authenticationService: AuthenticationService) { }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

      // TODO: Need to check whether valid token means also not expired token - not clear
      const isAuthenticated = this.authenticationService.isAuthenticated;
      if (isAuthenticated) {
          return true;
      }

      // TODO: logic to redirect to the login page
      return false;
  }
}

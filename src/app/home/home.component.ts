import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../_services/authentication.service';
import { OnlineStatusService } from '../_services/online-status.service';
import { MatSnackBarConfig, MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private authenticationService: AuthenticationService,
    private onlineStatusService: OnlineStatusService,
    private snackBar: MatSnackBar) {

      // Is is the right place to register to this event + how to unregister ?
      this.registerOnlineEvent(this.onlineStatusService);
     }

  ngOnInit() {
  }

  login() {
    this.authenticationService.login();
  }

  logout() {
    this.authenticationService.logout();
  }

  public get isAuthenticated(): boolean {
    return this.authenticationService.isAuthenticated;
  }

  public get isExpired(): boolean {
    return this.authenticationService.isTokenExpired();
  }

  public get expirationDate(): string {
    const timespan = this.authenticationService.getAccessTokenExpiration();
    if (timespan) {
      const date = new Date(timespan);
      return date.toString();
    }

    return null;
  }

  public get userName(): string {
    return this.authenticationService.userName;
  }

  private registerOnlineEvent(onlineStatusService: OnlineStatusService) {
    onlineStatusService.connectionChanged.subscribe(online => {
      let message = '';
      if (online) {
        console.log('went online');
        message = 'Application is now online';
      } else {
        console.log('went offline');
        message = 'Application is now offline';
      }

      const config = new MatSnackBarConfig();
      config.verticalPosition = 'bottom';
      config.horizontalPosition = 'center';
      config.duration = 3000;

      this.snackBar.open(message, undefined, config);
    });
  }
}

import { Component } from '@angular/core';
import { AuthenticationService } from './_services/authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'osom-pwa';
  currentUser = 'tmp';

  constructor(private authenticationService: AuthenticationService) {
    this.authenticationService.configureAuth();

    // The method tryLogin checks, whether the app has got security tokens via the hash-fragment of the URL.
    // It parses those tokens and extracts information of the current user.

    this.authenticationService.tryLogin();
  }

  logout() {
    // Do nothing();
  }
}

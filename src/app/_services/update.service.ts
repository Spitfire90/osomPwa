import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {

  constructor(private swUpdate: SwUpdate, private snackBar: MatSnackBar) {
    if (!this.swUpdate.isEnabled) {
      console.log("SwUpdate is not available");
      return;
    }

    this.swUpdate.available.subscribe(() => {

      let config = new MatSnackBarConfig();
      config.verticalPosition = 'bottom';
      config.horizontalPosition = 'center';
      config.duration = 6000;

      this.snackBar.open('New version available', 'Reload', config).onAction().subscribe(() => window.location.reload());
    })
  }
}

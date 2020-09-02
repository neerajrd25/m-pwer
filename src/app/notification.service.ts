import { Injectable } from '@angular/core';
import { MatSnackBar, MatSnackBarConfig } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class NotificationService {

  constructor(private readonly snackBar: MatSnackBar,
  ) { }
  success(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'success-notification-overlay'
    });
  }



  error(message: string) {
    this.show(message, {
      duration: 2000,
      panelClass: 'error-notification-overlay'
    });
  }

  private show(message: string, configuration: MatSnackBarConfig) {
    // Need to open snackBar from Angular zone to prevent issues with its position per
    // https://stackoverflow.com/questions/50101912/snackbar-position-wrong-when-use-errorhandler-in-angular-5-and-material
    this.snackBar.open(message, null, configuration)
  }
}

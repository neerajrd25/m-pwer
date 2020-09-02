import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthGaurdService implements CanActivate {

  constructor(private router: Router) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (sessionStorage.getItem('usertoken')) {
      // logged in so return true
      // this.router.navigate(['/dashboard'], { queryParams: { returnUrl: state.url } });
      return true;
    } else {
      // not logged in so redirect to login page with the return url
      this.router.navigate(['login'], { queryParams: { returnUrl: state.url } });
      return false;
    }
  }
}

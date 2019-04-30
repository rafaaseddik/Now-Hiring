import {Injectable} from '@angular/core';
import {Router, CanActivate} from '@angular/router';

import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthenticationGuard implements CanActivate {

  constructor(private router: Router,
              private authenticationService: AuthenticationService) {
  }

  canActivate(): boolean {
    if (this.authenticationService.isAuthenticated() &&
      this.authenticationService.credentials &&
      this.authenticationService.credentials.user) {
      return true;
    }
    this.router.navigate(['/login'], {replaceUrl: true});
    return false;
  }
}

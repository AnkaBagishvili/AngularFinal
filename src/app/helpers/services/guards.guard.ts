import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) {}

  canActivate() {
    if (this.authService.isLoggedIn()) {
      //   this.router.navigate(['/main']);
      return this.router.parseUrl('shop');
    }
    return true;
  }
}

// export function authGuard = () => {
// გადავწერო ფუნქციის სახით
// }

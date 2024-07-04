import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  [x: string]: any;
  signIn(_username: any, _password: any) {
    throw new Error('Method not implemented.');
  }
  private isAuthenticated = false;

  constructor() {}

  login() {
    this.isAuthenticated = true;
  }

  logout() {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}

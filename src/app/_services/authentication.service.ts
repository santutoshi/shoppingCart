import { Injectable } from '@angular/core';
@Injectable()

export class AuthenticationService {
  constructor(
  ) { }
  getToken() {
    return localStorage.getItem('token');
  }
  isLoggedIn() {
    return this.getToken() !== null;
  }
}


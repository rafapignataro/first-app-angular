import { Injectable } from '@angular/core';

import User from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  token: string;

  setUser(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUser() {
    if (this.user) return this.user;

    const user = localStorage.getItem('user');

    return user ? JSON.parse(user) : null;
  }

  setToken(token: string) {
    this.token = token;

    localStorage.setItem('token', token);
  }

  getToken() {
    if (this.token) return this.token;

    const token = localStorage.getItem('token');

    return token || null;
  }

  isLogged(): boolean {
    return !!(this.getUser() && this.getToken());
  }
}

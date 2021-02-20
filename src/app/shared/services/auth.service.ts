import { Injectable } from '@angular/core';

import User from '../interfaces/user.interfaces';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  user: User;

  token: string;

  setUsuario(user: any) {
    this.user = user;
    localStorage.setItem('user', JSON.stringify(user));
  }

  getUsuario() {
    if (this.user) return this.user;

    const user = localStorage.getItem('user');

    return user ? JSON.parse(user) : null;
  }

  setToken(token: string) {
    this.token = token;

    localStorage.getItem('token');
  }

  getToken() {
    if (this.token) return this.token;

    const token = localStorage.getItem('token');

    return token;
  }
}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of, throwError, timer } from 'rxjs';
import { delay, mergeMap, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { AuthService } from '../shared/services/auth.service';
import LoginResponse from './login.interfaces';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient, private authService: AuthService) {}

  API_URL = environment.API_URL;

  enter(email: string, password: string): Observable<LoginResponse> {
    // return this.http.post(`${this.API_URL}/auth`, { email, password });
    if (email === 'rafapignataro@gmail.com' && password === '123') {
      return of({
        user: {
          name: 'Rafael',
          lastName: 'Pignataro',
          email: 'rafapignataro@gmail.com',
        },
        token: '90I5RTHIQRJFQPHRRP',
      }).pipe(
        delay(2000),
        tap((response) => {
          this.authService.setUsuario(response.user);
          this.authService.setToken(response.token);
        }),
      );
    }

    const error = throwError('Email e/ou senha incorretos');
    return timer(2000).pipe(mergeMap(() => error));
  }
}

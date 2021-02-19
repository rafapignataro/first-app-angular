import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { of, throwError, timer } from 'rxjs';
import { delay, mergeMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private http: HttpClient) {}

  API_URL = environment.API_URL;

  enter(email: string, password: string) {
    // return this.http.post(`${this.API_URL}/auth`, { email, password });
    if (email === 'rafapignataro@gmail.com' && password === '123') {
      return of({
        user: {
          name: 'Rafael',
          lastName: 'Pignataro',
          email: 'rafapignataro@gmail.com',
        },
        token: '90I5RTHIQRJFQPHRRP',
      }).pipe(delay(2000));
    }

    const error = throwError('Email e/ou senha incorretos');
    return timer(2000).pipe(mergeMap(() => error));
  }
}

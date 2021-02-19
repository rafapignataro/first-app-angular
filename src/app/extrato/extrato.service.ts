import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

import { ITransaction } from './extrato.interfaces';

@Injectable({
  providedIn: 'root',
})
export class ExtratoService {
  API_URL = environment.API_URL;

  constructor(private http: HttpClient) {}

  getTransactions(page: number) {
    // Simulando erro com 3s de delay
    // const error = throwError('Erro genérico');

    // return timer(3000).pipe(mergeMap(() => error));

    return this.http.get<ITransaction[]>(`${this.API_URL}/transacoes?`, {
      params: {
        _page: String(page),
      },
    });
  }
}

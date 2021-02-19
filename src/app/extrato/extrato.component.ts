import { Component, OnInit } from '@angular/core';
import { finalize, take } from 'rxjs/operators';

import { ITransaction } from './extrato.interfaces';
import { ExtratoService } from './extrato.service';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  // eslint-disable-next-line no-useless-constructor
  constructor(private extratoService: ExtratoService) {}

  transactions: ITransaction[] = [];

  isLoading: boolean;

  isError: boolean;

  page = 1;

  ngOnInit(): void {
    this.getExtrato();
  }

  getExtrato() {
    this.isLoading = true;
    this.isError = false;

    this.extratoService
      .getTransactions(this.page)
      .pipe(
        take(1),
        finalize(() => {
          this.isLoading = false;
        }),
      )
      .subscribe(
        (response) => this.onSuccess(response),
        () => this.onError(),
      );
  }

  onSuccess(response: ITransaction[]) {
    this.transactions = response;
  }

  onError() {
    this.isError = true;
  }

  paginaAnterior() {
    if (this.page < 2) return;

    this.page -= 1;
    this.getExtrato();
  }

  proximaPagina() {
    this.page += 1;
    this.getExtrato();
  }
}

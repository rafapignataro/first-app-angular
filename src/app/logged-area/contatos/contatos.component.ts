import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { IContact } from './contatos.interfaces';
import { ContatosService } from './contatos.service';

@Component({
  selector: 'app-contatos',
  templateUrl: './contatos.component.html',
  styleUrls: ['./contatos.component.scss'],
})
export class ContatosComponent implements OnInit {
  constructor(
    private contatosService: ContatosService,
    private router: Router,
  ) {}

  contacts: IContact[] = [];

  isLoading: boolean;

  isError: boolean;

  ngOnInit(): void {
    this.getExtrato();
  }

  getExtrato() {
    this.isLoading = true;
    this.isError = false;

    this.contatosService
      .getContacts()
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

  onSuccess(response: IContact[]) {
    this.contacts = response;
  }

  onError() {
    this.isError = true;
  }

  irDetalhes(idContato: number) {
    this.router.navigate([`/contatos/${idContato}`]);
  }
}

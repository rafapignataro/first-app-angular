import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize, take } from 'rxjs/operators';

import { IContact } from '../contatos/contatos.interfaces';
import { ContatosService } from '../contatos/contatos.service';

@Component({
  selector: 'app-detalhes-contato',
  templateUrl: './detalhes-contato.component.html',
  styleUrls: ['./detalhes-contato.component.scss'],
})
export class DetalhesContatoComponent implements OnInit {
  // ActivateRoute permite analisar o conteudo da rota ativa
  constructor(
    private route: ActivatedRoute,
    private contatosService: ContatosService,
    private router: Router,
  ) {}

  contact: IContact;

  isLoading: boolean;

  isError: boolean;

  ngOnInit(): void {
    const contatoId = this.route.snapshot.paramMap.get('id');
    this.getContact(Number(contatoId));
  }

  getContact(contatoId: number) {
    this.isLoading = true;
    this.isError = false;

    this.contatosService
      .getContact(contatoId)
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

  onSuccess(response: IContact) {
    this.contact = response;
  }

  onError() {
    this.isError = true;
  }

  voltar() {
    this.router.navigate(['/contatos']);
  }
}

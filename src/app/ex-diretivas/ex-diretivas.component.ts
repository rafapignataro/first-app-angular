import { Component } from '@angular/core';

import categoriaMemes from './dados';

@Component({
  selector: 'app-ex-diretivas',
  templateUrl: './ex-diretivas.component.html',
  styleUrls: ['./ex-diretivas.component.scss'],
})
export class ExDiretivasComponent {
  deveExibir = false;

  categoriaMemes = categoriaMemes;

  imagesURL =
    'https://github.com/vitorfgsantos/angular-memes-diretivas/blob/master/images';

  array = [
    { name: 'Rafael', age: 15 },
    { name: 'Lucas', age: 18 },
    { name: 'Vinicius', age: 13 },
  ];

  trocarValor() {
    this.deveExibir = !this.deveExibir;
  }

  soma(a, b) {
    return a + b;
  }
}

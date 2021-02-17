import { DecimalPipe } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ex-pipe',
  templateUrl: './ex-pipe.component.html',
  styleUrls: ['./ex-pipe.component.scss'],
  providers: [DecimalPipe],
})
export class ExPipeComponent {
  private decimalPipe: DecimalPipe;

  constructor(decimalPipe: DecimalPipe) {
    this.decimalPipe = decimalPipe;
  }

  compras = [
    {
      produto: 'lâmpadas',
      valor: 299.99,
      quantidade: 2,
      peso: 0,
      data: new Date(2020, 1, 1, 15, 20),
    },
    {
      produto: 'farinha',
      valor: 450.29,
      quantidade: 2,
      peso: 29.33333,
      data: new Date(2020, 1, 10, 19, 30),
    },
  ];

  getPesoFormatado(peso: number) {
    if (peso <= 0) return 'Sem peso';

    return `${this.decimalPipe.transform(peso, '1.1-1')} Kg`;
  }
}

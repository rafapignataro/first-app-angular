import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ex-ngclass',
  templateUrl: './ex-ngclass.component.html',
  styleUrls: ['./ex-ngclass.component.scss'],
  // - Padrão
  // encapsulation: ViewEncapsulation.Emulated,
  // - Estilo do component vai para todos
  // encapsulation: ViewEncapsulation.None,
  // - Cria elemento shadow no html com estilos próprios
  // encapsulation: ViewEncapsulation.ShadowDom,
})
export class ExNgclassComponent implements OnInit {
  deveSerVerde = false;

  tornaVerde() {
    this.deveSerVerde = !this.deveSerVerde;
  }

  ngOnInit() {
    console.log('Init');
  }
}

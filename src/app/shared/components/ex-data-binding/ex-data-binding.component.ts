import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ex-data-binding',
  templateUrl: './ex-data-binding.component.html',
  styleUrls: ['./ex-data-binding.component.scss'],
})
export class ExDataBindingComponent implements OnInit {
  @Input() palavra: string;
  @Input() color: string;

  @Output() clicado = new EventEmitter();

  imageURL =
    'https://image.freepik.com/fotos-gratis/gatinho-fofinho-engracado-fareja_82831-128.jpg';
  isButtonDisabled = false;
  inputValue = 'Hello';
  ariaLabel = 'Teste para aria label';

  valorDoInput = '';
  constructor() {}

  onClick(event: any) {
    console.log(event);
  }

  digitouAlgo(event: any) {
    this.valorDoInput = event.target.value;
    console.log(event);
  }

  passouMouse() {
    console.log('passou');
  }

  onClickBotaoEmissor(event: any) {
    console.log('Emitir info para Parent');
    this.clicado.emit(event);
  }
  ngOnInit(): void {}
}

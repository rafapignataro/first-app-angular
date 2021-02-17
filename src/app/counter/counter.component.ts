import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  // Para o Two Way Data Binding funcionar o Input e Output devem ser iguais
  // porém o Ouput com a palavra Change (teste, testeChange)
  @Input() value: number;
  @Output() valueChange = new EventEmitter();

  handleSumClick(): void {
    this.value++;
    this.valueChange.emit(this.value);
  }

  handleSubClick(): void {
    if (this.value > 0) {
      this.value--;
      this.valueChange.emit(this.value);
    }
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.scss'],
})
export class CounterComponent implements OnInit {
  @Input() initialValue: number;
  @Output() valueChanged = new EventEmitter();

  handleSumClick(): void {
    this.initialValue++;

    this.valueChanged.emit('Somou');
  }

  handleSubClick(): void {
    this.initialValue--;

    this.valueChanged.emit('Subtraiu');
  }

  constructor() {}

  ngOnInit(): void {}
}

import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // Ao atribuir um valor ao Input de dados ele adquire um padrão caso não seja
  // passado
  @Input() title = 'Titulo Padrão';

  constructor() {}

  ngOnInit(): void {
    console.log('Batatinha');
  }
}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // Ao atribuir um valor ao Input de dados ele adquire um padrão caso não seja
  // passado
  @Input() title = 'Titulo Padrão';
}

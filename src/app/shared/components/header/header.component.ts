import { Component, Input } from '@angular/core';

import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private authService: AuthService) {}

  // Ao atribuir um valor ao Input de dados ele adquire um padrão caso não seja
  // passado
  @Input() title = 'Titulo Padrão';

  logout() {
    this.authService.logout();
  }
}

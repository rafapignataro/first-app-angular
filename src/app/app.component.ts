import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pudim = 'Uma palavra';
  headerTitle = 'Sejam Bem-Vindos!';
  constructor() {}

  eventoRecebido(event) {
    console.log('PARENT:', event);
  }

  counterChanged(message) {
    console.log(message);
  }
}

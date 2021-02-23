import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  pudim = 'Uma palavra';

  counterValue = 10;

  static eventoRecebido(event) {
    console.log('PARENT:', event);
  }

  // Necessária para a atualização da CounterValue sem o Two Way Data Binding
  // counterChanged(value) {
  //   this.counterValue = value;
  //   console.log(value);
  // }
}

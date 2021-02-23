import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoggedAreaComponent } from './logged-area.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    // Quanto for exatamente a rota / redireciona, ou seja, full
    pathMatch: 'full',
  },
  {
    path: '',
    component: LoggedAreaComponent,
    children: [
      {
        path: 'home',
        component: HomeComponent,
      },

      {
        path: 'extrato',
        component: ExtratoComponent,
      },
      {
        path: 'contatos',
        loadChildren: () =>
          import('./contatos/contatos.module').then((m) => m.ContatosModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoggedAreaRoutingModule {}

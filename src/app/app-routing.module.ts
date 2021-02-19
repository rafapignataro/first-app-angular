import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos/contatos.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'extrato',
    component: ExtratoComponent,
  },
  {
    path: 'contatos',
    component: ContatosComponent,
  },
  {
    path: 'contatos/:id',
    component: DetalhesContatoComponent,
  },
  {
    path: '',
    redirectTo: 'home',
    // Quanto for exatamente a rota / redireciona, ou seja, full
    pathMatch: 'full',
  },
  {
    // Qualquer rota que não esteja acima
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

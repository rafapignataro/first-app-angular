import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ExtratoComponent } from './extrato/extrato.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { IsLoggedGuard } from './shared/guards/is-logged.guard';
import { IsNotLoggedGuard } from './shared/guards/is-not-logged.guard';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [IsNotLoggedGuard],
  },
  {
    path: 'extrato',
    component: ExtratoComponent,
    canActivate: [IsLoggedGuard],
  },
  {
    path: 'contatos',
    loadChildren: () =>
      import('./contatos/contatos.module').then((m) => m.ContatosModule),
    canActivate: [IsLoggedGuard],
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

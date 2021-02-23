import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { NotFoundComponent } from './not-found/not-found.component';
import { IsLoggedGuard } from './shared/guards/is-logged.guard';
import { IsNotLoggedGuard } from './shared/guards/is-not-logged.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./logged-area/logged-area.module').then(
        (m) => m.LoggedAreaModule,
      ),
    canActivate: [IsLoggedGuard],
  },

  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((m) => m.LoginModule),
    canActivate: [IsNotLoggedGuard],
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContatosComponent } from './contatos.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

const routes: Routes = [
  {
    path: '',
    component: ContatosComponent,
  },
  {
    path: 'create',
    component: CreateContactComponent,
  },
  {
    path: ':id',
    component: DetalhesContatoComponent,
  },
  {
    path: ':id/edit',
    component: UpdateContactComponent,
  },
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ContatosRoutingModule {}

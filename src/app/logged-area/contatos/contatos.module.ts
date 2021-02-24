import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { ContatosRoutingModule } from './contatos-routing.module';
import { ContatosComponent } from './contatos.component';
import { CreateContactComponent } from './create-contact/create-contact.component';
import { DetalhesContatoComponent } from './detalhes-contato/detalhes-contato.component';
import { UpdateContactComponent } from './update-contact/update-contact.component';

@NgModule({
  declarations: [
    ContatosComponent,
    DetalhesContatoComponent,
    CreateContactComponent,
    UpdateContactComponent,
  ],
  imports: [CommonModule, ContatosRoutingModule, ReactiveFormsModule],
})
export class ContatosModule {}

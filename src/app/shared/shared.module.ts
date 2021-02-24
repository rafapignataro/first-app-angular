import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { CounterComponent } from './components/counter/counter.component';
import { ExDataBindingComponent } from './components/ex-data-binding/ex-data-binding.component';
import { ExDiretivasComponent } from './components/ex-diretivas/ex-diretivas.component';
import { ExNgclassComponent } from './components/ex-ngclass/ex-ngclass.component';
import { ExPipeComponent } from './components/ex-pipe/ex-pipe.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { AuthInterceptor } from './interceptors/auth.interceptor';

@NgModule({
  declarations: [
    ExDataBindingComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    ExDiretivasComponent,
    ExNgclassComponent,
    ExPipeComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    ExDataBindingComponent,
    HeaderComponent,
    FooterComponent,
    CounterComponent,
    ExDiretivasComponent,
    ExNgclassComponent,
    ExPipeComponent,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class SharedModule {}

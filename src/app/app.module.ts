import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';
import { ExDataBindingComponent } from './ex-data-binding/ex-data-binding.component';
import { ExDiretivasComponent } from './ex-diretivas/ex-diretivas.component';
import { ExNgclassComponent } from './ex-ngclass/ex-ngclass.component';
import { ExPipeComponent } from './ex-pipe/ex-pipe.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';

registerLocaleData(localePT, 'pt');

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FooterComponent,
    ExDataBindingComponent,
    CounterComponent,
    ExDiretivasComponent,
    ExNgclassComponent,
    ExPipeComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [
    {
      provide: LOCALE_ID,
      useValue: 'pt',
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}

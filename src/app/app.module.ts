import { registerLocaleData } from '@angular/common';
import localePT from '@angular/common/locales/pt';
import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './shared/components/counter/counter.component';
import { ExDataBindingComponent } from './shared/components/ex-data-binding/ex-data-binding.component';
import { ExDiretivasComponent } from './shared/components/ex-diretivas/ex-diretivas.component';
import { ExNgclassComponent } from './shared/components/ex-ngclass/ex-ngclass.component';
import { ExPipeComponent } from './shared/components/ex-pipe/ex-pipe.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { HeaderComponent } from './shared/components/header/header.component';

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

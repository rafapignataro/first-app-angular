import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { ExDataBindingComponent } from './ex-data-binding/ex-data-binding.component';
import { CounterComponent } from './counter/counter.component';
import { ExDiretivasComponent } from './ex-diretivas/ex-diretivas.component';
import { ExNgclassComponent } from './ex-ngclass/ex-ngclass.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, HomeComponent, FooterComponent, ExDataBindingComponent, CounterComponent, ExDiretivasComponent, ExNgclassComponent],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

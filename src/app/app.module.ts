import { InjectionToken, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CustomerModule } from './customer/customer.module';

export const BASE_URL = 'https://localhost:44312/';

@NgModule({
  declarations: [AppComponent, NavbarComponent],
  imports: [BrowserModule, AppRoutingModule, CustomerModule],
  providers: [{ provide: BASE_URL, useValue: BASE_URL }],
  bootstrap: [AppComponent],
})
export class AppModule {}

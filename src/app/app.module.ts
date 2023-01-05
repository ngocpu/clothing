import { CartListComponent } from './homepages/cart-list/cart-list.component';

import { ProductsListComponent } from './homepages/products-list/products-list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepagesComponent } from './homepages/homepages.component';
import { ProductsComponent } from './homepages/products/products.component';
import { AboutComponent } from './homepages/about/about.component';
import { ContactComponent } from './homepages/contact/contact.component';
import { CartComponent } from './cart/cart.component';
import { LoginComponent } from './auth/login/login.component';
import { ResiterComponent } from './auth/resiter/resiter.component';
import { HomepagesModule } from './homepages/homepages.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
// import { authInterceptorProviders } from './_helpers/auth.interceptor';


@NgModule({
  declarations: [
    AppComponent,
    HomepagesComponent,
    ProductsComponent,
    ProductsListComponent,
    AboutComponent,
    ContactComponent,
    CartComponent,
    LoginComponent,
    ResiterComponent,
    CartListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomepagesModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [
    // authInterceptorProviders
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

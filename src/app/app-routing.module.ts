import { LoginComponent } from './auth/login/login.component';
import { ResiterComponent } from './auth/resiter/resiter.component';
import { CartComponent } from './cart/cart.component';
import { ContactComponent } from './homepages/contact/contact.component';
import { AboutComponent } from './homepages/about/about.component';
import { ProductsComponent } from './homepages/products/products.component';
import { HomepagesComponent } from './homepages/homepages.component';
import { NgModule } from '@angular/core';
import {RouterModule,Routes} from '@angular/router';


const routes: Routes = [
  {
    path:"",
    title:"Home",
    component: HomepagesComponent,
    // children:[
    //   {
    //     path:'products',
    //     title:'Our Products',
    //     component:ProductsComponent,
    //   },
    //   {
    //     path:'about',
    //     title:'about',
    //     component:AboutComponent
    //   },
    //   {
    //     path:'contact',
    //     title:'contact',
    //     component:ContactComponent
    //   }
    // ]
  },
  {
    path:"login",
    title:'login',
    component:LoginComponent
  },
  {
    path:"resiter",
    title:'resiter',
    component:ResiterComponent
  },
  {
    path:'cart',
    title:'Your cart',
    component:CartComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

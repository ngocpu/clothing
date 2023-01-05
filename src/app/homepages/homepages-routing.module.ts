import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const homePagesRoutes: Routes = [
  {
    path:'products',
    title:" Our Products",
    component:ProductsComponent
  },
  {
    path:'about',
    title:'About Us',
    component:AboutComponent
  },
  {
    path:'contact',
    title:'Contact Us',
    component:ContactComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(homePagesRoutes)],
  exports: [RouterModule]
})
export class HomepagesRoutingModule { }

import { ProductsService } from './products.service';
import { Products } from './../types/products';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-homepages',
  templateUrl: './homepages.component.html',
  styleUrls: ['./homepages.component.css']
})
export class HomepagesComponent implements OnInit {
  products:Products[] =[]
  constructor(private productsService:ProductsService){
  }
  ngOnInit(): void {
    this.products=this.productsService.getProducts()
    this.products.forEach((item:any) => {
      Object.assign(item,{qnty:1,total:item.price})
    })
  }
}

import { CartService } from './../../services/cart.service';
import { Products } from './../../types/products';
import { ProductsService } from './../products.service';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit{
  products:Products[] =[]
  constructor(private productsService:ProductsService, private Cartservice:CartService){
  }
  ngOnInit(): void {
    this.products=this.productsService.getProducts()
  }

  add(product:Products){
    this.Cartservice.addToCart(product)
  }
}

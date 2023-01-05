import { CartService } from './../../services/cart.service';

import { Products } from './../../types/products';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit{
  @Input()product:Products={} as Products 
  @Output() newCartList = new EventEmitter<Products>();

  listProducts:Products[] =[]
  constructor(private Cartservice:CartService){
  }
  ngOnInit(): void {
   
  }
  add(product:Products){
    this.Cartservice.addToCart(product)
    this.newCartList.emit(product);
  }
}

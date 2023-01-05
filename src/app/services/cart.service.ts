import { ProductsService } from './../homepages/products.service';

import { Products, CartItem } from './../types/products';
import { Injectable, Input } from '@angular/core';
import { BehaviorSubject, Subject, first, identity } from 'rxjs';
import { isNgTemplate } from '@angular/compiler';
import { AppComponent } from '../app.component';


@Injectable({
  providedIn: 'root'
})
export class CartService {
  public CartItemList:any =[]
  public Cart:any =[]
  public ProductList = new BehaviorSubject<any>([])
  totalItem :number = 0
  constructor(private productservice:ProductsService) { 
  }
  getMgs(){
    return this.ProductList.asObservable()
  }
 
  saveProduct(product:Products){
    localStorage.setItem('Cart',JSON.stringify(product))
  }
  addToCart(product:Products){
    this.saveProduct(product)
    let item = JSON.parse(localStorage.getItem('Cart')||'')
    this.CartItemList.push(item)
    this.ProductList.next(this.CartItemList)
    this.getTotalPrice()
  }
  getTotalPrice() :number{
    let total =0;
    this.CartItemList.map((item :any) =>{
      total += item.total
    })
    return total
  }
  removeItem(product:Products){
    this.CartItemList.map((item:any, index:any) =>{
      if(product.id === item.id){
        this.CartItemList.splice(index,1)
      }
    })
    this.totalItem = this.CartItemList.length
  }
  removeAll(){
    this.CartItemList =[]
    this.ProductList.next(this.CartItemList)
  }
}

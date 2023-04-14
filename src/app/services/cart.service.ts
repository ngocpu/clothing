import { ProductsService } from './../homepages/products.service';

import { Products } from './../types/products';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CartService {
  public CartItemList:any =[]
  public Cart:any =[]
  public ProductList = new BehaviorSubject<any>([])

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
    let item = JSON.parse(localStorage.getItem('Cart')||'{}')
    let b ={...item, qnty:1,total:item.price}
    let itemExits = false
    this.CartItemList.map((a:any) => {
      if(a.id === product.id){
        a.qnty++
        a.total = a.qnty * a.price
        itemExits = true
      }
    })
    if(!itemExits){
      this.CartItemList.push(b)
    }
    localStorage.setItem('CartItemList', JSON.stringify(this.CartItemList))
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
async  removeItem(product:Products) {
  await  this.CartItemList.map((item:any,index :any) =>{
      if(product.id === item.id){
        this.CartItemList.splice(index,1)
        localStorage.removeItem('Cart')
        localStorage.removeItem('CartItemList')
        localStorage.setItem('CartItemList', JSON.stringify(this.CartItemList))
      }
    })
  this.ProductList.next(this.CartItemList)
}
  removeAll(){
    this.CartItemList =[]
    this.ProductList.next(this.CartItemList)
  }
}

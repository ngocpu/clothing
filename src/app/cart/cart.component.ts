import { Products } from './../types/products';
import { CartService } from './../services/cart.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{
  
  public Items:any=[]
  public total:number=0
  constructor(private cartservice:CartService){}
  ngOnInit(): void {
    this.cartservice.getMgs()
      .subscribe(res => {
        this.Items= JSON.parse(localStorage.getItem('CartItemList') || '')
        this.total = this.cartservice.getTotalPrice()
      })
      this.remove(this.Items)
  }
  down(product:Products){
    this.Items.map((item:any)=> {
      if(item.id === product.id){
        if(item.qnty === 1) this.remove(product)
        else{
          item.qnty --
          item.total =  item.price * item.qnty
        }
      }
    })
  }
  up(product:Products){
    this.Items.map((item:any) =>{
      if(item.id === product.id){
        item.qnty++
        item.total = item.price * item.qnty
      }
    })
  }
  remove(product:Products){
    this.cartservice.removeItem(product)
    if(this.Items.length === 1){
      localStorage.removeItem('CartItemList')
      this.Items =[]
    } else{
      this.Items = JSON.parse(localStorage.getItem('CartItemList') || '')
    }
  }
}

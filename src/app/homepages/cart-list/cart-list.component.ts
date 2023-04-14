import { CartService } from './../../services/cart.service';
import { Products } from './../../types/products';
import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { outputAst } from '@angular/compiler';

@Component({
  selector: 'app-cart-list',
  templateUrl: './cart-list.component.html',
  styleUrls: ['./cart-list.component.css'],
})
export class CartListComponent implements OnInit {
 
  public Items:any=[]
  public total: number=0
  constructor(private Cartservice: CartService) {}
  ngOnInit(): void {
    this.getItems()
  }
  getItems(){
    this.Cartservice.getMgs()
    .subscribe((res) => {
      let x = JSON.parse(localStorage.getItem('CartItemList') || '')
      this.Items = x 
      this.total = this.Cartservice.getTotalPrice();
    });
  }
  // remove(product: Products) {
  //   this.Cartservice.removeItem(product);
  //   if(this.Items.length === 1){
  //     localStorage.clear()
  //     this.Items=[]
  //   } else{
  //     this.Items = JSON.parse(localStorage.getItem('Cart1') || '')
  //   }
  //   this.ItemsEvent.emit(this.Items)
  // }
}

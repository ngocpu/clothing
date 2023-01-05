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
  public x:any = JSON.parse(localStorage.getItem('Cart') || '')
  public Items:any = this.x
  public total: number = 0
  constructor(private Cartservice: CartService) {}
  ngOnInit(): void {
    // this.Items = JSON.parse(localStorage.getItem('CartItemList') || '')
    this.Cartservice.getMgs()
          .subscribe((res) => {
              this.Items = res;
              this.total = this.Cartservice.getTotalPrice();
          });
  }
  remove(product: Products) {
    this.Cartservice.removeItem(product);
  }
}

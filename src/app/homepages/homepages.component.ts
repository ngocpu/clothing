import { ProductsService } from './products.service';
import { Products } from './../types/products';
import { Component, OnInit, Input } from '@angular/core';
import { AsyncPipe } from '@angular/common';

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
  }
}

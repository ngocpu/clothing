import { ContactComponent } from './../homepages/contact/contact.component';
import { CommonModule } from '@angular/common';
export interface Products{
    id:number;
    name:string;
    price:number;
    img:string;
    des:string;
}
export interface Members{
    id: number;
    name:string;
    img:string;
    job:string;
    des:string; 
}
export interface CartItem{
    id:number;
    name:string;
    price:string;
    img:string;
    des:string;
    quanity:number;
}
export interface ResForm{
    email:string;
    password:string;
    cfPassword:string;
}
export interface LogForm{
    email:string;
    password:string
}
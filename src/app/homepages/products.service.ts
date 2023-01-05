import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  constructor() { }
  getProducts(){
    return[
      {
        id:1,
        name:'Title1',
        des:'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        price:100,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8K1km9b_re0-hynpVuQx022tVC4s1E11mg&usqp=CAU"
      },
      {
        id:2,
        name:'Title2',
        des:'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        price:100,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8K1km9b_re0-hynpVuQx022tVC4s1E11mg&usqp=CAU"
      },
      {
        id:3,
        name:'Title3',
        des:'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        price:100,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8K1km9b_re0-hynpVuQx022tVC4s1E11mg&usqp=CAU"
      },
      {
        id:4,
        name:'Title4',
        des:'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        price:100,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8K1km9b_re0-hynpVuQx022tVC4s1E11mg&usqp=CAU"
      },
      {
        id:5,
        name:'Title5',
        des:'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        price:100,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8K1km9b_re0-hynpVuQx022tVC4s1E11mg&usqp=CAU"
      },
      {
        id:6,
        name:'Title6',
        des:'Lorem ipsume dolor sit amet, adipisicing elite. Itaque, corporis nulla aspernatur.',
        price:100,
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRX8K1km9b_re0-hynpVuQx022tVC4s1E11mg&usqp=CAU"
      }
    ]
  }
}

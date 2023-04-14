import { CartService } from './services/cart.service';
import { AuthService } from './auth/auth.service';
import { Router } from '@angular/router';
// import { TokenStoreageService } from './service/token-storeage.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'sixteen-clothing';
  totalItem:any = 0
  items = []
  constructor(private auth :AuthService, private cartservice:CartService){}
  ngOnInit(): void {
    this.cartservice.getMgs()
      .subscribe(res => {
        this.items = res
        this.totalItem = res.length
      }) 
   
    // this.isLoggedIn= !!this.tokenStoreage.getToken()
    // if(this.isLoggedIn){
    //   const user = this.tokenStoreage.getUser()
    //   this.roles =user.roles
    // }
  }
  isAuthenticated(){
    return this.auth.isAuthenticated
  }
  handel(){
    this.auth.logOut()
  }
}

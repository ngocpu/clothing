import { AuthService } from './../auth.service';
import { HttpClient } from '@angular/common/http';
// import { TokenStoreageService } from './../../service/token-storeage.service';
// import { AuthService } from './../../service/auth.service';
import { LogForm } from './../../types/products';

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router, Routes } from '@angular/router';
import { first } from 'rxjs';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  public LoginForm !: FormGroup
  isAuthenticated:boolean = false
  isLoading:boolean = false
  isLogin:boolean=false
  constructor(private auth:AuthService,private formbuilder:FormBuilder,private http:HttpClient,private router:Router){}

  ngOnInit(): void {
    this.LoginForm= this.formbuilder.group({
      email:[''],
      password:['',Validators.required]
    })
  }
  login(){
    this.http.get<any>("http://localhost:3000/signupUsersList")
    .subscribe(res=>{
      const user = res.find((a:any)=>{
        this.isLoading=true
        return a.email === this.LoginForm.value.email && a.password === this.LoginForm.value.password 
      });
      if(user){
        alert('Login Succesful');
        this.LoginForm.reset()
        this.router.navigate(["/"])
        this.isAuthenticated=true
        this.isLogin =true
        this.isLoading=false
        
      }
    },err=>{
      alert("Something went wrong")
    })
    this.auth.log()
  }
  
}

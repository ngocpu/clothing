import { AuthService } from './../auth.service';
import { AuthGuardService } from './../auth-guard.service';

import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
// import { AuthService } from './../../service/auth.service';
import { ResForm } from './../../types/products';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resiter',
  templateUrl: './resiter.component.html',
  styleUrls: ['./resiter.component.css']
})
export class ResiterComponent implements OnInit{
  public SignUpForm !: FormGroup
  isAuthenticated:boolean = false
  isLoading:boolean = false
  isLogin:boolean=false
  constructor(private auth:AuthService, private formbuilder: FormBuilder,private http:HttpClient,private router:Router){}
  ngOnInit(): void {
    this.SignUpForm = this.formbuilder.group({
      email:[''],
      password:['']
    })
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupUsersList",this.SignUpForm.value)
    .subscribe(res=>{
      alert('SIGNIN SUCCESFUL');
    
      this.SignUpForm.reset()
      this.router.navigate(["/"])
      this.isAuthenticated=true
      this.isLogin =true
      this.isLoading=false
      
    },err=>{
      alert("Something went wrong")
    })
    this.auth.sign()
  }

}

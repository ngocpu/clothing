import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { flatMap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public LoginForm !: FormGroup
  public SignUpForm!: FormGroup
  isAuthenticated:boolean = false
  isLoading:boolean = false
  constructor(private formbuilder:FormBuilder,private router:Router,private http:HttpClient,) { }
  log(){
   this.isAuthenticated=true
  }
  sign(){
   this.isAuthenticated=true
  }
  logOut(){
    this.isAuthenticated= false;
    this.router.navigate(['/login'])
  }

}

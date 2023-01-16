import { Component, OnInit } from '@angular/core';
import { ShopAppService } from "../service/shop-app.service";
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginform:any = new FormGroup({
    "username":new FormControl("",Validators.required),
    "password":new FormControl("",Validators.required)
     })
  constructor(private service:ShopAppService){}
  ngOnInit(): void {
    
  }

  authenticate(){
    console.log(this.loginform.value);
    
    this.service.login_fun(this.loginform.value)
    
  
  }
}

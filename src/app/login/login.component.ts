import { Component, OnInit } from '@angular/core';
import { ShopAppService } from "../service/shop-app.service";
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  data: any;
  loginform: any = new FormGroup({
    "username": new FormControl("", Validators.required),
    "password": new FormControl("", Validators.required)
  })
  constructor(private service: ShopAppService, private routr: Router) { }
  ngOnInit(): void {

  }

  authenticate() {

    if (this.loginform.get("username").value && this.loginform.get("password").value) {
      this.service.login_fun(this.loginform.value).subscribe(res => {
        console.log(res);
        this.data = res
              
        if (this.data.token) {
          localStorage.removeItem('token')
          localStorage.setItem('token', this.data.token);

          if (localStorage.getItem('token')) {
            this.routr.navigateByUrl("shops")
          }
        }

      }, error => {
        console.log(error);
        alert("invalid username or password")
      })

    } else {
      alert("please enter Username & password")
    }

  }
}

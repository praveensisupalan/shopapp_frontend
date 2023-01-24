import { Component,OnInit } from '@angular/core';
import { FormControl,FormGroup,Validators } from "@angular/forms";
import { ShopAppService } from "../service/shop-app.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

signupform= new FormGroup({
  "username":new FormControl("",Validators.required),
  "email":new FormControl("",Validators.required),
  "phone_no":new FormControl("",Validators.required),
  "password":new FormControl("",Validators.required)
})
res:any
constructor(private service:ShopAppService,private router:Router){}
ngOnInit(): void {
  
}


signup_info(){
  
    this.service.signup(this.signupform.value).subscribe(data=>{
      this.res=data
  
      
    if (this.res.status==="success"){
      this.router.navigateByUrl("")
    }else{
      alert("failed try useing different credintials")
    }
    })
    
 }
}

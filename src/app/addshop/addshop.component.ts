import { Component, OnInit } from '@angular/core';
import { ShopAppService } from "../service/shop-app.service";
import { FormBuilder, FormGroup, Validators, FormControl } from "@angular/forms";
import { Router } from "@angular/router";
@Component({
  selector: 'app-addshop',
  templateUrl: './addshop.component.html',
  styleUrls: ['./addshop.component.css']
})
export class AddshopComponent implements OnInit {
  shopForm: any;
  selectedFile: any;
  result: any;
  constructor(private fb: FormBuilder, private service: ShopAppService, private router: Router) { }

  ngOnInit(): void {
    this.shopForm = this.fb.group({
      "shop_name": new FormControl("", Validators.required),
      "address": new FormControl("", Validators.required),
      "city": new FormControl("", Validators.required),
      "phone": new FormControl("", Validators.required),

    })
  }


  onFileChange(event: any) {
    console.log(event.target.files[0]);

    this.selectedFile = event.target.files[0];
  }

  onSubmit() {
    
    const formData = new FormData();
    formData.append('shop_name', this.shopForm.get('shop_name').value);
    formData.append('address', this.shopForm.get('address').value);
    formData.append('city', this.shopForm.get('city').value);
    formData.append('phone', this.shopForm.get('phone').value);
    formData.append('image', this.selectedFile);

    if (localStorage.getItem('token')) {
      this.service.addShop(formData).subscribe(res => {
        console.log(res);
        this.result = res
        console.log(this.result.success);

        if (this.result.success) {
          alert("shop added")
          this.router.navigateByUrl("shops")
        }
      }, error => {
        console.log(error);
      });
    }else{
      this.router.navigateByUrl("")
      alert("please Login")
    }

  }

}


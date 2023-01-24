import { Component, OnInit } from '@angular/core';
import { ShopAppService } from "../service/shop-app.service";
import { Router } from '@angular/router'
@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shops: any
  responce: any
  constructor(private service: ShopAppService, private router: Router) { }
  resp: any
  ngOnInit(): void {
    if (localStorage.getItem('token')) {
      this.service.getShops()
        .subscribe( {
          next: (data) =>this.shops = data,
          error: (err)=> console.log(err)
          
        });
    } else {
      this.router.navigateByUrl("")
      alert("please Login")
    }
  }

  reidirectToShopDetail(id: any) {
    console.log(id);

    this.router.navigate(["shops/", id])

  }

  del_fun(id: any) {
    if (localStorage.getItem('token')) {
      this.service.dlete_Shop(id)
        .subscribe(res => {
          this.responce = res
          if (this.responce.status === 'deleted') {
            this.router.navigateByUrl("shops")
          } else {
            alert('unable to delete')
          }
        }, error => {
          console.log(error);
        });

    } else {
      this.router.navigateByUrl("")
      alert("please Login")
    }

  }

}

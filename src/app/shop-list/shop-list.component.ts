import { Component,OnInit } from '@angular/core';
import { ShopAppService } from "../service/shop-app.service";

@Component({
  selector: 'app-shop-list',
  templateUrl: './shop-list.component.html',
  styleUrls: ['./shop-list.component.css']
})
export class ShopListComponent implements OnInit {
  shops:any

constructor(private service:ShopAppService){}

ngOnInit(): void {
  this.service.getShops().then(res=>res.json()).then(data=>this.shops=data)
  console.log(this.shops);
  

  
}
}

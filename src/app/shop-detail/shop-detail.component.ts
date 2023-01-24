import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { ShopAppService } from "../service/shop-app.service";
@Component({
  selector: 'app-shop-detail',
  templateUrl: './shop-detail.component.html',
  styleUrls: ['./shop-detail.component.css']
})
export class ShopDetailComponent implements OnInit {
  shop_detail:any
constructor(private route:ActivatedRoute,private service:ShopAppService){}
ngOnInit(): void {
  let id = this.route.snapshot.paramMap.get("id")
  this.service.getShopDetail(id)
  .subscribe(data=>{
    this.shop_detail=data
  
  })
  }
}

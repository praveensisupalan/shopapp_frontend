import { Component, OnInit } from '@angular/core';
import { ShopAppService } from "../service/shop-app.service";
import { Router } from "@angular/router";
@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  data: any;
  constructor(private service: ShopAppService, private router: Router) { }

  ngOnInit(): void {

  }

  logout_click(event: Event) {
    if (localStorage.getItem('token')) {
      this.service.logout_fun().
        subscribe(res => {
          this.data = res
          if (this.data.status === "logged_out") {
            localStorage.removeItem('token');
            this.router.navigateByUrl("");
            alert("logged out");
          } else {
            this.router.navigateByUrl("");
            alert("please Login");
          };
        });
    }
  }
}

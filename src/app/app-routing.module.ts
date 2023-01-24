import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from './login/login.component'
import {ShopListComponent} from './shop-list/shop-list.component'
import { ShopDetailComponent } from "./shop-detail/shop-detail.component";
import {SignupComponent } from "./signup/signup.component";
import { AddshopComponent } from "./addshop/addshop.component";
const routes: Routes = [
{path:"",component:LoginComponent},
{path:"shops",component:ShopListComponent},
{path:"shops/:id",component:ShopDetailComponent},
{path:"signup",component:SignupComponent},
{path:"addshop",component:AddshopComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

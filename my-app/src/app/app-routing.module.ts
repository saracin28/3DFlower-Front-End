import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessoriesComponent} from "./components/accessories/accessories.component";
import {FlowersComponent} from "./components/flowers/flowers.component";
import {PotComponent} from "./components/pot/pot.component";
import {HomeComponent} from "./components/home/home.component";
import {RegisterComponent} from "./components/register/register.component";
import {OurProductsComponent} from "./components/our-products/our-products.component";
import {CartComponent} from "./components/cart/cart.component";
import {LoginComponent} from "./components/login/login.component";
import {PotSummaryComponent} from "./components/pot/pot-content/pot-summary/pot-summary.component";


const routes: Routes = [
  {path:"accessories",component:AccessoriesComponent},
  {path:"flowers",component:FlowersComponent},
  {path:"pot",component:PotComponent},
  {path:"home",component:HomeComponent},
  {path:"our-products",component:OurProductsComponent},
  {path:"cart",component:CartComponent},
  {path:"login",component:LoginComponent},
  {path:"register",component:RegisterComponent},
  {path:"pot/pot-summary",component:PotSummaryComponent},
  {path:"",component:HomeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

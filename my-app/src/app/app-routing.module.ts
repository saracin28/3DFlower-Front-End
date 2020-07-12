import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {AccessoriesComponent} from './components/accessories/accessories.component';
import {FlowersComponent} from './components/flowers/flowers.component';
import {PotComponent} from './components/pot/pot.component';
import {HomeComponent} from './components/home/home.component';
import {RegisterComponent} from './components/register/register.component';
import {OurProductsComponent} from './components/our-products/our-products.component';
import {CartComponent} from './components/cart/cart.component';
import {LoginComponent} from './components/login/login.component';
import {UserComponent} from './components/user/user.component';
import {PotContentComponent} from "./components/pot/pot-content/pot-content.component";
import {FlowerContentComponent} from "./components/flowers/flower-content/flower-content.component";
import {AccessoriesContentComponent} from "./components/accessories/accessories-content/accessories-content.component";

const routes: Routes = [
  {path: 'accessories', component: AccessoriesComponent},
  {path: 'flower', component: FlowersComponent},
  {path: 'pot', component: PotComponent},
  {path: 'home', component: HomeComponent},
  {path: 'our-products', component: OurProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'user', component: UserComponent},
  {path: 'login', component: LoginComponent},
  {path: 'pot/pot-content/:id', component: PotContentComponent},
  {path: 'flower/flower-content/:id', component: FlowerContentComponent},
  {path: 'accessories/accessories-content/:id', component: AccessoriesContentComponent},
  {path: '', component: HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

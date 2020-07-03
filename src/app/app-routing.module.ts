import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AccessoriesComponent} from "./components/accessories/accessories.component";
import {FlowersComponent} from "./components/flowers/flowers.component";
import {PotComponent} from "./components/pot/pot.component";


const routes: Routes = [
  {path:"accessories",component:AccessoriesComponent},
  {path:"flowers",component:FlowersComponent},
  {path:"pot",component:PotComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

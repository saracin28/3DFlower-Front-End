import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PotComponent } from './components/pot/pot.component';
import { PotContentComponent } from './components/pot/pot-content/pot-content.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { HomeComponent } from './components/home/home.component';
import { OurProductsComponent } from './components/our-products/our-products.component';
import { CartComponent } from './components/cart/cart.component';
<<<<<<< HEAD
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
=======
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { FlowersComponent } from './components/flowers/flowers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from "@angular/material/slider";
>>>>>>> 238be92bbd029d01d025ade2047ab7184b02cf5b

@NgModule({
  declarations: [
    AppComponent,
    PotComponent,
    PotContentComponent,
    LoginComponent,
    RegisterComponent,
    HomeComponent,
    OurProductsComponent,
    CartComponent,
    AccessoriesComponent,
    FlowersComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    BrowserAnimationsModule
=======
    BrowserAnimationsModule,
    MatSliderModule
>>>>>>> 238be92bbd029d01d025ade2047ab7184b02cf5b
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

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
import { AccessoriesComponent } from './components/accessories/accessories.component';
import { FlowersComponent } from './components/flowers/flowers.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSliderModule} from '@angular/material/slider';
import { FlowerContentComponent } from './components/flowers/flower-content/flower-content.component';

import {HttpServiceService} from './services/http/http-service.service';
import {HttpClientModule} from '@angular/common/http';
import { CustomMaterialModule } from './material.module';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AccessoriesContentComponent } from './components/accessories/accessories-content/accessories-content.component';
import { OurProductsContentComponent } from './components/our-products/our-products-content/our-products-content.component';
import {ConfirmEqualValidatorDirective} from "./components/register/confirm-equal-validator.directive";
import {UniqueUsernameDirective} from "./components/register/unique-username.directive";


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
    FlowerContentComponent,
    AccessoriesContentComponent,
    OurProductsContentComponent,
    ConfirmEqualValidatorDirective,
    UniqueUsernameDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSliderModule,
    HttpClientModule,
    CustomMaterialModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HttpServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

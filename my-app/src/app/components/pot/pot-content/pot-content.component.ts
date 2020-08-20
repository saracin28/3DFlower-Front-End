import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart/cart.service";
import {ProductType} from "../../../types/ProductType";
import {CartType} from "../../../types/CartType";
import {LoginService} from "../../../services/login/login.service";

@Component({
  selector: 'app-pot-content',
  templateUrl: './pot-content.component.html',
  styleUrls: ['./pot-content.component.css']
})
export class PotContentComponent implements OnInit {
  @Input() product: ProductType;
  @Input() cart: CartType
  quantity: number = 1;
  i = 1;

  constructor(private httpService: HttpServiceService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private login: LoginService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getPot(params.get("id")).subscribe((x) => {
        this.product = x;
        this.cart =x;
      })
    });
  }

  addToCart(product) {
    this.product.quantity=this.quantity;
    this.cartService.addToCart(product);
  }

  addCartToDataBase(cart) {
    this.cart.quantity = this.quantity;
    this.cart.user_id = this.login.getUserId();
    this.cartService.addToDB(cart)
    if (this.login.loggedIn === true) {
      this.httpService.addCart(this.cartService.itemsToDB[this.cartService.itemsToDB.length - 1]).subscribe(data => {
      });
    }
  }

  plus() {
    if (this.i != 10) {
      this.i++;
      this.quantity = this.i;
    }
  }

  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity = this.i;
    }
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart/cart.service";
import {ProductType} from "../../../types/ProductType";
import {LoginService} from "../../../services/login/login.service";
import {CartType} from "../../../types/CartType";

@Component({
  selector: 'app-accessories-content',
  templateUrl: './accessories-content.component.html',
  styleUrls: ['./accessories-content.component.css']
})
export class AccessoriesContentComponent implements OnInit {
  @Input() product: ProductType;
  @Input() cart: CartType;
  quantity: number = 1;
  i = 1;

  constructor(private httpService: HttpServiceService,
              private route: ActivatedRoute,
              private cartService: CartService,
              private login: LoginService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getAccessor(params.get("id")).subscribe((x) => {
        this.product = x;
        this.cart = x;
      })
    });
  }

  addToCart(product) {
    this.product.quantity = this.quantity;
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

  minus() {
    if (this.i != 1) {
      this.i--;
      this.quantity = this.i;
    }
  }
}

import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {ActivatedRoute} from "@angular/router";
import {ProductType} from "../../types/ProductType";
import {HttpServiceService} from "../../services/http/http-service.service";
import {LoginService} from "../../services/login/login.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  total: number = 0;
  product: ProductType;

  constructor(private cartService: CartService,
              private httpService: HttpServiceService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.items.forEach(i => {
        this.total += i.quantity * i.price;
      }
    )
  }

  clearCart() {
    this.items = [];
    this.cartService.clearCart();
    this.total = 0;
    return this.items;
  }

  removeOneElement(item) {
    this.total = 0;
    const i = this.items.indexOf(item);
    if (i !== -1) {
      this.items.splice(i, 1);
    }
    this.httpService.deleteCart(item.id).subscribe(()=>
      console.log("Cart Deleted"));
    this.items.forEach(i => {
        this.total += i.quantity * i.price;
      }
    )
  }

  removeElementFromDB(){

  }
}

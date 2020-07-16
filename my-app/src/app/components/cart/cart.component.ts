import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {ActivatedRoute} from "@angular/router";
import {ProductType} from "../../types/ProductType";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  total: number = 0;
  product: ProductType;

  constructor(private cartService: CartService) {


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
    this.items.forEach(i => {
        this.total += i.quantity * i.price;
      }
    )
  }
}

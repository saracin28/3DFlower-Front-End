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
  total: number=0;
  product: ProductType;

  constructor(private cartService: CartService) {
    for(let i=0;i<this.items;i++) {
      this.total += parseInt(this.items.quantity[i]) + parseInt(this.items.price[i]);
      console.log(this.items.quantity[i])
      console.log(this.items.price[i])
      console.log(this.total)
    }
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

  }

  clearCart() {
    this.items = [];
    this.cartService.clearCart();
    return this.items;
  }

  removeOneElement(name) {
    this.items = this.items.filter(item => item.name !== name);
    this.cartService.removeOneElement(name);
  }

}

import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();

  }

  clearCart() {
    this.items = [];
    this.cartService.clearCart();
    return this.items;
  }

  removeOneElement(name){
    this.items = this.items.filter(item => item.name !== name);
    this.cartService.removeOneElement(name);
  }
}

import { Injectable } from '@angular/core';
import {ProductType} from "../../types/ProductType";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeOneElement(name){
    this.items = this.items.filter(item => item.name !== name);
  }

}

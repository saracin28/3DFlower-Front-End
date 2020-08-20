import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items = [];
  itemsToDB = []

  addToCart(product) {
    this.items.push(product);
  }

  addToDB(product) {
    this.itemsToDB.push(product);
  }

  getItems() {
    return this.items;
  }

  getItemsFromDB() {
    return this.itemsToDB;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

  removeOneElement(item){
    const i = this.items.indexOf(item);
    if (i !== -1) {
      this.items.splice(i, 1);
    }
  }

}

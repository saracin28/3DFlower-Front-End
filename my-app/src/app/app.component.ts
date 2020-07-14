import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "./services/cart/cart.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  items;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.items = this.cartService.getItems();
  }

  removeOneElement(name){
    this.items = this.items.filter(item => item.name !== name);
    this.cartService.removeOneElement(name);
  }


}

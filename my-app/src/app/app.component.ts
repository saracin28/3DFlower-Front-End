import {Component, Input, OnInit} from '@angular/core';
import {CartService} from './services/cart/cart.service';


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

  removeOneElement(item){
    const i = this.items.indexOf(item);
    if (i !== -1) {
      this.items.splice(i, 1);
    }
  }


}

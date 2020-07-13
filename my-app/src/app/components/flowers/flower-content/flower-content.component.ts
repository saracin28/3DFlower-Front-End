import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart/cart.service";
import {ProductType} from "../../../types/ProductType";

@Component({
  selector: 'app-flower-content',
  templateUrl: './flower-content.component.html',
  styleUrls: ['./flower-content.component.css']
})
export class FlowerContentComponent implements OnInit {
  @Input() product: ProductType;

  constructor(private httpService: HttpServiceService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getFlower(params.get("id")).subscribe((x) => {
        this.product = x;
      })
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

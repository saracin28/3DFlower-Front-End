import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ActivatedRoute, Router} from "@angular/router";
import {CartService} from "../../../services/cart/cart.service";
import {ProductType} from "../../../types/ProductType";

@Component({
  selector: 'app-pot-content',
  templateUrl: './pot-content.component.html',
  styleUrls: ['./pot-content.component.css']
})
export class PotContentComponent implements OnInit {
  @Input() product: ProductType;
  loaded: boolean;

  constructor(private httpService: HttpServiceService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.loaded = false;
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getPot(params.get("id")).subscribe((x) => {
        this.product = x;
        this.loaded = true;
      })
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }

}

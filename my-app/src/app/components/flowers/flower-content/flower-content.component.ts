import {Component, Input, OnInit} from '@angular/core';
import {FlowersType} from "../../../types/FlowersType";
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart/cart.service";

@Component({
  selector: 'app-flower-content',
  templateUrl: './flower-content.component.html',
  styleUrls: ['./flower-content.component.css']
})
export class FlowerContentComponent implements OnInit {
  @Input() flower: FlowersType;

  constructor(private httpService: HttpServiceService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getFlower(params.get("id")).subscribe((x) => {
        this.flower = x;
      })
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

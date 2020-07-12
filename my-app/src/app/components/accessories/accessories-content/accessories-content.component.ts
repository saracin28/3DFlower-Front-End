import {Component, Input, OnInit} from '@angular/core';
import {FlowersType} from "../../../types/FlowersType";
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart/cart.service";
import {AccessoriesType} from "../../../types/AccessoriesType";

@Component({
  selector: 'app-accessories-content',
  templateUrl: './accessories-content.component.html',
  styleUrls: ['./accessories-content.component.css']
})
export class AccessoriesContentComponent implements OnInit {
  @Input() accessor: AccessoriesType;

  constructor(private httpService: HttpServiceService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getAccessor(params.get("id")).subscribe((x) => {
        this.accessor = x;
      })
    });
  }

  addToCart(product) {
    this.cartService.addToCart(product);
    window.alert('Your product has been added to the cart!');
  }
}

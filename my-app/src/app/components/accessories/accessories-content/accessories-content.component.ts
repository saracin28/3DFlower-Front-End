import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ActivatedRoute} from "@angular/router";
import {CartService} from "../../../services/cart/cart.service";
import {ProductType} from "../../../types/ProductType";

@Component({
  selector: 'app-accessories-content',
  templateUrl: './accessories-content.component.html',
  styleUrls: ['./accessories-content.component.css']
})
export class AccessoriesContentComponent implements OnInit {
  @Input() product: ProductType;
  quantity: number = 1;
  i = 1;

  constructor(private httpService: HttpServiceService,
              private route: ActivatedRoute,
              private cartService: CartService) {
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getAccessor(params.get("id")).subscribe((x) => {
        this.product = x;
      })
    });
  }

  addToCart(product) {
    this.product.quantity=this.quantity;
    this.cartService.addToCart(product);
  }



  plus() {
    if (this.i != 10) {
      this.i++;
      this.quantity = this.i;
    }
  }

  minus(){
    if(this.i !=1){
      this.i--;
      this.quantity = this.i;
    }
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ProductType} from "../../../types/ProductType";
import {CartService} from "../../../services/cart/cart.service";

@Component({
  selector: 'app-our-products-content',
  templateUrl: './our-products-content.component.html',
  styleUrls: ['./our-products-content.component.css']
})
export class OurProductsContentComponent implements OnInit {
  @Input() product: ProductType;
  quantity: number = 1;
  i = 1;

  constructor(private route: ActivatedRoute,
              private httpService: HttpServiceService,
              private cartService: CartService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getOurProduct(params.get("id")).subscribe((x) => {
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

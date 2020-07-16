import {Component, Input, OnInit} from '@angular/core';
import {ProductType} from "../../types/ProductType";
import {HttpServiceService} from "../../services/http/http-service.service";

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {
  @Input() products: ProductType[];

  constructor(private httpService: HttpServiceService) {
    this.windowOPen = false;
  }

  windowOPen: boolean;

  ngOnInit(): void {
    this.httpService.getOurProducts().subscribe(x => this.products = x);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from "../../services/http/http-service.service";
import {ProductType} from "../../types/ProductType";

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  @Input() products: ProductType[];

  constructor(private httpService: HttpServiceService) {
    this.windowOPen = false;
  }

  windowOPen: boolean;

  ngOnInit(): void {
    this.httpService.getAccessories().subscribe(x => this.products = x);
  }
}

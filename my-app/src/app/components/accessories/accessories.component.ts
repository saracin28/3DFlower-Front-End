import {Component, Input, OnInit} from '@angular/core';
import {CartService} from "../../services/cart/cart.service";
import {FlowersType} from "../../types/FlowersType";
import {HttpServiceService} from "../../services/http/http-service.service";
import {AccessoriesType} from "../../types/AccessoriesType";

@Component({
  selector: 'app-accessories',
  templateUrl: './accessories.component.html',
  styleUrls: ['./accessories.component.css']
})
export class AccessoriesComponent implements OnInit {
  @Input() accessories: AccessoriesType[];

  constructor(private httpService: HttpServiceService) {
    this.windowOPen = false;
  }

  windowOPen: boolean;

  ngOnInit(): void {
    this.httpService.getAccessories().subscribe(x => this.accessories = x);
  }
}

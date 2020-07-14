import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from "../../services/http/http-service.service";
import {ProductType} from "../../types/ProductType";

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
  @Input() product: ProductType[];

  constructor(private httpService: HttpServiceService) {
    this.windowOPen = false;
  }

  windowOPen: boolean;

  ngOnInit(): void {
    this.httpService.getFlowers().subscribe(x => this.product = x);
  }
}

import {Component, Input, OnInit} from '@angular/core';
import {HttpServiceService} from '../../services/http/http-service.service';
import {ProductType} from "../../types/ProductType";


@Component({
  selector: 'app-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['./pot.component.css']
})
export class PotComponent implements OnInit {
  @Input() product: ProductType[];

  constructor(private httpService: HttpServiceService) {
    this.windowOPen = false;
  }

  windowOPen: boolean;

  ngOnInit() :void {
    this.httpService.getPots().subscribe(x => this.product = x);
}
}




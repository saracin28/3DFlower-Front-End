import {Component, Input, OnInit} from '@angular/core';
import {PotsType} from '../../types/PotsType';
import {HttpServiceService} from '../../services/http/http-service.service';


@Component({
  selector: 'app-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['./pot.component.css']
})
export class PotComponent implements OnInit {
  @Input() pots: PotsType[];

  constructor(private httpService: HttpServiceService) {
    this.windowOPen = false;
  }

  windowOPen: boolean;

  ngOnInit() :void {
    this.httpService.getPots().subscribe(x => this.pots = x);

}
}




import {Component, Input, OnInit} from '@angular/core';
import{PotType} from '../../types/PotType';

@Component({
  selector: 'app-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['./pot.component.css']
})
export class PotComponent implements OnInit {
@Input() pots: PotType[];
  constructor() { }

  ngOnInit(): void {
    this.pots=[{name: "Circular Pot", price: 20, description: "Can add up to 5 flowers", image: "Not image"}]
  }

}

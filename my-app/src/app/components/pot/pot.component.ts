import {Component, Input, OnInit} from '@angular/core';
import {PotsType} from '../../types/PotsType';

@Component({
  selector: 'app-pot',
  templateUrl: './pot.component.html',
  styleUrls: ['./pot.component.css']
})
export class PotComponent implements OnInit {
  @Input() pots: PotsType[];

  constructor() {
  }

  ngOnInit(): void {
    this.pots = [{name: "Circular Pot", price: 20, description: "Can add up to 5 flowers", image: "No image"},
      {name: "Box Pot", price: 25, description: "Can add up to 10 flowers", image: "No image"}]
  }

}

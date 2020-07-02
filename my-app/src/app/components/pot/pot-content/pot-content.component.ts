import {Component, Input, OnInit} from '@angular/core';
import{PotsType} from '../../../types/PotsType';

@Component({
  selector: 'app-pot-content',
  templateUrl: './pot-content.component.html',
  styleUrls: ['./pot-content.component.css']
})
export class PotContentComponent implements OnInit {
@Input() pot: PotsType;
  constructor() { }

  ngOnInit(): void {
  }

}

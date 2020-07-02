import {Component, Input, OnInit} from '@angular/core';
import{PotType} from '../../../types/PotType';

@Component({
  selector: 'app-pot-content',
  templateUrl: './pot-content.component.html',
  styleUrls: ['./pot-content.component.css']
})
export class PotContentComponent implements OnInit {
@Input() pot: PotType;
  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {FlowersType} from "../../../types/FlowersType";

@Component({
  selector: 'app-flower-content',
  templateUrl: './flower-content.component.html',
  styleUrls: ['./flower-content.component.css']
})
export class FlowerContentComponent implements OnInit {
@Input() flower :FlowersType;

  constructor() { }

  ngOnInit(): void {
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {FlowersType} from "../../types/FlowersType";
import {HttpClient} from "@angular/common/http";
import {HttpServiceService} from "../../services/http/http-service.service";

@Component({
  selector: 'app-flowers',
  templateUrl: './flowers.component.html',
  styleUrls: ['./flowers.component.css']
})
export class FlowersComponent implements OnInit {
  @Input() flowers: FlowersType[];

  constructor(private httpService: HttpServiceService) {
  }

  ngOnInit(): void {
    this.httpService.getFlowers().subscribe(x => this.flowers = x);
  }
}

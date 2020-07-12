import {Component, Input, OnInit} from '@angular/core';
import {PotsType} from '../../../types/PotsType';
import {HttpServiceService} from "../../../services/http/http-service.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-pot-content',
  templateUrl: './pot-content.component.html',
  styleUrls: ['./pot-content.component.css']
})
export class PotContentComponent implements OnInit {
  @Input() pot: PotsType;
  loaded: boolean;

  constructor(private httpService: HttpServiceService,
              private route: ActivatedRoute,) {
  }

  ngOnInit(): void {
    this.loaded = false;
    this.route.paramMap.subscribe((params: any) => {
      this.httpService.getPot(params.get("id")).subscribe((x) => {
        this.pot = x;
        this.loaded = true;
      })
    });
  }

}

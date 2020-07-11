import {Component, Input} from '@angular/core';
import {PotsType} from "./types/PotsType";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-app';
  @Input() pots: PotsType[];

  ngOnInit(): void {

  }
}

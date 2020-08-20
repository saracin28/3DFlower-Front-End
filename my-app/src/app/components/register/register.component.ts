import {Component, OnInit} from '@angular/core';
import {HttpServiceService} from "../../services/http/http-service.service";
import {RegistersType} from "../../types/RegistersType";


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  newUser = new RegistersType();
  showSpinner: any;


  constructor(private httpService: HttpServiceService) {
  }

  ngOnInit(): void {
  }

  createUser(): void {
    this.httpService.postUser(this.newUser)
      .subscribe(data => {
        alert("User created successfully.");
      });
  }

}

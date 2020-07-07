import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  password: any;
  Confirm_password: any;
  username: any;
  showSpinner: any;
  email: any;

  constructor() { }

  ngOnInit(): void {
  }

  register():void {

  }
}

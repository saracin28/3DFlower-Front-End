import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpServiceService} from "../../services/http/http-service.service";
import {LoginService} from "../../services/login/login.service";
import {CookieService} from "angular2-cookie/core";
import {CartService} from "../../services/cart/cart.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private router: Router,
              private httpService: HttpServiceService,
              private login: LoginService,
              private cartService: CartService) {
  }

  items;
  users;
  username: string;
  password: string;
  showSpinner: any;

  ngOnInit(): void {
    this.httpService.getUsers().subscribe(x => this.users = x)
    this.httpService.getAllCarts().subscribe(x => this.items = x)
  }

  doLogin() {
    this.users.forEach(u => {
      if (this.username === u.username && this.password === u.password) {
        this.login.setUser(u.username);
        this.login.setUserId(u.id);
        this.router.navigate(['/home'])
        this.login.loggedIn = true;
        document.getElementById('login-button').style.pointerEvents = 'none';
        this.items.forEach(i=>{
          if(i.user_id === this.login.getUserId()){
            this.cartService.items = this.cartService.items.concat(i);
          }
        })
      }
    })
  }

}

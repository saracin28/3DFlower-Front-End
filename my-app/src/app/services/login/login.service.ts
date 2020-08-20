import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  user: string;
  id: number
  loggedIn = false;

  setUser(name: string) {
    this.user = name;
  }

  setUserId(id: number) {
    this.id = id
  }

  getUserName() {
    return this.user;
  }

  getUserId() {
    return this.id;
  }

  logOut() {
    this.loggedIn = false;
    this.user = "";
    document.getElementById('login-button').style.pointerEvents = 'all';
  }

}



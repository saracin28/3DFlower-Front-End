import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private userUrl: string;

  constructor(private http: HttpClient) {
    this.userUrl = 'http://localhost8080/user';
  }

}

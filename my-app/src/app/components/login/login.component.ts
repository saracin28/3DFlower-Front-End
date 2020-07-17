import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {RegistersType} from '../../types/RegistersType';
import {HttpServiceService} from '../../services/http/http-service.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  @Input() user: RegistersType;
  form: FormGroup;
  public loginInvalid: boolean;
  private formSubmitAttempt: boolean;
  private returnUrl: string;
  username: any;
  password: any;
  showSpinner: any;

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
  ) {
  }

  ngOnInit(): void {
    this.returnUrl = this.route.snapshot.queryParams.returnUrl;
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

  onSubmit() {
    this.loginInvalid = false;
    this.formSubmitAttempt = false;
    if (this.form.valid) {
      try {
        this.username = this.form.get('username').value;
        this.password = this.form.get('password').value;
      } catch (err) {
        this.loginInvalid = true;
      }
    } else {
      this.formSubmitAttempt = true;
    }
  }

  login() {
  }
}


//   constructor(private router: Router, private route: ActivatedRoute, private httpService: HttpServiceService
//   ) {
//   }
//
//   username: any;
//   password: any;
//   showSpinner: any;
//
//   ngOnInit(): void {
//   this.route.paramMap.subscribe((params: any) => {
//   this.httpService.getUserByName(params.get('user')).subscribe((x) => {
//   this.user = x;
// });
// });
// }
//
//
//   login(): void {
//     if (this.username) {
//       this.router.navigate(['user']);
//     } else {
//       alert('Invalid credentials');
//     }
//   }
// }

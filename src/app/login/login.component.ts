import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {
    username: '',
    password: ''
  }

  constructor(private _auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit() {
    this._auth.login(this.loginUserData)
      .subscribe(res => {
        console.log(res);
      }, err => {
        console.log(err);
      })
  }

}

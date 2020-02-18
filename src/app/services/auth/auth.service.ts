import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _loginUrl = "http://localhost:8080/api/auth/login";
  constructor(private http: HttpClient) { }

  login(user){
    return this.http.post<any>(this._loginUrl, user);
  }
}

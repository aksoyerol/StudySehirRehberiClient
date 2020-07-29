import { Injectable } from '@angular/core';
import { LoginModel } from '../models/login.model';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';
import { AlertifyService } from './alertify.service';
import { RegisterModel } from '../models/register.model';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private httpClient: HttpClient,
    private router: Router,
    private alertifyService: AlertifyService) { }

  TOKEN_KEY = 'token';
  userToken: any;
  jwtHelper = new JwtHelperService();
  path = "https://localhost:44398/api/auth";
  decodedToken: any;

  login(loginModel: LoginModel) {
    let headers = new HttpHeaders();
    headers.append("Content-Type", "application/json; charset=utf-8");
    this.httpClient.post(this.path + "/login", loginModel,{headers : headers}).subscribe(data => {
      this.saveToken(data['token'].toString());
      this.userToken = data['token'];
      this.decodedToken = this.jwtHelper.decodeToken(data['token']);
      this.alertifyService.success("Welcome ! Success login");
      setTimeout(() => this.router.navigateByUrl("city"), 3500);
    });
  }

  register(registerModel: RegisterModel) {
    let myHeaders = new HttpHeaders();
    myHeaders.append("Content-Type", "application/json");
    this.httpClient.post(this.path + "/Register", registerModel, { headers: myHeaders }).subscribe();
  }

  saveToken(token:any) {
   localStorage.setItem(this.TOKEN_KEY, token);
  }

  logout() {
    localStorage.removeItem(this.TOKEN_KEY);
  }

  loggedIn(): boolean{
    return this.jwtHelper.isTokenExpired(localStorage.getItem(this.TOKEN_KEY));
  }

  getCurrentUserId(){
    return this.jwtHelper.decodeToken(localStorage.getItem(this.TOKEN_KEY)).nameId;
  }


}

import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  loginUser: any = {}


  ngOnInit() {
  }

  login(loginUser: any) {
    this.authService.login(loginUser);
  }

  isAuthenticated(): boolean {
    return this.authService.loggedIn();
  }

  getCurrentUser() {
    return this.authService.getCurrentUserId();
  }

  logout() {
    this.authService.logout();
  }

}

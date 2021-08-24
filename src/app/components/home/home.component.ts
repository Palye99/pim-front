import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth';
import {User} from '../../models/user';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    if (this.authService && this.authService.userData) {
      this.user = this.authService.userData;
    }
  }

  signOut() {
    this.authService.SignOut();
  }
}

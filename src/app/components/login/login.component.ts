import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  name: string;
  password: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signInGoogle() {
    this.authService.GoogleAuth();
  }

  signIn() {
    this.authService.SignIn(this.name, this.password);
  }
}

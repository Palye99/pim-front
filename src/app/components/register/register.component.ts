import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  email: string;
  password: any;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  signUp() {
    this.authService.SignUp(this.email, this.password);
  }

  googleAuth() {
    this.authService.GoogleAuth();
  }

}

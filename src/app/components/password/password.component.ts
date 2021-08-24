import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.css']
})
export class PasswordComponent implements OnInit {

  email: string;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  resetPassword() {
    this.authService.ForgotPassword(this.email);
  }
}
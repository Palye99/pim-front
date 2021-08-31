import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth';
import {User} from '../../models/user';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  user: User;

  constructor(private authService: AuthService,
              private dialog: MatDialog) {
    // do nothing.
  }

  ngOnInit(): void {
    if (this.authService && this.authService.userData) {
      this.user = this.authService.userData;
    }
  }

  signOut() {
    this.authService.SignOut();
  }

  userInfo() {
    const ref = this.dialog.open(PopupComponent);
    console.log('modal info');
  }

  choice(val: number) {
    switch(val) {
      case 1:
        console.log('Java');
        break;
      case 2:
        console.log('JS');
        break;
      case 3:
        console.log('Bash');
        break;
    }

  }
}

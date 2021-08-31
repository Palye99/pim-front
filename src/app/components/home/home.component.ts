import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../services/auth';
import {User} from '../../models/user';
import {MatDialog} from '@angular/material/dialog';
import {PopupComponent} from '../popup/popup.component';
import {DockerService} from '../../services/docker.service';
import {takeUntil} from 'rxjs/operators';
import {DestroyedDirective} from '../../services/destroyed.directive';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent extends DestroyedDirective implements OnInit {
  user: User;

  constructor(private authService: AuthService,
              private dockerService: DockerService,
              private dialog: MatDialog) {
    super();
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
        this.dockerService.dockerChoice(1).pipe(takeUntil(this.destroyed)).subscribe(value => {
          console.log(value);
        });
        break;
      case 2:
        console.log('JS');
        this.dockerService.dockerChoice(1).pipe(takeUntil(this.destroyed)).subscribe(value => {
          console.log(value);
        });
        break;
      case 3:
        console.log('Bash');
        this.dockerService.dockerChoice(1).pipe(takeUntil(this.destroyed)).subscribe(value => {
          console.log(value);
        });
        break;
    }

  }
}

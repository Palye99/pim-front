import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

const PAGES_COMPONENT = [
  LoginComponent
];

@NgModule({
  declarations: [
    ...PAGES_COMPONENT
  ],
  imports: [
    CommonModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }

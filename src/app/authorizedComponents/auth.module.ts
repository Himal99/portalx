import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {AuthRoutingModule} from './auth-routing.module';
import {LoginComponent} from './login/login.component';
import {SignUpComponent} from './sign-up/sign-up.component';
import {ForgetPasswordComponent} from './forget-password/forget-password.component';
import {AuthComponent} from './auth/auth.component';
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatCheckboxModule} from '@angular/material/checkbox';
import {ToastrModule} from "ngx-toastr";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
@NgModule({
  declarations: [
    LoginComponent,
    SignUpComponent,
    ForgetPasswordComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    AuthRoutingModule,
    MatIconModule,
    MatProgressBarModule,
    FormsModule,
    ReactiveFormsModule,
    MatCheckboxModule,
    HttpClientModule,
    ToastrModule.forRoot({
      preventDuplicates: true,

    })
  ]
})
export class AuthModule {
}

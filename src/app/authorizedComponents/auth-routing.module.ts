import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthComponent} from "./auth/auth.component";
import {LoginComponent} from "./login/login.component";
import {SignUpComponent} from "./sign-up/sign-up.component";
import {ForgetPasswordComponent} from "./forget-password/forget-password.component";

const routes: Routes = [{
path: '',
  component: AuthComponent,
  children:[
    {
      path: '', redirectTo: 'login', pathMatch: 'full'
    },
    {
      path: 'login', component: LoginComponent,
      data: {animation: 'LoginPage' }
    },
    {
      path: 'signUp', component: SignUpComponent,
      data: {animation: 'signUpPage' }
    },{
  path: 'forgot-password',
      component: ForgetPasswordComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }

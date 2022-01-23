import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AlertService} from "../../@core/alertService/alert.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginForm: FormGroup = new FormGroup({});
localAccount: any;
  constructor(private router: Router,
              private formBuilder: FormBuilder,
              private alert: AlertService) { }

  ngOnInit(): void {
    localStorage.removeItem('portal-token')
    this.buildLoginForm();
  }

  buildLoginForm(): void{
    this.loginForm =this.formBuilder.group({
      name: [undefined],
      password: [undefined]
    })
  }

  logIn() {
    // Using localStorage for user credential

    this.localAccount = localStorage.getItem('demoAccount');
    if( this.loginForm.get('name')?.value === 'admin' &&
      this.loginForm.get('password')?.value === 'admin1234'){
      localStorage.setItem('portal-token','1234PX');
      localStorage.setItem('loggedInUserName', 'Super Admin');

    }
    if(this.localAccount !== null){
      JSON.parse(this.localAccount).forEach( (data: any)=>{
        if(this.loginForm.get('name')?.value === data?.email && this.loginForm.get('password')?.value === data?.password){
          localStorage.setItem('portal-token','1234PX');
          localStorage.setItem('loggedInUserName', data?.username);
        }
      })
    }
    if(localStorage.getItem('portal-token') === null){
      this.alert.showError('Invalid Username of Password')
    }
    this.router.navigate(['home'])

  }

  toSignUpPage() {
    this.router.navigate(['auth/signUp'])
  }
}

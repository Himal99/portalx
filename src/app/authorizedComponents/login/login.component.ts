import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AlertService} from "../../@core/alertService/alert.service";
import {AuthService} from "../service/auth.service";

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
              private alert: AlertService,
              private authService: AuthService) { }

  ngOnInit(): void {
    this.buildLoginForm();
    localStorage.removeItem('portal-token')

  }

  buildLoginForm(): void{
    this.loginForm =this.formBuilder.group({
      name: [undefined],
      password: [undefined]
    })
  }

  logIn() {
    const  data={
      email: this.loginForm.get('name')?.value,
      password: this.loginForm.get('password')?.value
    }
    this.authService.login(data).subscribe(res=>{
      localStorage.setItem('portal-token', res?.detail?.token);
      localStorage.setItem('loggedInUserName', res?.detail?.email);
    })
    if(localStorage.getItem('portal-token') === null){
      this.alert.showError('Invalid Username or Password')
    }
    this.router.navigate(['home'])

  }

  toSignUpPage() {
    this.router.navigate(['auth/signUp'])
  }
}

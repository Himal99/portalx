import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({});

  progressNumber: number = 1;
  progressPercent: number = 20;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm():void{
    this.signUpForm = this.formBuilder.group({
      phone: [undefined],
      userName: [undefined],
      email: [undefined],
      patchedPhone: [undefined],
      otp: [undefined],
password: [undefined],
      confirmPassword: [undefined]
    })
  }

  toLoginPage() {
    this.router.navigate(['auth/login'])
  }

  updateProgress() {
    if(this.progressNumber === 5){
      this.router.navigate(['auth/login'])
    }
    if(this.progressNumber === 3){
      this.signUpForm.get('patchedPhone')?.patchValue(this.signUpForm.get('phone')?.value);
    }
    this.progressNumber = this.progressNumber+1;
    this.progressPercent = this.progressPercent + 20;

  }

  backProgress() {
    this.progressNumber = this.progressNumber-1;
    this.progressPercent = this.progressPercent -20;
  }
}

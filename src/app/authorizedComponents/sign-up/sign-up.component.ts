import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {FormBuilder, FormGroup} from "@angular/forms";
import {ToastrService} from "ngx-toastr";
import {AlertService} from "../../@core/alertService/alert.service";

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup = new FormGroup({});

  progressNumber: number = 1;
  progressPercent: number = 20;
  disableButton: boolean = true;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private toastr: AlertService
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
    console.log(this.signUpForm.get('phone')?.value)
    if(this.progressNumber === 1 && this.signUpForm.get('phone')?.value === null){
      this.toastr.showToasterWarning("Phone number is required");
      return;
    }
    if(this.progressNumber === 5){
      this.toastr.showToasterInfo("successfully signed up");
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

  checkValidation(){
    console.log(this.signUpForm.get('phone')?.value)
    if(this.signUpForm.get('phone')?.value === null || this.signUpForm.get('phone')?.value === ''){
      this.disableButton = true;
    }else if (this.signUpForm.get('phone')?.value !== null || this.signUpForm.get('phone')?.value !== undefined) {
      this.disableButton = false;
    }
  }
}

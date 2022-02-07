import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSecHeader: boolean = false;
  loggedInUserName: any;
  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    this.loggedInUserName = localStorage.getItem('loggedInUserName');
  }

  signInPage() {
    this.router.navigate(['auth/login'])
  }

  openToogleHeader() {
    if(this.openSecHeader){
      this.openSecHeader = false
    }else {
      this.openSecHeader = true;
    }
  }

  loginPage() {
    this.router.navigate(['login'])
  }

  userProfile(): void{
    this.router.navigate(['/profile/user-profile'])
  }

  homePage() {
    this.router.navigate(['/home'])
  }
}

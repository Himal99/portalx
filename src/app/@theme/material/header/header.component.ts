import { Component, OnInit } from '@angular/core';
import {Router, RouterOutlet} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openSecHeader: boolean = false;

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
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
}

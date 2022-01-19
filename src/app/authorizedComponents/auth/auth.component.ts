import { Component, OnInit } from '@angular/core';
import {RouterOutlet} from "@angular/router";
import {slideInAnimation} from "../../@core/animation/animation";

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  animations: [
    slideInAnimation
  ]
})
export class AuthComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  prepareRoute(outlet: RouterOutlet) {
    return outlet?.activatedRouteData?.['animation'];
  }
}

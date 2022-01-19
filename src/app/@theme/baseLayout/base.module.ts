import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BaseRoutingModule } from './base-routing.module';
import { BaseLayoutComponent } from './base-layout/base-layout.component';
import {MaterialModule} from "../material/material.module";


@NgModule({
  declarations: [
    BaseLayoutComponent
  ],
  imports: [
    CommonModule,
    BaseRoutingModule,
    MaterialModule
  ]
})
export class BaseModule { }

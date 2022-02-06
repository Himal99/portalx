import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatIconModule
  ]
})
export class FeatureModule { }

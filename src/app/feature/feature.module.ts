import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeatureRoutingModule } from './feature-routing.module';
import { FeatureComponent } from './feature.component';
import { HomeComponent } from './home/home.component';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import { EmployeeLandingPageComponent } from './landingPage/employee-landing-page/employee-landing-page.component';
import { SearchResultPageComponent } from './vacancySearchedResult/search-result-page/search-result-page.component';
import { VacancyDetailComponent } from './vacancyDetail/vacancy-detail/vacancy-detail.component';
import {MaterialModule} from "../@theme/material/material.module";


@NgModule({
  declarations: [
    FeatureComponent,
    HomeComponent,
    EmployeeLandingPageComponent,
    SearchResultPageComponent,
    VacancyDetailComponent
  ],
  imports: [
    CommonModule,
    FeatureRoutingModule,
    MatIconModule,
    MaterialModule
  ]
})
export class FeatureModule { }

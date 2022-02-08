import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './components/profile/profile.component';
import { AddProfileComponent } from './components/addProfile/add-profile.component';
import {MatStepperModule} from '@angular/material/stepper';
import {MatFormFieldModule} from "@angular/material/form-field";
import {ReactiveFormsModule} from "@angular/forms";
import {MatIconModule} from "@angular/material/icon";
import {MatProgressBar, MatProgressBarModule} from "@angular/material/progress-bar";
import { CvUploadModalComponent } from './components/cv-upload-modal/cv-upload-modal.component';
import {NgbModalRef} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    ProfileComponent,
    AddProfileComponent,
    CvUploadModalComponent
  ],
  imports: [
    CommonModule,
    ProfileRoutingModule,
    MatStepperModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatIconModule,
    MatProgressBarModule,

  ]
})
export class ProfileModule { }

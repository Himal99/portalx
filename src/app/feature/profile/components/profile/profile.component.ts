import { Component, OnInit } from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CvUploadModalComponent} from "../cv-upload-modal/cv-upload-modal.component";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private modal: NgbModal) { }

  ngOnInit(): void {
  }

  uploadCv(){
  const   modal = this.modal.open(CvUploadModalComponent);

  }

}

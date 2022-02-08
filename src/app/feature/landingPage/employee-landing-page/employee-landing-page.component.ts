import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {DummyJson} from "../../../@core/jsonFile/dummyJson";

@Component({
  selector: 'app-employee-landing-page',
  templateUrl: './employee-landing-page.component.html',
  styleUrls: ['./employee-landing-page.component.scss']
})
export class EmployeeLandingPageComponent implements OnInit {

  constructor() { }

  @Output() vacancyDetail = new EventEmitter<boolean>();
  dummyJsonData = DummyJson.dummyJsonForVacancyPost;

  ngOnInit(): void {
  }

  showDetail(b: boolean) {
    this.vacancyDetail.emit(b);
  }
}

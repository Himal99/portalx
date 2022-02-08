import { Component, OnInit } from '@angular/core';
import {ProfileService} from "../profile/service/profile.service";
import {AlertService} from "../../@core/alertService/alert.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  dummyData: any;
  showSearchPage: boolean = false;
  showVacancyDetail: boolean= false;
  showLandingPage: boolean = true;
  constructor(
    private profileService: ProfileService,
    private alert: AlertService
  ) { }

  ngOnInit(): void {
    this.profileService.getAll().subscribe( res=>{
      console.log(res)
this.dummyData = res;
      res.forEach( (data:any)=>{
        console.log(data?.body)
      })
    })
  }

  deleteData(id: any) {
this.profileService.deleteById(id).subscribe( res=>{
  this.alert.showSuccess('Successfully deleted')
})
  }

  showSearchResult(){
    this.showSearchPage= true;
    this.showLandingPage = false;
    this.showVacancyDetail = false;
  }

  changeEvent(event: boolean){
    console.log(event)
    this.showSearchPage =false;
    this.showLandingPage = true;
  }

  detailPage($event: boolean) {
    this.showVacancyDetail = $event;
    this.showLandingPage = false;
  }
}

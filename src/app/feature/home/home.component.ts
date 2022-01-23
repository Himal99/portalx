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
}

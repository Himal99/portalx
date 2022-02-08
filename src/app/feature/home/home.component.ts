import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ProfileService} from "../profile/service/profile.service";
import {AlertService} from "../../@core/alertService/alert.service";
import {jsPDF} from 'jspdf';
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
  name = 'Angular Html To Pdf ';

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef | undefined;

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


  public downloadAsPDF() {
    const doc = new jsPDF('p', 'pt', 'letter');
    //
    // const specialElementHandlers = {
    //   '#editor': function (element: any, renderer: any) {
    //     return true;
    //   }
    // };

    // @ts-ignore
    // const pdfTable = this.pdfTable.nativeElement;
    //

    // doc.fromHTML(pdfTable.innerHTML, 15, 15, {
    //   width: 190,
    //   'elementHandlers': specialElementHandlers
    // });

    // @ts-ignore
    doc.html(document.getElementById('pdfTable'), {
      callback: function (pdf) {
        var iframe = document.createElement('iframe');
        iframe.setAttribute('style', 'height:100%; width:100%');
        document.body.appendChild(iframe);
        iframe.src = pdf.output('datauristring');
      }
    });
    doc.save('test.pdf');
  }

}

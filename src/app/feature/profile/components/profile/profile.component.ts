import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {CvUploadModalComponent} from "../cv-upload-modal/cv-upload-modal.component";
import {FileSystemDirectoryEntry, FileSystemFileEntry, NgxFileDropEntry} from "ngx-file-drop";
import {jsPDF} from "jspdf";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(private modal: NgbModal) { }
  name = 'Angular Html To Pdf ';

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef | undefined;
  ngOnInit(): void {
  }



  uploadCv(){
  const   modal = this.modal.open(CvUploadModalComponent);

  }

  public downloadAsPDF() {
    const doc = new jsPDF('p', 'px', 'letter');
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
        iframe.setAttribute('style', 'height:100%; width:500px');
        document.body.appendChild(iframe);
        iframe.src = pdf.output('datauristring');
      }
    });
    doc.save('test.pdf');
  }

}

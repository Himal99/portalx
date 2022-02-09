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
  private items: any;

  constructor(private modal: NgbModal) { }
  name = 'Angular Html To Pdf ';

  @ViewChild('pdfTable', {static: false}) pdfTable: ElementRef | undefined;
  ngOnInit(): void {
  }



  uploadCv(){
  const   modal = this.modal.open(CvUploadModalComponent);

  }

  public downloadAsPDF() {
    let data: Array<any> = new Array;
    let i = 1;
  let  obj = {
      nr: 'i',
      codart: 'el.Code',
      codvar: 'el.Var',
      qty: 'el.Qty'
    };
    data.push(obj);
    let header = ["nr", "codart", "codvar", "qty"];
    let headerConfig = header.map(key => ({
      'name': key,
      'prompt': key,
      'width': 50,
      'align': 'center',
      'padding': 0
    }));
    const pdf = new jsPDF();
    pdf.setFont("calibri");
    pdf.setFontSize(14);
    pdf.text(`By ds`, 10, 5);
    // @ts-ignore
    pdf.table(10, 20, data, header, headerConfig);
    try {
      pdf.save(`sas.pdf`);
    } catch (error) {
      console.log(error);
    }
  }

}

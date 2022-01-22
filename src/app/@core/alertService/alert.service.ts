import { Injectable } from '@angular/core';
import {ToastrService} from "ngx-toastr";

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(
    private toastService: ToastrService
  ) { }

  public showSuccess(message: string){
    this.toastService.success(message, 'Portal-X',{
      timeOut: 2000,
      positionClass: 'toast-bottom-right',
      progressAnimation: 'decreasing'
    });
  }

  showError(message: string){
    this.toastService.error(message, 'Portal-X',
      {
        timeOut: 2000,
        positionClass: 'toast-bottom-right',
        progressAnimation: 'decreasing'
      })
  }

  showToasterInfo(message: string){
    this.toastService.info(message, 'Portal-X',{
      timeOut: 3000,
      positionClass: 'toast-bottom-right',
      progressAnimation: 'decreasing'
    })
  }

  showToasterWarning(message: string){
    this.toastService.warning(message, 'Portal-X',
      {
        timeOut: 2000,
        positionClass: 'toast-bottom-right',
        progressAnimation: 'decreasing'
      })
  }
}

import { Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCount =  0;

  constructor(private spinnerService: NgxSpinnerService) { }

  busy() {
    this.busyRequestCount++;
    this.spinnerService.show(undefined, {
      bdColor: 'rgba(51,51,51,0.8)',
      color: '#333333',
      type: 'line-scale-party',
    })
  }


  idle() {
    this.busyRequestCount--;
    console.log(this.busyRequestCount);
    if(this.busyRequestCount <= 0) {
      console.log('this is fucking shit');
      this.busyRequestCount = 0;
      this.spinnerService.hide();
    }
  }
}

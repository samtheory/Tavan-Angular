import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import jalaali from 'jalaali-js';
import { ToastrService } from 'ngx-toastr';
import { Off } from 'src/app/_models/off';
import { OffService } from 'src/app/_services/off.service';

@Component({
  selector: 'app-p-a-discount-new',
  templateUrl: './p-a-discount-new.component.html',
  styleUrls: ['./p-a-discount-new.component.css']
})
export class PADiscountNewComponent implements OnInit {
  dateOfExpire: String = '2020-10-12';
  off: any = {};
  constructor(private offService: OffService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }


  createOff() {
    this.off.expired_at = this.FinishDateChange(this.off.expired_at);
    this.offService.createOff(this.off).subscribe(next => {
      this.toastr.success('باموفقیت ایجاد شد');
      this.router.navigate(['/admin/discount']);
    })
  }

  FinishDateChange(value: String) {
    var m = jalaali.toGregorian(1395, 1, 23);
    let yyyy: Number = Number(value.slice(0, 4));
    let mm: Number = Number(value.slice(5, 7));
    let dd: Number = Number(value.slice(8, 10));

    let g = jalaali.toGregorian(yyyy, mm, dd);
    value = g.gy + '-' + g.gm + '-' + g.gd;
    this.dateOfExpire = value;
    console.log(value);
    return value;
  }

}

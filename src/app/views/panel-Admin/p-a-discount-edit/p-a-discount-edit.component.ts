import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Off } from 'src/app/_models/off';
import jalaali from 'jalaali-js';
import { OffService } from 'src/app/_services/off.service';

@Component({
  selector: 'app-p-a-discount-edit',
  templateUrl: './p-a-discount-edit.component.html',
  styleUrls: ['./p-a-discount-edit.component.css']
})
export class PADiscountEditComponent implements OnInit {
  off: Off;
  constructor(private offService: OffService, private toastr: ToastrService, private router: Router , private route: ActivatedRoute ) { }

  ngOnInit(): void {
    this.getOff();
  }

  getOff() {
    this.offService.getOff(this.route.snapshot.params['id']).subscribe(off => {
      this.off = off;
    })
  }


  updateOff() {
    this.off.expired_at = this.FinishDateChange(this.off.expired_at);
    this.offService.updateOff(this.route.snapshot.params['id'] , this.off).subscribe(next => {
      this.toastr.success('با موفقیت آپدیت شد');
      this.router.navigate(['/admin/discount']);
    });
  }


  FinishDateChange(value: String) {
    var m = jalaali.toGregorian(1395, 1, 23);
    let yyyy: Number = Number(value.slice(0, 4));
    let mm: Number = Number(value.slice(5, 7));
    let dd: Number = Number(value.slice(8, 10));

    let g = jalaali.toGregorian(yyyy, mm, dd);
    value = g.gy + '-' + g.gm + '-' + g.gd;
    console.log(value);
    return value;
  }

}

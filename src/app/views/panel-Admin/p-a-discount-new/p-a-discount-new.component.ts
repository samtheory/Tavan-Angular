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
  off: Off;
  constructor(private offService: OffService, private toastr: ToastrService, private router: Router) { }

  ngOnInit(): void {
  }


  createOff() {
    this.offService.createOff(this.off).subscribe(next => {
      this.toastr.success('باموفقیت ایجاد شد');
      this.router.navigate(['/admin/discount']);
    })
  }

}

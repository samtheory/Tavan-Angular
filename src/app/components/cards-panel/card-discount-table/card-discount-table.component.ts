import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Off } from 'src/app/_models/off';
import { OffService } from 'src/app/_services/off.service';

@Component({
  selector: 'app-card-discount-table',
  templateUrl: './card-discount-table.component.html',
  styleUrls: ['./card-discount-table.component.css']
})
export class CardDiscountTableComponent implements OnInit {
@Input() offs: Off[];

  
  constructor(private offService: OffService, private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  deleteOff(id: number) {
    this.offService.deleteOff(id).subscribe(next => {
      this.toastr.success('با موفقیت حذف شد');
    })
  }

}

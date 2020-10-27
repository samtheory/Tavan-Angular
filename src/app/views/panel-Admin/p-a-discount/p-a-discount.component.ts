import { Component, OnInit } from '@angular/core';
import { Off } from 'src/app/_models/off';
import { OffService } from 'src/app/_services/off.service';

@Component({
  selector: 'app-p-a-discount',
  templateUrl: './p-a-discount.component.html',
  styleUrls: ['./p-a-discount.component.css']
})
export class PADiscountComponent implements OnInit {
  offs: Off[];
  constructor(private offService: OffService) { }

  ngOnInit(): void {
    this.getoffs();
  }


  getoffs(){
    this.offService.getOffs().subscribe(offs => {
      this.offs = offs;
    })
  }

}

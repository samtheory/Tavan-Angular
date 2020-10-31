import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-pay-chech',
  templateUrl: './pay-chech.component.html',
  styleUrls: ['./pay-chech.component.css']
})
export class PayChechComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getParams();
  }

   getParams()
    {
      const status = this.route.snapshot.paramMap.get('Status')
      console.log(status);
      const authority = this.route.snapshot.paramMap.get('Authority');
      console.log(authority);
    }

}

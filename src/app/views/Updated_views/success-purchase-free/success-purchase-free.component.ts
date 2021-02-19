import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success-purchase-free',
  templateUrl: './success-purchase-free.component.html',
  styleUrls: ['./success-purchase-free.component.css']
})
export class SuccessPurchaseFreeComponent implements OnInit {

  constructor(private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gotoPanel();
  }


  gotoPanel()
  {
    setTimeout(() => {
      this.router.navigate(['customer-panel']);
  }, 30000);
  }

}

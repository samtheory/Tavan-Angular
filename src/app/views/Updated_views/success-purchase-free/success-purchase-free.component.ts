import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-success-purchase-free',
  templateUrl: './success-purchase-free.component.html',
  styleUrls: ['./success-purchase-free.component.css']
})
export class SuccessPurchaseFreeComponent implements OnInit {
timer: any;
  constructor(private router: Router , private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.gotoPanel();
  }


  gotoPanel()
  {
    this.timer = setTimeout(() => {
      this.router.navigate(['customer-panel']);
  }, 30000);
  }



  gotowebinar(id: number)
  {
    clearTimeout(this.timer);
    this.router.navigate(['webinar/' , id]);
  }

  gotoDashboard()
  {
    clearTimeout(this.timer);
    this.router.navigate(['customer-panel']);
  }

  gotoMain()
  {
    clearTimeout(this.timer);
    this.router.navigate(['']);
  }

}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Order } from 'src/app/_models/order';
import { PaymentService } from 'src/app/_services/payment.service';

@Component({
  selector: 'app-success-purchase-u',
  templateUrl: './success-purchase-u.component.html',
  styleUrls: ['./success-purchase-u.component.css']
})
export class SuccessPurchaseUComponent implements OnInit {
  payParams: any = {};
  Ok: number = 0;
  order: Order;
  timer: any;
  constructor(private route: ActivatedRoute, private payService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.getParams();
  }


  gotoProduct()
  {
    this.router.navigate(['/webinar/' , this.order.productId]);
  }

   getParams()
    {
      const id = this.route.snapshot.params['id'];
      this.route.queryParams.subscribe(params => {
       this.payParams.status = params['Status'];
       this.payParams.authority = params['Authority'];
      });

      if(this.payParams.status === 'NOK'){
        this.Ok = -1;
      }

      console.log(this.payParams);

      this.payService.verifyPayment(this.payParams , id).subscribe(next => {
        this.order = next;
        this.Ok = 1;
        this.timer = setTimeout(() => {
          this.router.navigate(['customer-panel']);
      }, 30000);
      }, error => {
        this.Ok = -1;
      });

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

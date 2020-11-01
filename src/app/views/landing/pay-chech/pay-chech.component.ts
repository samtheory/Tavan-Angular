import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PaymentParams } from 'src/app/_models/paymentParams';
import { PaymentService } from 'src/app/_services/payment.service';

@Component({
  selector: 'app-pay-chech',
  templateUrl: './pay-chech.component.html',
  styleUrls: ['./pay-chech.component.css']
})
export class PayChechComponent implements OnInit {
  payParams: any = {};
  Ok: boolean;
  constructor(private route: ActivatedRoute, private payService: PaymentService, private router: Router) { }

  ngOnInit(): void {
    this.getParams();
  }

   getParams()
    {
      const id = this.route.snapshot.params['id'];
      this.route.queryParams.subscribe(params => {
       this.payParams.status = params['Status'];
       this.payParams.authority = params['Authority'];
      });

      console.log(this.payParams);

      this.payService.verifyPayment(this.payParams , id).subscribe(next => {
        this.Ok = true;
        setTimeout(() => {
          this.router.navigate(['Customer/dashboard']);
      }, 10000);
      }, error => {
        this.Ok = false;
      })

    }

}

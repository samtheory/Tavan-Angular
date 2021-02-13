import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { faq } from 'src/app/_Constant/data';
import { Ticket } from 'src/app/_models/ticket';
import { AuthService } from 'src/app/_services/auth.service';
import { TicketService } from 'src/app/_services/ticket.service';



@Component({
  selector: 'app-faq-u',
  templateUrl: './faq-u.component.html',
  styleUrls: ['./faq-u.component.scss']
})
export class FAQUComponent implements OnInit {
  DB_const = { faq };
  toggle = [
    {
    question: `asdsad
    asda
    d
    ad
    a
    dsa
    dasd`,
    answer : "",
    isOpen : "false"
  }
];
  model: any = {};
  dialog = false;
  toggleFN(i: number) {
    this.toggle[i] = !this.toggle[i];
  }

  ticket: any = {};

  constructor(private ticketService: TicketService, private toastr: ToastrService, private authService: AuthService) { }




  ngOnInit() {

  }

  logedIn() {
    return this.authService.logedIn();
  }

  sendTicket() {
    if (this.logedIn() == true) {
      this.ticketService.createTicket(this.ticket).subscribe(next => {
        this.toastr.success("تیکت با موفقیت ثبت شد");
      });

    } else {
      this.openDialog();
    }
  }
  openDialog() {
    this.dialog = true;
  }
  hideDialog() {

    this.dialog = false;
  }

  loginreal() {
    this.authService.login(this.model).subscribe(response => {
      console.log(response);
      this.hideDialog();
      // if(this.authService.decodeToken.role === 'admin'){
      //   this.router.navigate(['/admin/dashboard']);
      // } else {
      //   this.router.navigate(['/customer-panel']);
      // }
    });
  }

}


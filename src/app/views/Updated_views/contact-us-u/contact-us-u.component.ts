import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { contactUs } from 'src/app/_Constant/data';
import { AuthService } from 'src/app/_services/auth.service';
import { TicketService } from 'src/app/_services/ticket.service';

@Component({
  selector: 'app-contact-us-u',
  templateUrl: './contact-us-u.component.html',
  styleUrls: ['./contact-us-u.component.css']
})
export class ContactUsUComponent implements OnInit {
  DB_const = { contactUs };
  model: any = {};
  dialog = false;
  ticket: any = {};


  constructor(private ticketService: TicketService, private toastr: ToastrService, private authService: AuthService) { }


  ngOnInit() { }

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

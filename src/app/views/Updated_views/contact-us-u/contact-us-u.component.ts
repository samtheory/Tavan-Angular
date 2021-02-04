import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { contactUs } from 'src/app/_Constant/data';
import { TicketService } from 'src/app/_services/ticket.service';

@Component({
  selector: 'app-contact-us-u',
  templateUrl: './contact-us-u.component.html',
  styleUrls: ['./contact-us-u.component.css']
})
export class ContactUsUComponent implements OnInit {
  DB_const = { contactUs };

  ticket: any ={};
 

  constructor(private ticketService: TicketService, private toastr: ToastrService, public dialog: MatDialog){}

  


ngOnInit() {

}

sendTicket(){
  this.ticketService.createTicket(this.ticket).subscribe(next => {
    this.toastr.success("تیکت با موفقیت ثبت شد");
  })
}
  openDialogNotVerify() {
    this.dialog.open(NotLoginDialog);
  }
}


//------------------------------------------------------------------------------------------------
// .:: Forgot Password module Class 
//------------------------------------------------------------------------------------------------
@Component({
  // selector: 'dialog-forgot-pass',
  templateUrl: 'not-login-dialog.html',
})

export class NotLoginDialog {
  constructor(public dialog: MatDialog, private router: Router) { }


  closeDialog() {
    this.dialog.closeAll();
  }

  register() {
    this.router.navigate(['/register']);
    this.dialog.closeAll();
  }

  login() {
    this.router.navigate(['/login']);
    this.dialog.closeAll();
  }
}
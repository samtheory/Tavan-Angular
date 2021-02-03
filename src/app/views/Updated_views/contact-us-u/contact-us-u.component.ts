import { Component, OnInit } from '@angular/core';
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

  ticket: any;

  constructor(private ticketService: TicketService, private toastr: ToastrService){}

  


ngOnInit() {

}

sendTicket(){
  this.ticketService.createTicket(this.ticket).subscribe(next => {
    this.toastr.success("تیکت با موفقیت ثبت شد");
  })
}

}

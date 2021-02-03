import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { faq } from 'src/app/_Constant/data';
import { Ticket } from 'src/app/_models/ticket';
import { TicketService } from 'src/app/_services/ticket.service';



@Component({
  selector: 'app-faq-u',
  templateUrl: './faq-u.component.html',
  styleUrls: ['./faq-u.component.scss']
})
export class FAQUComponent implements OnInit {
  DB_const = { faq };
  toggle = [false, false, false, false, false, false, false];

  toggleFN(i: number) {
    this.toggle[i] = !this.toggle[i];
  }

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

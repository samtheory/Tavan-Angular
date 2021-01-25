import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/_models/ticket';
import { TicketService } from 'src/app/_services/ticket.service';

@Component({
  selector: 'app-p-a-ticket-single',
  templateUrl: './p-a-ticket-single.component.html',
  styleUrls: ['./p-a-ticket-single.component.css']
})
export class PATicketSingleComponent implements OnInit {
ticket: Ticket;
  constructor(private ticketService: TicketService , private toastr: ToastrService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.getTicket(this.route.snapshot.params['id']);
  }


  getTicket(id: number) {
    this.ticketService.getTicket(id).subscribe(ticket => {
      this.ticket = ticket;
      console.log(this.ticket);
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Ticket } from 'src/app/_models/ticket';
import { TicketService } from 'src/app/_services/ticket.service';

@Component({
  selector: 'app-p-a-ticket',
  templateUrl: './p-a-ticket.component.html',
  styleUrls: ['./p-a-ticket.component.css']
})
export class PATicketComponent implements OnInit {
tickets: Ticket[];
  constructor(private ticketService: TicketService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.getTickets();
  }

  getTickets(){
    this.ticketService.getTickets().subscribe(tickets => {
      this.tickets = tickets;
    })
  }

}

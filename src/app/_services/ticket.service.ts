import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Order } from '../_models/order';
import { Ticket } from '../_models/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseUrl = environment.apiUrl + 'ticket/';
  constructor(private http: HttpClient) { }

  getTickets(): Observable<Ticket[]>{
    return this.http.get<Ticket[]>(this.baseUrl);
  }

  getTicket(id: number): Observable<Ticket>{
    return this.http.get<Ticket>(this.baseUrl + id);
  }

  createTicket(ticket: Ticket){
    return this.http.post(this.baseUrl + 'create' , ticket);
  }
}

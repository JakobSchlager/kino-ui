import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ITicket } from './model/ticket';

@Injectable({
  providedIn: 'root'
})
export class TicketService {
  baseURL = '/api/tickets';

  constructor(private http: HttpClient) { }

  getAllTickets()
  {
    return this.http.get<ITicket[]>(this.baseURL);
  }

  getAllSeats(id: number)
  {
    return this.http.get<number[]>(this.baseURL + '/presentation/' + id);
  }

  postNewTicket(ticket: ITicket)
  {
    return this.http.post<ITicket>(this.baseURL, ticket);
  }

  putUpdateTicket(id: number, ticket: ITicket)
  {
    return this.http.put<ITicket>(this.baseURL + '/' + id, ticket);
  }

}

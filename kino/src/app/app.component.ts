import { Component, OnInit } from '@angular/core';
import { MovieService } from './core/services/movie.service';
import { TicketService } from './core/services/ticket.service';
import { IMovie } from './model/movie';
import { IPresentation } from './model/presentation';
import { ITicket } from './model/ticket';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'kino';
  status: number = 0;
  movies: IMovie[] = [];
  presentations: IPresentation[] = [];
  pickedPresentation!: IPresentation;
  pickedMovieId!: number;
  globalTickets: ITicket[] = [];

  constructor(
    private movieService: MovieService,
    private ticketService: TicketService
  ) {}

  ngOnInit(): void {
    this.movieService.getAllMovies().subscribe((x) => (this.movies = x));
  }

  pickMovie(id: number) {
    //console.log(id);
    this.pickedMovieId = id;
    this.setStatus(33.33);
    this.movieService
      .getPresentationsOfMovie(id)
      .subscribe((x) => (this.presentations = x));
  }

  pickPresentation(present: IPresentation) {
    //console.log(present.id);
    this.pickedPresentation = present;
    this.setStatus(66.66);
  }

  pickedTickets(tickets: ITicket[]) {
    console.log(tickets);
    this.setStatus(99.99);
    tickets.forEach((x) =>
      this.ticketService
        .postNewTicket(x)
        .subscribe((x) => this.globalTickets.push(x))
    );
  }

  setStatus(percent: number) {
    this.status = percent;
  }

  setStatusFront(percent: number) {
    if (percent < this.status && this.status != 99.99) {
      this.status = percent;
    }
  }
}

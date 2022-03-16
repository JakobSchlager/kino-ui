import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IRoom } from 'src/app/model/room';
import { ISeat } from 'src/app/model/seat';

@Injectable({
  providedIn: 'root',
})
export class RoomService {
  baseURLroom = '/api/rooms';
  baseURLseat = '/api/seats';

  constructor(private http: HttpClient) {}

  getAllRooms() {
    return this.http.get<IRoom[]>(this.baseURLroom);
  }

  getOneRoom(id: number) {
    return this.http.get<IRoom>(this.baseURLroom + '/' + id);
  }

  getAllSeats() {
    return this.http.get<ISeat[]>(this.baseURLseat);
  }

  getOneSeat(id: number) {
    return this.http.get<ISeat>(this.baseURLseat + '/' + id);
  }
}

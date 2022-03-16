import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMovie } from 'src/app/model/movie';
import { IPresentation } from 'src/app/model/presentation';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  baseURL = '/api/movies';
  baseURLPrezi = '/api/presentations';

  constructor(private http: HttpClient) { }

  getAllMovies()
  {
    return this.http.get<IMovie[]>(this.baseURL);
  }

  getOneMovie(id: number)
  {
    return this.http.get<IMovie>(this.baseURL + '/' + id);
  }

  getPresentationsOfMovie(id: number)
  {
    return this.http.get<IPresentation[]>(this.baseURL + '/' + id + '/presentations');
  }

  getSinglePresentation(id: number)
  {
    return this.http.get<IPresentation>(this.baseURLPrezi + '/' + id);
  }

}
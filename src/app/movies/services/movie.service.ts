import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";
import {Observable} from "rxjs";
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private SERVER_URL:string= "http://localhost:3000/movies";
  private moviesObservable:Observable<Movie[]>;

  constructor(private http: HttpClient) {
    this.moviesObservable = this.http.get<Movie[]>(this.SERVER_URL);
  }

  getMovies():Observable<Movie[]>{
    return this.moviesObservable;
  }
}

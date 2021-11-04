import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";
import {Observable} from "rxjs/";

import {HttpClient} from '@angular/common/http';
import { Subject } from 'rxjs/internal/Subject';
import {catchError} from "rxjs/operators";
import { of } from 'rxjs/internal/observable/of';

@Injectable({
  providedIn: 'root'
})
export class MovieService {
  private SERVER_URL:string= "http://localhost:3000/movies";
  private moviesObservable$:Observable<Movie[]>;
  private loadingError$ = new Subject<boolean>();

  constructor(private http: HttpClient) {
    // @ts-ignore
    this.moviesObservable$ = this.http.get<Movie[]>(this.SERVER_URL).pipe(
      catchError((error) => {
        // it's important that we log an error here.
        // Otherwise you won't see an error in the console.
        console.error('error loading the list of movies', error);
        this.loadingError$.next(true);
        return of();
      })
    );
  }

  getMovies():Observable<Movie[]>{
    return this.moviesObservable$;
  }

  getErrorObservable():Subject<boolean>{
    return this.loadingError$;
  }
}

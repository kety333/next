import { Injectable } from '@angular/core';
import {Movie} from "../model/movie.model";
import {Observable, of,Subject} from "rxjs/";
import { map} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import {catchError} from "rxjs/operators";


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
      map(movies => {
        return movies.map(movie => {
          return {
            ...movie,
            time: movie.runtime.replace("h", "h ").replace("m","min")
          };
        });
      }),
      catchError((error) => {
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

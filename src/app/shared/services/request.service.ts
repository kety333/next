import { Injectable } from '@angular/core';
import {Movie} from "../../movies/model/movie.model";
import {HttpClient} from "@angular/common/http";
import {MovieService} from "../../movies/services/movie.service";
import {tap} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  constructor(private http: HttpClient, private movieService: MovieService) { }

  // fetchMovies() {
  //   return this.http
  //     .get<Movie[]>(
  //       'https://localhost:3000/movies'
  //     )
  //     .pipe(
  //       map(movies => {
  //         return movies.map(movie => {
  //           return {
  //             ...movie };
  //         });
  //       }),
  //       tap(movies => {
  //         this.movieService.setMovies(movies);
  //       })
  //     );
  // }
}

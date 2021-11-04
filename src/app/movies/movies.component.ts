import { Component, OnInit } from '@angular/core';
import {Movie} from "./model/movie.model";
import {MovieService} from "./services/movie.service";
import {Observable} from "rxjs";
import {Subject} from "rxjs/internal/Subject";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  public movies$: Observable<Movie[]> | undefined;
  public getErrorObservable$ :Subject<boolean>| undefined;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movies$ =this.movieService.getMovies();
    this.getErrorObservable$ = this.movieService.getErrorObservable();
  }

}

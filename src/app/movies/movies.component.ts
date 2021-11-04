import { Component, OnInit } from '@angular/core';
import {Movie} from "./model/movie.model";
import {MovieService} from "./services/movie.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})
export class MoviesComponent implements OnInit {

  movies: Observable<Movie[]> | undefined;
  constructor(private movieService:MovieService) { }

  ngOnInit(): void {
    this.movies =this.movieService.getMovies();
  }

}

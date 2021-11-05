import {Component, Input, OnInit} from '@angular/core';
import {Movie} from "../model/movie.model";
import {MatDialog} from "@angular/material/dialog";
import {MovieMoreDialogComponent} from "./movie-more-dialog/movie-more-dialog.component";

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  @Input()
  movie!: Movie;
  @Input()
  searchText: string = '';
  movieLabel: string = '';

  constructor(public dialog: MatDialog) {
  }

  onReadMode(movie: Movie): void {
    let movieObj: Movie = movie;
    const dialogRef = this.dialog.open(MovieMoreDialogComponent, {
      width: '1360px',
      height: '690px',
      data: {
        movieName: movie.title,
        movieImg: movie.image,
        rating: movie.rating,
        runtime: movie.time,
        synopsis: movie.synopsis
      }
    });
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }

  ngOnInit(): void {
    const title: string = !!this.movie.title ? this.movie.title : '';
    const released: string = !!this.movie.released ? ' (' + this.movie.released + ')' : '';
    this.movieLabel = title + released;
  }

}

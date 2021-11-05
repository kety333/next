import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import {SharedModule} from "../shared/shared.module";
import { MovieRatingComponent } from './movie-details/movie-rating/movie-rating.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { MovieMoreDialogComponent } from './movie-details/movie-more-dialog/movie-more-dialog.component';
import {MatDialogModule} from "@angular/material/dialog";
import { MovieInfoComponent } from './movie-details/movie-more-dialog/movie-info/movie-info.component';



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieRatingComponent,
    MovieMoreDialogComponent,
    MovieInfoComponent
  ],
  imports: [
    CommonModule ,
    MoviesRoutingModule,
    SharedModule,
    HttpClientModule,
    MatDialogModule
  ],
  providers: []
})
export class MoviesModule { }
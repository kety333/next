import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MoviesComponent } from './movies.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import {MoviesRoutingModule} from "./movies-routing.module";
import {SharedModule} from "../shared/shared.module";
import { MovieRatingComponent } from './movie-details/movie-rating/movie-rating.component';
import {HttpClient, HttpClientModule} from "@angular/common/http";



@NgModule({
  declarations: [
    MoviesComponent,
    MovieDetailsComponent,
    MovieRatingComponent
  ],
  imports: [
    CommonModule ,
    MoviesRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  providers: []
})
export class MoviesModule { }

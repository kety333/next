import {Component, Inject, OnInit} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {Movie} from "../../model/movie.model";
import {DialogData} from "../../model/dialog-data.model";

@Component({
  selector: 'app-movie-more-dialog',
  templateUrl: './movie-more-dialog.component.html',
  styleUrls: ['./movie-more-dialog.component.scss']
})
export class MovieMoreDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<MovieMoreDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public movieInfo: DialogData,
  ) {}

}

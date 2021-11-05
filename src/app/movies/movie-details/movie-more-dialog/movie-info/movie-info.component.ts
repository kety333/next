import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-movie-info',
  templateUrl: './movie-info.component.html',
  styleUrls: ['./movie-info.component.scss']
})
export class MovieInfoComponent implements OnInit {

  @Input() movieName: string | undefined;
  @Input() runtime: string | undefined
  @Input() rating: string | undefined;
  @Input() synopsis: string | undefined

  constructor() { }

  ngOnInit(): void {
  }

}

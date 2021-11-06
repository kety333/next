import {
  Component,
  EventEmitter,
  Input, OnInit,
  Output
} from '@angular/core';
import {Subscription} from "rxjs";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  @Input() searchText: string | undefined;
  @Input() placeholder: string = '';
  @Output() searchTextChange: EventEmitter<string> = new EventEmitter<string>();

  keyUpSub: Subscription = new Subscription();

  constructor() {
  }

  ngOnInit(): void {
  }

  onSearchChange(searchValueEv: any): void {
    this.searchText = searchValueEv.target.value;
    this.searchTextChange.emit(this.searchText);
  }

}

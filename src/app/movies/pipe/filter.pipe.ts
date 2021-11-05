import {Pipe, PipeTransform} from '@angular/core';
import {Movie} from "../model/movie.model";

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: Movie[], searchString: string): Movie[] {
    if (value.length == 0) {
      return value;
    }
    const resultArray = [];
    for (const movie of value) {
      if (movie.title.toLowerCase().indexOf(searchString.toLowerCase()) >= 0 ){
        resultArray.push(movie);
      }
    }
    return resultArray;
  }


}

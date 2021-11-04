import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'txtoverflow'
})
export class TxtoverflowPipe implements PipeTransform {

  transform(value: string, limit: number): string {
    return value.length > limit ? value.substring(0, limit) + '...' : value;
  }

}

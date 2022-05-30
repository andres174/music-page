import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterOne'
})
export class FilterOnePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}

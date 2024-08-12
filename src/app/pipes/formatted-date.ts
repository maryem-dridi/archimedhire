import { Pipe, PipeTransform } from '@angular/core';
import { DatePipe } from '@angular/common';

@Pipe({
  name: 'enumToString'
})
export class FormattedDate implements PipeTransform {
  constructor(private datePipe: DatePipe) { }
  transform<T>(value: Date) {
    return this.datePipe.transform(value, 'dd-MM-yyyy');
  }
}

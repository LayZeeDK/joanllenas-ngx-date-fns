import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInMonths from 'date-fns/difference_in_months';

@Pipe({ name: 'dfnsDifferenceInMonths' })
export class DifferenceInMonthsPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInMonths: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInMonthsPipe.NO_ARGS_ERROR);
    }
    return differenceInMonths(dateLeft, dateRight);
  }
}

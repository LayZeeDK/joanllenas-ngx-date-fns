import {Pipe, PipeTransform} from '@angular/core';
import * as differenceInQuarters from 'date-fns/difference_in_quarters';

@Pipe({ name: 'dfnsDifferenceInQuarters' })
export class DifferenceInQuartersPipe implements PipeTransform {
  static readonly NO_ARGS_ERROR = 'dfnsDifferenceInQuarters: missing required arguments';

  transform(
    dateLeft: string | number | Date,
    dateRight: string | number | Date
  ): number {
    if (!dateLeft || !dateRight) {
        throw new Error(DifferenceInQuartersPipe.NO_ARGS_ERROR);
    }
    return differenceInQuarters(dateLeft, dateRight);
  }
}

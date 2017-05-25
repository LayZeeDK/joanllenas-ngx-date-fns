import 'core-js';
import 'reflect-metadata';
import { DifferenceInDaysPipe } from './difference-in-days.pipe';

describe('DifferenceInDaysPipe', () => {
  var pipe: DifferenceInDaysPipe;

  beforeEach(() => pipe = new DifferenceInDaysPipe());

  it('should throw when required arguments are not provided', () => {
      expect(() => pipe.transform(undefined, undefined))
        .toThrow(new Error(DifferenceInDaysPipe.NO_ARGS_ERROR));
  });

  it('should display the difference in days', () => {
    expect(pipe.transform(new Date(2012, 6, 2, 0, 0), new Date(2011, 6, 2, 23, 0)))
      .toBe(365);
  });
});

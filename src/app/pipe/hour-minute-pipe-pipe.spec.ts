import { HourMinutePipePipe } from './hour-minute-pipe-pipe';

describe('HourMinutePipePipe', () => {
  const pipe = new HourMinutePipePipe();
  
  it('create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it.each([
    undefined, 
    0
  ])('when value undefined or falsy', (value) => {
    const res = pipe.transform(value)
    expect(res).toBeUndefined()
  });

  it.each([
    [172, '2h52'],
    [122, '2h02'],
  ])('when value is a number (%i -> %s)', (value, expected) => {
    const res = pipe.transform(value)
    expect(res).toBeDefined()
    expect(res).toBe(expected)
  });
});



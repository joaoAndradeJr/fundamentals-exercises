const sum = require('./sum');

describe('Tests for the function sum', () => {
  it('should returns 9', () => {
    expect(sum(4, 5)).toEqual(9);
    expect(sum(0, 0)).toEqual(0);
  });
  it('should returns 0', () => {
    expect(sum(0, 0)).toEqual(0);
  });
  it('should throws error', () => {
    expect(() => sum(4, "5")).toThrowError();
    expect(() => sum(4, "5")).toThrowError('parameters must be numbers');
  });
});

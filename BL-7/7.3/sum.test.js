const sum = require('./sum');

describe('Tests for the function sum', () => {
  it('should returns 9', () => {
    expect(sum(4, 5)).toEqual(9);
  });
});

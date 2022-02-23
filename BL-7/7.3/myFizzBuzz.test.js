const myFizzBuzz = require('./myFizzBuzz');

describe('tests for myFizzBuzz', () => {
  it('should returns fizzbuzz', () => {
    expect(myFizzBuzz(15)).toEqual('fizzbuzz');
    expect(myFizzBuzz(3)).toEqual('fizz');
  });
  it('should returns fizz', () => {
    expect(myFizzBuzz(3)).toEqual('fizz');
  });
  it('should returns buzz', () => {
    expect(myFizzBuzz(5)).toEqual('buzz');
  });
  it('should returns 2', () => {
    expect(myFizzBuzz(2)).toEqual(2);
  });
  it('should returns false', () => {
    expect(myFizzBuzz('3')).toEqual(false);
  });
});

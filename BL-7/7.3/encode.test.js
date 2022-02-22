const encode = require('./encode');

const alphabetWithoutVogals = 'bcdfghjklmnpqrstvwxyz';
const numbersFrom6To0 = '67890';

describe('tests to encode function', () => {
  it('should returns true if encode is a function', () => {
    expect(typeof encode).toBe('function');
  });
  it('should returns 12345', () => {
    expect(encode('aeiou')).toBe('12345');
  });
  it('should not change anything' , () => {
    expect(encode(alphabetWithoutVogals)).toEqual(alphabetWithoutVogals);
    expect(encode(numbersFrom6To0)).toEqual(numbersFrom6To0);
  });
  it('should have the same lenght that the parameter', () => {
    expect(encode(alphabetWithoutVogals).length).toEqual(alphabetWithoutVogals.length);
    expect(encode(numbersFrom6To0).length).toEqual(numbersFrom6To0.length);
    expect(encode('function').length).toEqual('funciton'.length);
  });
});

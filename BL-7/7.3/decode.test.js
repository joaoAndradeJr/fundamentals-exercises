const decode = require('./decode');

const alphabetWithoutVogals = 'bcdfghjklmnpqrstvwxyz';
const numbersFrom6To0 = '67890';

describe('tests to decode function', () => {
  it('should returns true if decode is a function', () => {
    expect(typeof decode).toBe('function');
  });
  it('should returns aeiou', () => {
    expect(decode('12345')).toBe('aeiou');
  });
  it('should not change anything' , () => {
    expect(decode(alphabetWithoutVogals)).toEqual(alphabetWithoutVogals);
    expect(decode(numbersFrom6To0)).toEqual(numbersFrom6To0);
  });
  it('should have the same lenght that the parameter', () => {
    expect(decode(alphabetWithoutVogals).length).toEqual(alphabetWithoutVogals.length);
    expect(decode(numbersFrom6To0).length).toEqual(numbersFrom6To0.length);
    expect(decode('function').length).toEqual('funciton'.length);
  });
});

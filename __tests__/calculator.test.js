import Age from '../src/js/calculator.js';

describe('Age', () => {
  test('should correctly create an Age object with age and expectancy for male', () => {
    const age = new Age(34, 'male');
    expect(age.years).toEqual(34);
    expect(age.expect).toEqual(42);
  });
  test('should correctly create an Age object and expectancy for female', () => {
    const age = new Age(34, 'female');
    expect(age.years).toEqual(34);
    expect(age.expect).toEqual(46);
  });
  test('should calculate age in Mercury years', () => {
    const age = new Age(34);
    expect(age.mercuryAge()).toEqual(8);
  });
  test('should calculate age in Venus years', () => {
    const age = new Age(34)
    expect(age.venusAge()).toEqual(21);
  });
  test('should calculate age in Mars years', () => {
    const age = new Age(34);
    expect(age.marsAge()).toEqual(63);
  });
});
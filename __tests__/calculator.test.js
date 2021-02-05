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
    expect(age.mercuryAge()[0]).toEqual(8);
  });
  test('should calculate age in Venus years', () => {
    const age = new Age(34)
    expect(age.venusAge()[0]).toEqual(21);
  });
  test('should calculate age in Mars years', () => {
    const age = new Age(34);
    expect(age.marsAge()).toEqual(63);
  });
  test('should calculate age in Juniper years', () => {
    const age = new Age(34);
    expect(age.juniperAge()).toEqual(403);
  });
  test('should calculate how many years left to live for male user on Mercury', () => {
    const age = new Age(34, 'male');
    expect(age.mercuryAge()[1]).toEqual(10);
  });
  test('should calculate how many years left to live for female user on Mercury', () => {
    const age = new Age(34, 'female');
    expect(age.mercuryAge()[1]).toEqual(11);
  });
  test('should calculate how many years lived over life expectancy on Mercury', () => {
    const age = new Age(81, 'male');
    expect(age.mercuryAge()[1]).toEqual(1);
  });
});
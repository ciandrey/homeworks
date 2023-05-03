const Calculator = require('../calculator');

const calculator = new Calculator();

describe('check Add-functionality', () => {
  [
    [0, 0],
    [-1, 2],
    ['1', '3'],
    [-3, 3, 0],
    [0.3, 5, 5.3],
    [0.3, -5e-10, -4.7],
    [0.3, 5, 5.3, 0, 156e5],
  ].forEach(([...args]) => {
    const sum = [...args].reduce((sum, a) => sum + a, 0);
    it(`should be able to add ${args} and return right ${sum}`, async () => {
      expect(calculator.add(...args)).toEqual(sum);
      expect(typeof calculator.add(...args)).toBe('number');
    });
  });
});

describe('check Multiply-functionality', () => {
  [
    [0, 0],
    [-1, 2],
    ['1', '3'],
    [-3, 3, 0],
    [0.3, 5, 5.3],
    [0.3, -5e-10, -4.7],
    [0.3, 5, 5.3, 1, 156e5],
  ].forEach(([...args]) => {
    const multiplicationResult = [...args].reduce((accumulator, a) => accumulator * a, 1);
    it(`should be able to multiply ${args} and return right ${multiplicationResult}`, async () => {
      expect(calculator.multiply(...args)).toEqual(multiplicationResult);
      expect(typeof calculator.multiply(...args)).toBe('number');
    });
  });
});

describe('check Subtraction-functionality', () => {
  it.each([
    [0, 0, 0],
    [-1, 2, -3],
    ['1', '3', -2],
    [-3, -5, 2],
    [0.3, 5e-10, 0.2999999995],
    [15e4, -5e-5, 150000.00005],
  ])('should be correct subtraction of numbers: %d - %d = %d', async (a, b, c) => {
    expect(calculator.subtraction(a, b)).toBe(c);
    expect(typeof calculator.subtraction(a, b)).toBe('number');
  });
});

describe('check Divide-functionality', () => {
  it.each([
    [1, 2, 0.5],
    ['6', '2', 3],
    [-20, -5, 4],
    [0.3, 5e-10, 600000000],
    [15e4, -5e-5, -3000000000],
  ])('should be correct divide of numbers: %d / %d = %d', async (a, b, c) => {
    expect(calculator.divide(a, b)).toBe(c);
    expect(typeof calculator.divide(a, b)).toBe('number');
  });

  it('check division to 0', async () => {
    const result = calculator.divide(2, 0);
    expect(result).toEqual(Infinity);
  });
});

describe('check Exponentiation-functionality', () => {
  it.each([
    [0, 0],
    [-1, 1],
    ['-3', 9],
    [0.3, 0.09],
    [15e3, 225000000],
  ])('should be correct exponentiation of  numbers: %d ^2 = %d', async (a, b) => {
    expect(calculator.exponentiation(a)).toBe(b);
    expect(typeof calculator.exponentiation(a)).toBe('number');
  });
});

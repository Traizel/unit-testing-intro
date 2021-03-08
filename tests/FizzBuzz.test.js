const div = require('../modules/FizzBuzz');

test('div by 3 and returns "Fizz"', () => {
  expect(div(3)).toBe('Fizz');
});

test('div by 5 and returns "Buzz"', () => {
  expect(div(5)).toBe('Buzz');
});

test('div by 5 and 3 and returns "FizzBuzz"', () => {
  expect(div(15)).toBe('FizzBuzz');
});

test('NOT div by 5 or 3 and returns input', () => {
  expect(div(4)).toBe(4);
});

test('NOT div by 5 or 3 and returns input', () => {
  expect(div(undefined)).toBe(undefined);
});

test('NOT div by 5 or 3 and returns input', () => {
  expect(div(null)).toBe(undefined);
});

test('NOT div by 5 or 3 and returns input', () => {
  expect(div('asdf')).toBe(undefined);
});

test('NOT div by 5 or 3 and returns input', () => {
  expect(div(true)).toBe(undefined);
});

test('NOT div by 5 or 3 and returns input', () => {
  expect(div(false)).toBe(undefined);
});

test('NOT div by 5 or 3 and returns input', () => {
  expect(div([])).toBe(undefined);
});

test('NOT div by 5 or 3 and returns input', () => {
  expect(div({})).toBe(undefined);
});
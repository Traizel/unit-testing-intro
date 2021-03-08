const div = require('../modules/Year');

test('div by 4 and returns True', () => {
  expect(div(4)).toBe(true);
});

test('div by 4 and returns True', () => {
  expect(div(80)).toBe(true);
});

test('div by 100 and returns False', () => {
  expect(div(100)).toBe(false);
});

test('div by 100 and returns False', () => {
  expect(div(200)).toBe(false);
});

test('div by 400 and returns False', () => {
  expect(div(400)).toBe(false);
});

test('NaN and returns undefined', () => {
  expect(div('asdf')).toBe(undefined);
});

test('NaN and returns undefined', () => {
  expect(div(false)).toBe(undefined);
});

test('NaN and returns undefined', () => {
  expect(div(true)).toBe(undefined);
});

test('NaN and returns undefined', () => {
  expect(div([])).toBe(undefined);
});

test('NaN and returns undefined', () => {
  expect(div({})).toBe(undefined);
});
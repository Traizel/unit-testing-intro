const div = function (val) {
  if (typeof(val) !== 'number' || val === [] || val === {}) {
    return undefined;
  } else if (val % 3 === 0 && val % 5 === 0 ) {
    return 'FizzBuzz';
  } else if (val % 3 === 0) {
    return 'Fizz';
  } else if (val % 5 === 0) {
    return 'Buzz';
  } else {
    return val;
  }
}

module.exports = div;
const div = function (val) {
  if (typeof(val) !== 'number' || val === [] || val === {}) {
    return undefined;
  } else if (val % 400 === 0) {
    return false;
  } else if (val % 100 === 0) {
    return false;
  } else if (val % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

module.exports = div;
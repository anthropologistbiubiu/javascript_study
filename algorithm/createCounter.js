/**
 * @param {number} n
 * @return {Function} counter
 */

var createCounter1 = function (n) {
  return n++;
};

var createCounter2 = function (n) {
  return function () {
    return n++;
  };
};

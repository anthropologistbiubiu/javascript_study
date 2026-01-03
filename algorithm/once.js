/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function (fn) {
  let call = false;
  return function (...args) {
    if (call) {
      return undefined;
    }
    call = true;
    return fn(...args);
  };
};

fn = function (a, b, c) {
  return a + b + c;
};

let once_fn = once(fn);
console.log(once_fn(1, 2, 3));
console.log(once_fn(1, 2, 3));

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

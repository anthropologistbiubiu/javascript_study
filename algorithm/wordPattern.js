/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function (pattern, s) {
  const words = s.split(" ");
  if (pattern.length !== words.length) {
    return false;
  }
  var a2b = new Map();
  var b2a = new Map();
  for (let i = 0; i < pattern.length; i++) {
    var a = pattern[i];
    var b = words[i];
    if (a2b.has(a) || b2a.has(b)) {
      if (a !== b2a.get(b) || b !== a2b.get(a)) {
        return false;
      }
    } else {
      a2b.set(a, b);
      b2a.set(b, a);
    }
  }
  return true;
};

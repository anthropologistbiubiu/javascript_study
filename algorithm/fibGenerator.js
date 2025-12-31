/**
 * @return {Generator<number>}
 */
var fibGenerator = function* () {
  var a = 0;
  var b = 1;
  yield a;
  yield b;
  while (true) {
    next = a + b;
    a = b;
    b = next;
    yield next;
  }
};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */

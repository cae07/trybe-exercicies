const assert = require('assert');

function sum(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number') {
    throw new Error('parameters must be numbers');
  }

  return a + b;
}

assert.strictEqual(sum(4, 5), 9, 'O valor retornado deve ser 9.');
assert.strictEqual(sum(0, 0), 0, 'O valor retornado deve ser 0.');
assert.strictEqual(sum(4, '5'), 9, 'o valor retornado deve ser 9');

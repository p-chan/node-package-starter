const assert = require('power-assert');
const Index = require('../src/index.js');

describe('Index', () => {
  it('Greets', () => {
    const index = new Index('Node.js');
    assert.equal(index.hello(), 'Hello Node.js');
  });
});

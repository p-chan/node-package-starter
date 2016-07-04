'use strict';

module.exports = class Index {
  constructor(name) {
    this.name = name;
  }

  hello() {
    return `Hello ${this.name}`
  }
};

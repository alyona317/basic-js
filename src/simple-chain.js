const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(`( ${value} )`);
    return this; // Enables chaining
  },

  removeLink(position) {
    if (
      typeof position !== 'number' ||
      position < 1 ||
      position > this.chain.length ||
      !Number.isInteger(position)
    ) {
      this.chain = []; // Clear the chain to avoid inconsistent state
      throw new Error("You can't remove incorrect link!");
    }
    this.chain.splice(position - 1, 1); // Remove the link at the specified position
    return this; // Enables chaining
  },

  reverseChain() {
    this.chain.reverse();
    return this; // Enables chaining
  },

  finishChain() {
    const result = this.chain.join('~~');
    this.chain = []; // Clear the chain
    return result;
  },
};

module.exports = {
  chainMaker
};

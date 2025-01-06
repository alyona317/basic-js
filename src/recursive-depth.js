const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
class DepthCalculator {
  calculateDepth(arr) {
    if (!Array.isArray(arr)) {
      return 0; // Base case: if not an array, depth is 0
    }

    // Recursively calculate the depth of nested arrays
    let maxDepth = 0;
    for (let element of arr) {
      maxDepth = Math.max(maxDepth, this.calculateDepth(element));
    }

    // Add 1 to account for the current array's depth
    return maxDepth + 1;
  }
}

module.exports = {
  DepthCalculator
};

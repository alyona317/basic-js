const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!");
  }

  const result = [];
  let skipNext = false;

  for (let i = 0; i < arr.length; i++) {
    if (skipNext) {
      skipNext = false;
      continue; // Skip the current element due to '--discard-next'
    }

    switch (arr[i]) {
      case '--discard-next':
        skipNext = true; // Mark the next element to be skipped
        break;

      case '--discard-prev':
        if (result.length > 0 && arr[i - 2] !== '--discard-next') {
          // Remove the last element from the result if it wasn't skipped earlier
          result.pop();
        }
        break;

      case '--double-next':
        if (i + 1 < arr.length) {
          // Add the next element to the result
          result.push(arr[i + 1]);
        }
        break;

      case '--double-prev':
        if (i > 0 && arr[i - 2] !== '--discard-next') {
          // Add the last element of the result again if it wasn't skipped
          result.push(arr[i - 1]);
        }
        break;

      default:
        // Add regular elements to the result
        result.push(arr[i]);
    }
  }

  return result;
}

module.exports = {
  transform
};

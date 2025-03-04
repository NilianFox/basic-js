const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(array) {
  let result = [];
  let sortedIter = 0;
  let sortedArray = array.filter((item) => item !== -1).sort(function (a, b) {
    return a - b
  });
  for (let i in array) {
    if (array[i] === -1) {
      result.push(-1);
    } else {
      result.push(sortedArray[sortedIter]);
      sortedIter++;
    }
  }
  return result
}

module.exports = {
  sortByHeight
};

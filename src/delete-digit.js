const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(number) {
  number = number.toString();
  let result = -1;
  for (let i in number) {
    let num = number.replace(number[i], "");
    if (+num > result) {
      result = +num;
    }
  }
  return result
}

module.exports = {
  deleteDigit
};

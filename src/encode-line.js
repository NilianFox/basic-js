const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  const lettersArr = str.split('');
  let counter = 1;
  let result = '';
  for (let i = 0; i < lettersArr.length; i++) {
    if (lettersArr[i] === lettersArr[i + 1]) {
      counter++;
    }
    else {
      counter === 1 ? result += `${lettersArr[i]}` : result += `${counter}${lettersArr[i]}`;
      counter = 1;
    }
  }
  return result
}

module.exports = {
  encodeLine
};

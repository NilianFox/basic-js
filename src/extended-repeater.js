const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *
 * @param {String} str string to repeat
 * @param {Object} options options object
 * @return {String} repeating string
 *
 *
 * @example
 *
 * repeater('STRING', { repeatTimes: 3, separator: '**',
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, { repeatTimes = 1, separator = '+', addition, additionRepeatTimes = 1, additionSeparator = '|' }) {

  function repeat(str, repeatTimes, separator) {
    let result = '';
    for (let i = 0; i < repeatTimes; i++) {
      result += str + (i < repeatTimes - 1 ? separator : '');
    }
    return result;
  }

  let resultStr = str;
  if (addition !== undefined) {
    resultStr += repeat(addition, additionRepeatTimes, additionSeparator);
  }
  return repeat(resultStr, repeatTimes, separator)
}
module.exports = {
  repeater
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles(names) {
  let result = [];
  let values = {};
  for (let i = 0; i < names.length; i++) {
    let element = names[i];
    if (!values[element]) {
      if (!result.includes(element)) {
        result.push(element);
        values[element] = 0;
      } else {
        values[element] = 1;
        result.push(`${element}(${values[element]})`);
      }
    }
    else {
      values[element] += 1;
      result.push(`${element}(${values[element]})`);
    }
  }
  return result
}

module.exports = {
  renameFiles
};

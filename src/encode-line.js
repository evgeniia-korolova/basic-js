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
  if(str.length <= 1) return str;
  let count = 1;
  let result = '';
  let i = 0;

  while (i < str.length) {
      if (str[i] === str[i + 1]) {
          count++, i++;
      } else {
          if (count === 1) {
              result += str[i];
          } else {
              result += count + str[i];
              count = 1;
          }
          i++;
      }
  }
  return result;
}

module.exports = {
  encodeLine
};

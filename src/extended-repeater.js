const { NotImplementedError } = require("../lib");

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

function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const separator = options.separator || "+";
  const additionSeparator = options.additionSeparator || "|";

  let additionStr = "";
  if (options.addition !== undefined) {
    additionStr = Array(additionRepeatTimes)
      .fill(String(options.addition))
      .join(additionSeparator);
  }

  const fullPiece = String(str) + additionStr;
  return Array(repeatTimes).fill(fullPiece).join(separator);
}

module.exports = {
  repeater,
};

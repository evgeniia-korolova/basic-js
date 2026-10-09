const { NotImplementedError } = require("../lib");

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
function deleteDigit(n) {
  let res = [];
  let arr = String(n).split("");

  for (let i = 0; i < arr.length; i++) {
    let checkSum = arr.toSpliced(i, 1).join("");

    res.push(Number(checkSum));
  }

  return Math.max(...res);
}

module.exports = {
  deleteDigit,
};

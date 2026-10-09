const { NotImplementedError } = require("../lib");

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const numRows = matrix.length;
  const numCols = matrix[0].length;
  const result = [];

  for (let i = 0; i < numRows; i++) {
    const newRow = [];
    for (let j = 0; j < numCols; j++) {
      let count = 0;

      for (let x = -1; x <= 1; x++) {
        for (let y = -1; y <= 1; y++) {
          if (x === 0 && y === 0) continue;

          const neighborRow = i + x;
          const neighborCol = j + y;

          if (
            neighborRow >= 0 &&
            neighborRow < numRows &&
            neighborCol >= 0 &&
            neighborCol < numCols
          ) {
            if (matrix[neighborRow][neighborCol] === true) {
              count++;
            }
          }
        }
      }
      newRow.push(count);
    }
    result.push(newRow);
  }

  return result;
}

module.exports = {
  minesweeper,
};

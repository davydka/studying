// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// results array of arrays to start
// loop tempCol from startCol to endCol
// increment startRow and tempRow
//  keep incrementing tempRow and filling out endCol/tempCol
//  at end, decrement endCol
//  decrement tempCol
//  once tempCol reaches 0, decrement endRow
//  decrement tempRow until it reaches startRow
// start over
const answer1 = (n) => {
  const results = [...Array(n)].map(_ => [...Array(n)]);
  let counter = 1; // value to insert

  let startCol = 0;
  let endCol = n - 1;

  let startRow = 0;
  let endRow = n - 1;

  while(startCol <= endCol && startRow <= endRow) {
    // top row
    for (let i = startCol; i <= endCol; i++) {
      results[startRow][i] = counter;
      counter++;
    }
    startRow++;

    // right col
    for (let i = startRow; i <= endRow; i++) {
      results[i][endCol] = counter;
      counter++;
    }
    endCol--;

    // bottom row
    for (let i = endCol; i >= startCol; i--) {
      results[endRow][i] = counter;
      counter++;
    }
    endRow--;

    // left col
    for (let i = endRow; i >= startRow; i--) {
      results[i][startCol] = counter;
      counter++
    }
    startCol++;

  }
  // debugger;

  return results;
}

function matrix(n) {
  return answer1(n);
}

// const test = matrix(3);
// debugger;

module.exports = matrix;

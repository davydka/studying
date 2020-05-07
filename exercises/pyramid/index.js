// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'
//   pyramid(5)
//       '    #    '
//       '   ###   '
//       '  #####  '
//       ' ####### '
//       '#########'

// iterative solution
const answer1 = (n) => {
  const cols = (n * 2) - 1;
  const colMid = Math.floor(cols / 2);

  for (let row = 0; row < n; row++){
    let level = '';
    for (let col = 0; col < cols; col++) {
      level += (col >= colMid-row && col <= colMid+row) ? '#' : ' ';
    }
    console.log(level);
  }
}

// recursive solution
const answer2 = (n) => {
  loop(n);
}

const loop = (n, row = 0, level = '') => {
  if (row === n) {
    return;
  }
  const cols = (n * 2) - 1;
  const colMid = Math.floor(cols / 2);

  if (level.length === cols) {
    console.log(level);
    return loop(n, row + 1);
  }

  level += (level.length >= colMid-row && level.length <= colMid+row) ? '#' : ' ';
  loop(n, row, level);
}

function pyramid(n) {
  return answer2(n);
}

pyramid(3);

module.exports = pyramid;

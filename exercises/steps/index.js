// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

const answer1 = (n) => {
  for (let i = 0; i < n; i++) {
    let target = '';
    for (let j = 0; j < n; j++) {
      target += j <= i ? '#' : ' ';
    }
    console.log(target);
  }
}

// recursive solution
const answer2 = (n) => {
  print(n, 0);
  return n;
}

const print = (n, row, stair = '') => {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return print(n, row+1);
  }

  stair += stair.length <= row ? '#' : ' ';
  print(n, row, stair);
}

function steps(n) {
  return answer2(n);
}

steps(4)

module.exports = steps;

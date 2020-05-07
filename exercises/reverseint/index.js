// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

const r1 = (n) => {
  const target = parseInt(Math.abs(n).toString().split('').reverse().join(''));
  return target * Math.sign(n); // 👈︎ Cool!
  // return n >=0 ? target : -target;
}
function reverseInt(n) {
  return r1(n);
}

// const test = reverseInt(-5);
// debugger;

module.exports = reverseInt;

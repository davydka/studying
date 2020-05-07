// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

const f1 = (n) => {
  if (n % 3 === 0 && n % 5 === 0) {
    console.log('fizzbuzz');
    return;
  }
  if (n % 3 === 0) {
    console.log('fizz');
    return;
  }
  if (n % 5 === 0) {
    console.log('buzz');
    return;
  }
  console.log(n);
  return n;
}

const f2 = (n) => {
  return n;
}


function fizzBuzz(n) {
  for (let i = 1; i <= n; i++) {
    f2(i);
  }
}

fizzBuzz(15);

module.exports = fizzBuzz;

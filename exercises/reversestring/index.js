// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse1(str) {
  // return Array.from(str).reverse().join('');
  return str.split('').reverse().join('');
}

function reverse2(str) {
  let reversed = '';
  for (let c of str) {
    reversed = c + reversed;
  }
  return reversed;
}

function reverse3(str) {
  return Array.from(str).reduce((rev, c) => c + rev, '');
}

function reverse(str) {
  return reverse1(str);
}

module.exports = reverse;

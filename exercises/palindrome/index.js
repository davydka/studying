// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

const pal1 = (str) => {
  return str === Array.from(str).reverse().join('');
}

const pal2 = (str) => {
  return Array.from(str).every((c, i) => c === str[str.length - i - 1]);
}
function palindrome(str) {
  return pal2(str);
}

module.exports = palindrome;

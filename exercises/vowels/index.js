// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const vowelsArray = [
  'a',
  'e',
  'i',
  'o',
  'u',
];

const answer1 = (str) => {
  let count = 0;
  for (let c of str.toLowerCase()) {
    if (vowelsArray.includes(c)) {
      count++;
    }
  }
  return count;
}

const answer2 = (str) => {
  return str.toLowerCase().split('').reduce((a, c, i) => {
    if (vowelsArray.includes(c)) {
      a++;
    }
    return a;
  }, 0);
}

// regex approach
const answer3 = (str) => {
  const matches = str.match(/[aeiou]/gi);
  return matches ? matches.length : 0;
}


function vowels(str) {
  return answer3(str);
}

const test = vowels('Hi There!');
debugger;

module.exports = vowels;

// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// make a charMap for stringA and stringB
// make charMap helper function

const buildCharMap = (str) => {
  const charMap = {};
  for (let c of cleanString(str)) {
    charMap[c] = charMap[c] + 1 || 1;
  }
  return charMap;
}

const cleanString = (str, doSort = false) => {
  const cleaned = str.replace(/[^\w]/g, '').toLowerCase();
  if (!doSort) {
    return cleaned;
  }
   return cleaned.split('').sort().join('');
}

const answer1 = (stringA, stringB) => {
  const charMapA = buildCharMap(stringA);
  const charMapB = buildCharMap(stringB);

  if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
    return false;
  }

  return Object.keys(charMapA).reduce((a, c,) => charMapA[c] === charMapB[c], true);
}

const answer2 = (stringA, stringB) => {
  return cleanString(stringA, true) === cleanString(stringB, true);
}

function anagrams(stringA, stringB) {
  return answer2(stringA, stringB);
}

// const test = anagrams('RAIL! SAFETY!', 'fairy tales');
// debugger;

module.exports = anagrams;

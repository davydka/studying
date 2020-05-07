// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

const m1 = (str) => {
  const charMap = {};
  for(let c of str) {
    charMap[c] = charMap[c]+1 || 1;
  }
  return Object.keys(charMap).reduce((p, n, i) => {
    return charMap[n] > charMap[p] ? n : p;
  }, Object.keys(charMap)[0]);
}

const m2 = (str) => {
  const charMap = {};
  let max = 0;
  let maxC = '';
  for(let c of str) {
    charMap[c] = charMap[c]+1 || 1;
  }

  for (let c in charMap) {
    if (charMap[c] > max) {
      max = charMap[c];
      maxC = c;
    }
  }

  return maxC;
}

function maxChar(str) {
  return m2(str);
}

const test = maxChar('abcddddddddde');

module.exports = maxChar;

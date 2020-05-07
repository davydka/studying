// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

const answer1 = (str) => {
  return str.split(' ').map(w => {
    const target = w.split('');
    target[0] = target[0].toUpperCase();
    return target.join('');
  }).join(' ');
}

const answer2 = (str) => {
  return str.split(' ').map(w => w[0].toUpperCase() + w.slice(1)).join(' ');
}

const answer3 = (str) => {
  return str.split('').reduce((a, c, i) => {
    a.push(a[a.length - 1] === ' ' || i === 0 ? c.toUpperCase() : c);
    return a;
  }, ['']).join('');
}

function capitalize(str) {
  return answer3(str);
}

// const test = capitalize('hi there, how is it going?');
// debugger;

module.exports = capitalize;

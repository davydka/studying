// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

const answer1 = (array, size) => {
  let counter = 0;
  const target = array.reduce((a, c, i) => {
    if (i > 0 && i % size === 0) {
      counter++;
      a[counter] = [];
    }
    a[counter].push(c);
    return a;
  }, [[]]);
  return target;
}

const answer2 = (array, size) => {
  const target = [];
  for (let item of array) {
    const last = target[target.length - 1];
    if (!last || last.length === size) {
      target.push([item]);
    } else {
      last.push(item);
    }
  }
  return target;
}

const answer3 = (array, size) => {
  const target = [];
  let count = 0;
  while (count < array.length) {
    target.push(array.slice(count, count + size));
    count += size;
  }
  return array;
}


function chunk(array, size) {
  return answer2(array, size);
}

const test = chunk([1,2,3,4,5,6], 4);
debugger;

module.exports = chunk;

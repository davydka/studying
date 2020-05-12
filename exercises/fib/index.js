// --- Directions
// Print out the n-th entry in the fibonacci series.
// The fibonacci series is an ordering of numbers where
// each number is the sum of the preceeding two.
// For example, the sequence
//  [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
// forms the first ten entries of the fibonacci series.
// Example:
//   fib(4) === 3

// O(n) - Linear time to come to solution
const answer1 = (n) => {
  return [...Array(n)].reduce(a => {
    if (a[a.length - 1] < 1) {
      a.push(1);
      return a;
    }
    a.push(a[a.length - 1] + a[a.length - 2]);
    return a;
  }, [0]);
}

// O(n)
const answer2 = (n) => {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
}

// O(?)
const answer3 = (a, c, n) => {
  if (c >= n) {
    return a[a.length - 1];
  }
  a.push(a[a.length - 1] + a[a.length - 2]);
  c++;
  return answer3(a, c, n)
}

// slowFib
const answer4 = (n) => {
  if (n < 2) {
    return n;
  }
  return fib(n - 1) + fib(n - 2);
}

const memoize = (fn) => {
  const cache = {};
  return (...args) => {
    if (cache[args]) {
      return cache[args];
    }

    const result = fn.apply(this, args);
    cache[args] = result;

    return result;
  }
}

const fib = memoize(answer4);
// const fib = (n) => {
//   // return answer1(n)[n];
//   // return answer2(n)[n];
//   // return answer3([0, 1], 1, n);
//   return answer4(n);
// };

const test = fib(15);
debugger;

module.exports = fib;

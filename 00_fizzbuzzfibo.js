const fizzbuzz = () => {
  for (let index = 1; index < 100; index++) {
    if (index % 2 === 0 && index % 5 == 0) {
      console.log('fizzbuzz', index);
      continue;
    }

    if (index % 2 == 0) {
      console.log('fizz', index);
    }

    if (index % 5 == 0) {
      console.log('buzz', index);
    }
  }
};

const fibo = (n) => {
  if (n < 2) {
    return n;
  }
  const target = fibo(n - 1) + fibo(n - 2);
  return target;
};

console.log(fibo(3));
fibo(5);

// this is another test 6

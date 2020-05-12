// --- Directions
// Implement a Queue datastructure using two stacks.
// *Do not* create an array inside of the 'Queue' class.
// Queue should implement the methods 'add', 'remove', and 'peek'.
// For a reminder on what each method does, look back
// at the Queue exercise.
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.add(2);
//     q.peek();  // returns 1
//     q.remove(); // returns 1
//     q.remove(); // returns 2

const Stack = require('./stack');

class Queue {
  constructor() {
    this.a = new Stack();
    this.b = new Stack();
  }

  add(val) {
    return this.a.push(val);
  }

  peek() {
    while (this.a.peek()) {
      this.b.push(this.a.pop());
    }

    const target = this.b.peek();

    while (this.b.peek()) {
      this.a.push(this.b.pop());
    }

    return target;
  }

  remove() {
    while (this.a.peek()) {
      this.b.push(this.a.pop());
    }

    const target = this.b.pop();

    while (this.b.peek()) {
      this.a.push(this.b.pop());
    }

    return target;
  }
}

// const test = new Queue();
// test.add(1);
// test.add(2);
// test.add(3);
// const yea = test.peek();

// nums = [10, 20, 20, 10, 10, 30, 50, 10, 20];
// const removeDuplicates = (nums) => {
//   const dupeMap = {}
//   let target = 0;
//   for (let i of nums) {
//     dupeMap[i] = dupeMap[i] + 1 || 1;
//
//   }
//   for (let i in dupeMap) {
//     let target = 0;
//     if (dupeMap[i] % 2) {
//       target++;
//      }
//     return target;
//   }
//   debugger;
//   return Object.keys(dupeMap);
// };
//
// const test = removeDuplicates(nums);
// debugger;

module.exports = Queue;

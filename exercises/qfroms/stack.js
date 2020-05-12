class Stack {
  constructor() {
    this.data = [];
  }

  push(record) {
    this.data.push(record); // returns length of array
  }

  pop() {
    return this.data.pop(); // removes last, returns that element
  }

  peek() {
    return this.data[this.data.length - 1]; // returns that element
  }
}

module.exports = Stack;

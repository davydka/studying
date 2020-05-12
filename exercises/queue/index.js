// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
  constructor() {
    this.queue = [];
  }

  add(val) {
    return this.queue.unshift(val); // returns length of array
  }

  remove(val) {
    return this.queue.pop(val); // removes last, returns that element
  }
}

module.exports = Queue;

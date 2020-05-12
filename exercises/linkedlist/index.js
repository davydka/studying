// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(data) {
    this.head = new Node(data, this.head);
  }

  size() {
    let count = 0;
    let node = this.head;
    while(node) {
      count++;
      node = node.next;
    }
    return count;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    if (!this.head) {
      return null;
    }

    let node = this.head;
    while(node.next) {
      node = node.next;
    }
    return node;
  }

  clear() {
    this.head = null;
  }

  removeFirst() {
    if (!this.head) {
      return;
    }
    this.head = this.head.next;
  }

  removeLast() {
    if (!this.head) {
      return;
    }

    if (!this.head.next) {
      this.head = null;
      return;
    }

    let prev = this.head;
    let node = this.head.next;
    while(node.next) {
      prev = node;
      node = node.next;
    }
    prev.next = null;
  }

  insertLast(data) {
    let newNode = new Node(data);
    let last = this.getLast();
    if (last) {
      last.next = newNode;
    } else {
      this.head = newNode;
    }
  }

  getAt(index) {
    let count = 0;
    let node = this.head;
    while(node) {
      if (count === index) {
        return node;
      }
      count++;
      node = node.next;
    }

    return null;
  }

  removeAt(index) {
    if (!this.head) {
      return;
    }

    if(index === 0) {
      this.removeFirst()
      return;
    }

    if(index === this.size() - 1) {
      this.removeLast()
      return;
    }

    const prev = this.getAt(index - 1);
    const node = this.getAt(index);

    if (prev && node) {
      prev.next = node.next;
    }
  }

  insertAt(data, index) {
    if (!this.head) {
      this.head = new Node(data);
      return;
    }

    if (index === 0) {
      this.head = new Node(data, this.getFirst());
      return;
    }

    if (index >= this.size()) {
      this.getLast().next = new Node(data);
      return;
    }

    const prev = this.getAt(index - 1) || this.getLast();
    prev.next = new Node(data, prev.next)
  }

  forEach(fn) {
    let node = this.head;
    let count = 0;
    while(node) {
      fn(node, count);
      node = node.next;
      count++;
    }
  }

  *[Symbol.iterator]() {
    let node = this.head;
    while(node) {
      yield node;
      node = node.next;
    }
  }
}

const list = new LinkedList();
list.insertLast(1);
list.insertLast(2);
list.insertLast(3);
list.insertLast(4);
// list.clear();
const target = list.getAt(3);
list.insertAt('hi', 3);
const target2 = list.getAt(3);


debugger;

module.exports = { Node, LinkedList };

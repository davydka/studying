// --- Directions
// 1) Create a node class.  The constructor
// should accept an argument that gets assigned
// to the data property and initialize an
// empty array for storing children. The node
// class should have methods 'add' and 'remove'.
// 2) Create a tree class. The tree constructor
// should initialize a 'root' property to null.
// 3) Implement 'traverseBF' and 'traverseDF'
// on the tree class.  Each method should accept a
// function that gets called with each element in the tree

class Node {
  constructor(data) {
    this.data = data;
    this.children = [];
  }

  add(data) {
    this.children.push(new Node(data));
  }

  remove(data) {
    this.children = this.children.filter(node => node.data !== data);
  }
}

class Tree {
  constructor() {
    this.root = null;
  }

  traverseBF(fn) {
    const arr = [this.root];
    while(arr.length) {
      const target = arr.shift();
      arr.push(...target.children);
      // target.children.every(node => arr.push(node))
      fn(target);
    }
  }

  traverseDF(fn) {
    const arr = [this.root];
    while(arr.length) {
     const target = arr.shift();
     arr.unshift(...target.children);
     fn(target);
    }
  }
}

const tree = new Tree();
tree.root = new Node('a');
tree.root.add('b');
tree.root.add('d');
tree.root.children[0].add('c');
const letters = [];
// tree.traverseBF(node => letters.push(node.data));
debugger;

module.exports = { Tree, Node };

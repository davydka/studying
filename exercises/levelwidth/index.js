// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

const Node = require('./node');

function levelWidth(root) {
  const count = [0];
  const arr = [root, 's'];
  while(arr.length) {
    const node = arr.shift();
    if(node === 's' && arr.length) {
      arr.push('s');
      count.push(0);
      continue;
    }

    if(node === 's' && !arr.length) {
      return count;
    }

    arr.push(...node.children);
    count[count.length - 1]++;
  }
  return count;
}

// const root = new Node(0);
// root.add(1);
// root.add(2);
// root.add(3);
// root.children[0].add(4);
// root.children[2].add(5);
// const test = levelWidth(root);
// debugger;

module.exports = levelWidth;

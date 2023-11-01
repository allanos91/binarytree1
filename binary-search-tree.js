const { returns } = require("chai-spies");

// Do not change this
class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {

  constructor() {
    this.root = null
  }

  insert(val, currentNode=this.root) {
    const newNode = new TreeNode(val)
    if (this.root === null) {
      this.root = newNode
      return
    }
    if (val < currentNode.val) {
      if (!currentNode.left) {
        currentNode.left = newNode
      } else {
        this.insert(val, currentNode.left)
      }
    }

    if (val > currentNode.val) {
      if (!currentNode.right) {
        currentNode.right = newNode
      } else {
        this.insert(val, currentNode.right)
      }
      }

  }

  search(val, tree = this.root) {

    if (tree === null) return false

    if (val === tree.val) return true

    if (val < tree.val) {
      return this.search(val, tree.left)
    }

    if (val > tree.val) {
      return this.search(val, tree.right)
    }
  }


  preOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  inOrderTraversal(currentNode = this.root) {
    // Your code here
  }


  postOrderTraversal(currentNode = this.root) {
    // Your code here
  }

    // Breadth First Traversal - Iterative
  breadthFirstTraversal() {
    // Your code here
  }

  // Depth First Traversal - Iterative
  depthFirstTraversal() {
    // Your code here
  }
}

module.exports = { BinarySearchTree, TreeNode };

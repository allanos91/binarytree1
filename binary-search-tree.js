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
    if (!currentNode) {
      this.root = newNode
      return
      // newNode.left = null
      // newNode.right = null
    }
    if (val < currentNode.val) {
        currentNode.left = newNode
      }
    if (val > currentNode.val) {
      currentNode.right = newNode
      }

  }

  search(val) {
    // Your code here
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

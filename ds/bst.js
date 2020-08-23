class Node {
  constructor(data, left = null, right = null) {
    this.data = data;
    this.left = left;
    this.right = right;
  }
}

class BST {
  constructor() {
    this.root = null;
  }
  add(data) {
    if (this.root === null) {
      this.root = new Node(data);
      return;
    } else {
      const searchTree = (node) => {
        if (data < node.data) {
          if (node.left === null) {
            node.left = new Node(data);
            return;
          } else {
            return searchTree(node.left);
          }
        } else if (data > node.data) {
          if (node.right === null) {
            node.right = new Node(data);
            return;
          } else {
            return searchTree(node.right);
          }
        } else {
          return null;
        }
      };
      return searchTree(this.root);
    }
  }
  remove(data) {
    const removeNode = (node, data) => {
      if (node === null) {
        return null;
      }

      if (data == node.data) {
        // node has no children
        if (node.left === null && node.right === null) {
          return null;
        }
        // node has no left children
        if (node.left === null) {
          return node.right;
        }
        // node has no right children
        if (node.right === null) {
          return node.left;
        }
        // node has two children
        let tempNode = node.right;
        while (tempNode.left != null) {
          tempNode = tempNode.left;
        }

        node.data = tempNode.data;
        node.right = removeNode(node.right, tempNode.data);
        return node;
      } else if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        node.right = removeNode(node.right, data);
        return node;
      }
    };
    this.root = removeNode(this.root, data);
  }
  find(data) {
    let current = this.root;
    // if root is null
    if (current === null) {
      return null;
    }
    while (current.data !== data) {
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
      if (current === null) {
        return null;
      }
    }
    return current;
  }
  findMin() {
    let current = this.root;
    while (current.left !== null) {
      current = current.left;
    }
    return current.data;
  }
  findMax() {
    let current = this.root;
    while (current.right !== null) {
      current = current.right;
    }
    return current.data;
  }
  findMinHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.findMinHeight(node.left);
    let right = this.findMinHeight(node.right);

    if (left < right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  findMaxHeight(node = this.root) {
    if (node === null) {
      return -1;
    }

    let left = this.findMaxHeight(node.left);
    let right = this.findMaxHeight(node.right);

    if (left > right) {
      return left + 1;
    } else {
      return right + 1;
    }
  }
  isPresent(data) {
    let current = this.root;
    while (current) {
      if (current === data) {
        return true;
      }
      if (data < current.data) {
        current = current.left;
      } else {
        current = current.right;
      }
    }

    return false;
  }
  isBalanced() {
    return this.findMaxHeight() - this.findMinHeight() <= 1;
  }
  inOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      const traverseInorder = (node) => {
        node.left && traverseInorder(node.left);
        result.push(node.data);
        node.right && traverseInorder(node.right);
      };
      traverseInorder(this.root);
      return result;
    }
  }
  preOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      const traversePreorder = (node) => {
        result.push(node.data);
        node.left && traversePreorder(node.left);
        node.right && traversePreorder(node.right);
      };
      traversePreorder(this.root);
      return result;
    }
  }
  postOrder() {
    if (this.root === null) {
      return null;
    } else {
      let result = [];
      const traversePostorder = (node) => {
        node.left && traversePostorder(node.left);
        node.right && traversePostorder(node.right);
        result.push(node.data);
      };
      traversePostorder(this.root);
      return result;
    }
  }
  levelOrder() {
    let result = [];
    let tempQ = [];
    if (this.root !== null) {
      tempQ.push(this.root);
      while (tempQ.length > 0) {
        let node = tempQ.shift();
        result.push(node.data);
        if (node.left !== null) {
          tempQ.push(node.left);
        }
        if (node.right !== null) {
          tempQ.push(node.right);
        }
      }
      return result;
    } else {
      return null;
    }
  }
}

let bst = new BST();
bst.add(9);
bst.add(4);
bst.add(17);
bst.add(3);
bst.add(6);
bst.add(22);
bst.add(5);
bst.add(7);
bst.add(20);

console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
bst.add(10);
console.log(bst.findMinHeight());
console.log(bst.findMaxHeight());
console.log(bst.isBalanced());
console.log('inOrder: ' + bst.inOrder());
console.log('preOrder: ' + bst.preOrder());
console.log('postOrder: ' + bst.postOrder());

console.log('levelOrder: ' + bst.levelOrder());

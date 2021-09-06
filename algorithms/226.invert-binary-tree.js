/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
// recursion from bottom to up
 var invertTree = function(root) {
  if (root === null) return null;
  
  let left = invertTree(root.left);
  let right = invertTree(root.right);
  
  root.right = left;
  root.left = right;
  
  return root;
}

// DFS
var invertTree = function(root) {
  const stack = [root];
  
  while (stack.length) {
      const n = stack.pop();
      if (n !== null) {
          let temp = n.left;
          n.left = n.right;
          n.right = temp;
          stack.push(n.left, n.right);
      }
  }
  return root;
}

// BFS
 var invertTree = function(root) {
  const queue = [root];
  
  while (queue.length) {
      const node = queue.shift();
      if (node) {
          [node.left, node.right] = [node.right, node.left];
          queue.push(node.left, node.right);
      }
  }
  return root;
}
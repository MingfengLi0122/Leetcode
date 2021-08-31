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
 * @return {boolean}
 */
 var isBalanced = function(root) {
  if(root === null || !root) return true;
  
  return Math.abs(checkHeight(root.left) - checkHeight(root.right)) <= 1 && isBalanced(root.left) && isBalanced(root.right);
};

function checkHeight(node) {
  if(!node) return 0;
  return Math.max(checkHeight(node.left), checkHeight(node.right)) + 1;
}
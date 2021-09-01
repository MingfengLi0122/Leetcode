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
 * @param {number} targetSum
 * @return {boolean}
 */
 var hasPathSum = function(root, targetSum) {
  if(root === null && targetSum !== 0) return false;
  return checkSum(root, targetSum);
}

function checkSum(root, target) {
  if(!root) return false;
  if(!root.left && !root.right) return target - root.val === 0;
  
  return checkSum(root.left, target - root.val) || checkSum(root.right, target - root.val);
}
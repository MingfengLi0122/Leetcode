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
 * @return {number}
 */
 var pathSum = function(root, targetSum) {
  if (root === null) return 0;
  
  return pathSum(root.left, targetSum) + pathSum(root.right, targetSum) + pathSum2(root, targetSum)
};

const pathSum2 = function(node, targetSum) {
  if (node === null) return 0;
  
  let count = 0;
  
  const self = node.val === targetSum ? 1 : 0;
  
  let newSum = targetSum - node.val;
  count += pathSum2(node.left, newSum);
  count += pathSum2(node.right, newSum);
  
  return count + self;
}
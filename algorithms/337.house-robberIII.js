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
 * @return {number}
 */
 var rob = function(root) {
  return helper(root)[0];
};

function helper(root) {
  if (root === null) return [0, 0];
  const left = helper(root.left); 
  const right = helper(root.right);
  const curMax = Math.max(left[0] + right[0], root.val + left[1] + right[1]);
  const childrenMax = left[0] + right[0];

  return [curMax, childrenMax];
}
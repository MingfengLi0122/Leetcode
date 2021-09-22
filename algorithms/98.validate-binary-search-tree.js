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
 var isValidBST = function(root) {
  let prev = null;
  
  function validate(root) {
      if (!root) return true;
      let left = validate(root.left);
      if (prev !== null && prev >= root.val) return false;
      prev = root.val;
      let right = validate(root.right);
      return left & right;
  }
  return validate(root);
};
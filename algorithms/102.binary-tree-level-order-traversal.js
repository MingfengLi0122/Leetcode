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
 * @return {number[][]}
 */
 var levelOrder = function (root) {
  let queue = [root], ans = []
  while (queue[0]) {
    let qlen = queue.length, row = []
    for (let i = 0; i < qlen; i++) {
      let curr = queue.shift()
      row.push(curr.val)
      if (curr.left) queue.push(curr.left)
      if (curr.right) queue.push(curr.right)
    }
    ans.push(row)
  }
  return ans
};
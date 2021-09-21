/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 var subsets = function(nums) {
  let res = [];
  backtracking(0, [])
  function backtracking(index, curr) {
      res.push(curr);
      for (let i = index; i < nums.length; i++) {
          backtracking(i + 1, [...curr, nums[i]])
      }
  }
  return res;
};
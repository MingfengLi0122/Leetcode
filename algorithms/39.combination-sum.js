/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
 var combinationSum = function(candidates, target) {
  let buffer = [];
  let result = [];
  
  search(0, target);
  return result;
  
  function search(index, target) {
      if (target === 0) return result.push(buffer.slice());

      if (target < 0) return;

      if (index === candidates.length) return;

      buffer.push(candidates[index]);
      search(index, target - candidates[index]);
      buffer.pop();
      search(index + 1, target);
  }
};
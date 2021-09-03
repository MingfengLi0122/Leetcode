/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  const set = new Set();
  
  for(let i = 0; i < nums.length; i++) {
      if (set.has(nums[i])) set.delete(nums[i])
      else set.add(nums[i]);
  }
return Array.from(set)[0];
};

/**
 * @param {number[]} nums
 * @return {number}
 */
 var singleNumber = function(nums) {
  let num = 0;
  for (let n of nums) {
      // XOR
      num ^= n;
  }
  return num;
};
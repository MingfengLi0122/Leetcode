/**
 * @param {number[]} nums
 * @return {number}
 */
 var removeDuplicates = function(nums) {
  let i = 0;
  for (let j = 0; j < nums.length; j++) {
      if (nums[j] !== nums[i]) {
          // store the value at next index when char is different
          nums[++i] =nums[j]
      }
  }
  return ++i;
};
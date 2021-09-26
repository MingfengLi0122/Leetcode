/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxProduct = function(nums) {
  let prevMax = nums[0];
  let prevMin = nums[0];
  let result = nums[0];
  let curMax = 0;
  let curMin = 0;
  
  for (let i = 1; i < nums.length; i++) {
      curMax = Math.max(nums[i] * prevMax, nums[i], nums[i] * prevMin);
      curMin = Math.min(nums[i] * prevMin, nums[i], nums[i] * prevMax);
      prevMax = curMax;
      prevMin = curMin;
      
      result = Math.max(curMax, result);
  }
  return result;
};
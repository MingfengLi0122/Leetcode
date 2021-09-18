/**
 * @param {number[]} nums
 * @return {boolean}
 */
 var canJump = function(nums) {
  let index = 0;
  let max = 0;
  let target = nums.length - 1;
  
  while (index < nums.length) {
      max = Math.max(max, index + nums[index]);
      
      if (max >= target) {
          return true;
      }
      
      if (max <= index) {
          return false;
      }
      index++;   
  }
  return false;
};
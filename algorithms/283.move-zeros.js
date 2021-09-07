/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var moveZeroes = function(nums) {
  for (let i = 0, j = 0; i < nums.length, j < nums.length; j++) {
      if (nums[j] !== 0) {
          let temp = nums[i];
          nums[i++] = nums[j];
          nums[j] = temp;
      }
  }
};
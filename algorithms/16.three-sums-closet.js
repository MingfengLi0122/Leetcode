/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
 var threeSumClosest = function(nums, target) { 
  nums.sort((a, b) => a - b);
  let closet = Infinity;
  
  for (let i = 0; i < nums.length - 2; i++) {
      let left = i + 1;
      let right = nums.length - 1;
      
      while (left < right) {
          let localSum = nums[i] + nums[left] + nums[right];
          
          if (Math.abs(localSum - target) < Math.abs(closet - target)) closet = localSum;
          if (localSum < target) left++;
          else right--;
      }
  }
  return closet;
};
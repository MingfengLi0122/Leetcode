/**
 * @param {number[]} nums
 * @return {number}
 */
 var lengthOfLIS = function(nums) {
  let n  = nums.length;
  let dp = [];
  let maxLen = 0;
  
  for (let i = 0; i < n; i++) {
      let len = 1;
      for (let j = 0; j < i; j++) {
          if (nums[j] < nums[i]) len = Math.max(len, dp[j] + 1);
      }
      dp[i] = len;
      if (dp[i] > maxLen) maxLen = dp[i]       
  }
  return maxLen;
};
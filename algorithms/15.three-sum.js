/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  let res = [];
  let target = 0;
  nums = nums.sort((a, b) => a - b);

  if (nums.length < 3) return res;

  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;

    let j = i + 1;
    let k = nums.length - 1;

    while (j < k) {
      if (nums[i] + nums[j] + nums[k] < target) {
        j++;
        while (j < k && nums[j] === nums[j - 1]) j++;
      } else if (nums[i] + nums[j] + nums[k] > target) {
        k--;
        while (j < k && nums[k] === nums[k + 1]) k--;
      } else {
        res.push([nums[i], nums[j], nums[k]]);
        j++;
        k--;
        while (j < k && nums[j] === nums[j - 1]) j++;
        while (j < k && nums[k] === nums[k + 1]) k--;
      }
    }
  }
  return res;
};
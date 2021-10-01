/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
  const N = nums.length;
  let output_arr = [];

  output_arr[0] = 1;

  for (let i = 1; i < N; i++) {
    output_arr[i] = nums[i - 1] * output_arr[i - 1];
  }

  let R = 1;
  for (let i = N - 1; i >= 0; i--) {
    output_arr[i] = output_arr[i] * R;
    R = R * nums[i];
  }
  return output_arr;
};
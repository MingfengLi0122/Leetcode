/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  for (let i = 0; i < numbers.length; i++) {
    let left = i + 1;
    let right = numbers.length - 1;
    let temp = target - numbers[i];
    while (left <= right) {
      let mid = Math.floor(left + (right - left) / 2);
      if (numbers[mid] === temp) return [i + 1, mid + 1];
      if (numbers[mid] < temp) left = mid + 1;
      if (numbers[mid] > temp) right = mid - 1;
    }
  }
};

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
 var twoSum = function(numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (numbers[left] + numbers[right] !== target) {
      if (numbers[left] + numbers[right] < target) left++;
      if (numbers[left] + numbers[right] > target) right--;
  }
  return [left + 1, right + 1]
};
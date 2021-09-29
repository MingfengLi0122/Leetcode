/**
 * @param {number[]} nums
 * @return {number}
 */
var findDuplicate = function (nums) {
  const map = new Map();

  for (let num of nums) {
    if (map.has(num)) {
      return num;
    }
    map.set(num, 1);
  }
  return -1;
};
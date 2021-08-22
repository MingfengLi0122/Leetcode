/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/
 var twoSum = function(nums, target) {
  let map = new Map();
  
  for (let i = 0; i < nums.length; i++) {
      if (map.has(target - nums[i])) {
          return [map.get(target - nums[i]), i];
      } else {
          map.set(nums[i], i);
      }
  }
  return []
};

var twoSum = function(nums, target) {
  let hash = {};
  
  for (let i = 0; i < nums.length; i++) {
      if (hash[target - nums[i]] !== undefined) {
          return [hash[target - nums[i]], i];
      } else {
          hash[nums[i]] = i
      }
  }
  return [];
};
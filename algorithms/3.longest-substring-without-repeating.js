/**
 * @param {string} s
 * @return {number}
 */
 var lengthOfLongestSubstring = function(s) {
  let left_pointer = 0;
  let right_pointer = 0;
  let max = 0;
  let set = new Set();
  
  while (right_pointer < s.length) {
      if (!set.has(s.charAt(right_pointer))) {
          set.add(s.charAt(right_pointer));
          right_pointer++;
          max = Math.max(max, set.size);
      } else {
          set.delete(s.charAt(left_pointer));
          left_pointer++;
      }
  }
  return max;
};
/**
 * @param {number[]} height
 * @return {number}
 */
 var maxArea = function(height) {
  let left = 0;
  let right = height.length - 1;
  let res = 0;
  
  while (left < right) {
      let h = Math.min(height[left], height[right]);
      let area = h * (right - left);
      
      if (area > res) res = area;
      
      if (height[left] < height[right]) left ++;
      else right --;
  }
  return res;
};
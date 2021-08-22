/**
 * @param {number} x
 * @return {number}
 */

/*Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).*/
 var reverse = function(x) {
  const isNegative = x < 0;
  
  x = Math.abs(x);
  let ret = 0;
  
  while(x > 0) {
      const num = x % 10;
      x = Math.floor(x / 10);
      ret *= 10;
      ret += num;
  }
  if (ret > Math.pow(2, 31)) return 0
  return isNegative ? ret * -1 : ret;
};
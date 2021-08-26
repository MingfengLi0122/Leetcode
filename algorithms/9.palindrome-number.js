/**
 * @param {number} x
 * @return {boolean}
 */
/*Given an integer x, return true if x is palindrome integer.

An integer is a palindrome when it reads the same backward as forward. For example, 121 is palindrome while 123 is not. */

var isPalindrome = function (x) {
  if (x < 0) return false;
  let rev = 0;
  for (let i = x; i >= 1; i = Math.floor(i / 10)) rev = rev * 10 + i % 10;
  return rev === x;
};
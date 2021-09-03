/**
 * @param {string} s
 * @return {boolean}
 */
 var isPalindrome = function(s) {
  const str = s.toLowerCase().replace(/[^a-z0-9]/gi, '');
  for (let i = 0, j = str.length - 1; i <= j; i++, j--) {
      if (str[i] !== str[j]) return false;
  }
  return true;
};
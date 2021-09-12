/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits === null || digits.length === 0) return [];
  const map = {
    2: 'abc',
    3: 'def',
    4: 'ghi',
    5: 'jkl',
    6: 'mno',
    7: 'pqrs',
    8: 'tuv',
    9: 'wxyz'
  }
  let res = [];

  function dfs(index, string) {
    if (index === digits.length) {
      res.push(string);
      return;
    }
    for (let char of map[digits[index]]) {
      dfs(index + 1, string + char);
    }
  }
  dfs(0, '');
  return res;
};
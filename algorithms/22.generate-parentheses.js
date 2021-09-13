/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function(n) {
  let res = [];
  
  backTrace(n, n, '', res);
  
  return res;
};

function backTrace(left, right, string, res) {
  if (left > right) return;
  
  if (left === 0 && right === 0) {
      res.push(string);
  }
  
  if (left > 0) backTrace(left - 1, right, string + '(', res);
  if (right > 0) backTrace(left, right - 1, string + ')', res);
}
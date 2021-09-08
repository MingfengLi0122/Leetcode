/**
 * @param {number} n
 * @return {number[]}
 */
 var countBits = function(n) {
  let res = new Array(n + 1);
  res[0] = 0;
  for (let i = 1; i <= n; i++) {
      res[i] = res[Math.floor(i/2)] + i%2;
  }
  return res;
};
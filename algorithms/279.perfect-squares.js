/**
 * @param {number} n
 * @return {number}
 */
 var numSquares = function(n) {
  let dp = new Array(n + 1);
  
  dp[0] = 0;
  
  for (let i = 1; i <= n; i++) {
      dp[i] = i;
      for (let j = 1; j * j <= i; j++) {
          dp[i] = Math.min(dp[i], dp[i - j*j] + 1); 
      }
  }
  
  return dp[n];
};
/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  if (s.length <= 1) return s;

  const dp = [...new Array(s.length)].map(_ => new Array(s.length).fill(false));
  let lps = '';

  for (let i = 0; i < s.length; i++) {
    dp[i][i] = true;
    lps = s[i];
  }

  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[i + 1]) {
      dp[i][i + 1] = true;
      lps = s.substring(i, i + 2);
    }
  }

  for (let i = s.length - 1; i >= 0; i--) {
    for (let j = i + 2; j < s.length; j++) {
      if (dp[i + 1][j - 1] && s[i] === s[j]) {
        dp[i][j] = true;
        if ((j - i + 1) > lps.length) {
          lps = s.substring(i, j + 1);
        }
      }
    }
  }
  return lps;
};
/**
 * @param {string} s
 * @return {number}
 */

 const symbol = {
  'I' : 1,
  'V' : 5,
  'X' : 10,
  'L' : 50,
  'C' : 100,
  'D' : 500,
  'M' : 1000
}

var romanToInt = function(s) {
  let val = 0;
  for (let i = 0; i < s.length; i++) {
      symbol[s[i]] < symbol[s[i + 1]] ? val -= symbol[s[i]] : val += symbol[s[i]];
  }
  
  return val;
};
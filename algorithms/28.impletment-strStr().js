/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if (needle === '') return 0;
  
  let i = 0;
  let j = 0;
  
  while(i < haystack.length) {
      if (haystack[i] !== needle[j]) {
          i = i - j + 1;
          j = 0;
      } else {
          i++;
          j++;
      }
      if (j === needle.length) return i - j;
  }
  
  return -1;
};


// method 2
/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
 var strStr = function(haystack, needle) {
  if (needle === '' || needle === haystack) return 0;
  
  if (needle.length > haystack.length) return -1;
  
  for (let i = 0; i < haystack.length - needle.length + 1; i++) {
      if (haystack[i] === needle[0]) {
          for (let j = 0; j < needle.length; j++) {
              if (haystack[i + j] !== needle[j]) break;
              else if (j === needle.length - 1) return i;
          }
      }
  }
  
  return -1;
};
/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  if (s === null || s.length === 0) return null;

  const last = new Array(26).fill(-1);
  const partitions = [];
  let start = 0;
  let end = 0;

  for (let i = 0; i < s.length; i++) {
    last[s.charCodeAt(i) - 'a'.charCodeAt(0)] = i;
  }


  for (let i = 0; i < s.length; i++) {
    end = Math.max(end, last[s.charCodeAt(i) - 'a'.charCodeAt(0)]);
    if (i === end) {
      partitions.push(i - start + 1);
      start = i + 1;
    }
  }
  return partitions;
};
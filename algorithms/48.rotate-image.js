/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
 var rotate = function(matrix) {
  for (let r = 0; r < matrix.length; r++) {
      for (let c = r; c < matrix[0].length; c++) {
          let temp = matrix[r][c];
          matrix[r][c] = matrix[c][r];
          matrix[c][r] = temp;
      }
  }
  
  for (let r = 0; r < matrix.length; r++) {
      for (let c = 0; c < matrix[0].length / 2; c++) {
          let temp = matrix[r][c];
          matrix[r][c] = matrix[r][matrix[0].length - c - 1];
          matrix[r][matrix[0].length - c - 1] = temp;
      }
  }
};
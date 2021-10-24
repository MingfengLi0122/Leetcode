/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 function isOutOfBound(board, row, col) {
    return row < 0 || row >= board.length || col < 0 || col >= board[0].length;
 } 
 
 function existHelper(row, col, word, board) {
     if (!word.length) return true;
     if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false; 
     
     const curChar = board[row][col];
     const newWord = word.substr(1);
     board[row][col] = 0;
     
     const results = existHelper(row + 1, col, newWord, board) ||
           existHelper(row - 1, col, newWord, board) ||
           existHelper(row, col + 1, newWord, board) ||
           existHelper(row, col - 1, newWord, board)
     board[row][col] = curChar;
     
     return results;
 }
 
 var exist = function(board, word) {
     for (let row = 0; row < board.length; row++) {
         for (let col = 0; col < board[0].length; col++) {
             if (existHelper(row, col, word, board)) return true;
         }
     }
     return false;
 };
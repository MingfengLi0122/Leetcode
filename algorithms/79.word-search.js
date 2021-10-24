/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

const isOutOfBound = (board, row, col) => row < 0 || row >= board.length || col < 0 || col >= board[0].length;

function existHelper(board, word, row, col) {
    if (!word.length) return true;
    if (isOutOfBound(board, row, col) || board[row][col] !== word[0]) return false;

    const curChar = board[row][col];
    const newWord = word.substr(1);

    board[row][col] = 0;

    const results = existHelper(board, newWord, row + 1, col) ||
        existHelper(board, newWord, row - 1, col) ||
        existHelper(board, newWord, row, col + 1) ||
        existHelper(board, newWord, row, col - 1)

    board[row][col] = curChar;

    return results;
}

var exist = function (board, word) {
    for (let row = 0; row < board.length; row++) {
        for (let col = 0; col < board[0].length; col++) {
            if (existHelper(board, word, row, col)) return true;
        }
    }
    return false;
};
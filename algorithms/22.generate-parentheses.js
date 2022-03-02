/**
 * @param {number} n
 * @return {string[]}
 */
 var generateParenthesis = function (n) {

  const gen = (canOpen, currentString, canClose) => {
      let all = [];
      if (canOpen === 0 && canClose === 0) return [currentString];
      if (canOpen > 0) {
          all = [...all, ...gen(canOpen - 1, currentString + '(', canClose + 1)];
      }
      if (canClose > 0) {
          all = [...all, ...gen(canOpen, currentString + ')', canClose - 1)];
      }
      return all;
  }
  return gen(n, '', 0);
};
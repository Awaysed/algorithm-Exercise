// https://leetcode.cn/problems/guess-number-higher-or-lower/description/
/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  const rec = (start, end) => {
    const mid = Math.floor((start + end) / 2);
    const res = guess(mid);
    if (res === 0) return mid;
    if (res === -1) {
      return rec(start, mid - 1);
    } else if (res === 1) {
      return rec(mid + 1, end);
    }
  };
  return rec(1, n);
};
var guess = function (num) {};

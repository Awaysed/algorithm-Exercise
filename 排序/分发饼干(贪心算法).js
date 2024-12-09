// https://leetcode.cn/problems/assign-cookies/description/
/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  const grr = g.sort((a, b) => a - b);
  const srr = s.sort((a, b) => a - b);
  // 给饼干和孩子排序
  let num = 0;
  for (const val of srr) {
    if (grr[num] <= val) num++; // 满足条件则让孩子移动下一位
  }
  return num
};
console.log(findContentChildren([1, 2], [1, 2, 3]));

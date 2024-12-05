// 给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
// 你可以假设数组是非空的，并且给定的数组总是存在多数元素。
// https://leetcode.cn/problems/majority-element/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const getCunt = (start, end, num) => {
    let count = 0;
    for (let i = start; i < nums.length; i++) {
      if (nums[i] === num) count++;
    }
    return count;
  };
  //找区间的众数 就是数量最多的
  const merge = (start, end) => {
    if (start == end) return nums[start]; // 说明到底了，一个值了
    let mid = Math.floor((start + end) / 2);
    const l = merge(start, mid); // 左边的
    const r = merge(mid + 1, end); // 右边的众数
    if (l == r) return l; // 是同一个返回
    const countL = getCunt(start, end, l); // 不是同一个 去该区间找哪个数最多则返回哪一个
    const countR = getCunt(start, end, r);
    return countL > countR ? l : r;
  };
  return merge(0, nums.length - 1);
};

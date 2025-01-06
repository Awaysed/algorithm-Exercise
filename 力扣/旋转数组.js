// https://leetcode.cn/problems/rotate-array/description/?envType=study-plan-v2&envId=top-interview-150
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
// 新开内存 
var rotate = function (nums, k) {
  let newArray = [];
  const len = nums.length;
  for (let i = 0; i < len; i++) {
    newArray[(i + k) % n] = nums[i];
    // i + k) % n 的余数刚好是需要更改的位置
  }
  for (let i = 0; i < len; i++) {
    nums[i] = newArray[i];
  }
  return nums;
};

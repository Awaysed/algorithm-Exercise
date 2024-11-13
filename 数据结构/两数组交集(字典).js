/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
  const set = new Set(nums1);  // 集合
  return [...new Set(nums2)].filter((val) => set.has(val)); // 转换成数组然后循环
};
intersection([2, 34, 3, 4, 34, 4], [34, 34, 3, 5, 5, 5]);

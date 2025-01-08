// https://leetcode.cn/problems/jump-game/description/
/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let cover = 0; // 每次最大步数
  for (let i = 0; i < nums.length; i++) {
    if (i <= cover) { // 这个判断至关重要(cover低于i说明遇见0了，没戏了)
      cover = Math.max(nums[i] + i, cover); // 每次取最优解 最长的
      if (cover >= nums.length) return true; // 说明到达终点 没必要再跑了
    }
  }
  return false;
};
console.log(canJump([3, 2, 1, 0, 4]));

// 回头再看 又理解不了 呜呜

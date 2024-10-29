// https://leetcode.cn/problems/two-sum/description/
// 输入：nums = [2,7,11,15], target = 9
// 输出：[0,1]
// 解释：因为 nums[0] + nums[1] == 9 ，返回 [0, 1] 。
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numMap =  new Map()
    for (let i = 0; i < nums.length; i++) {
        const differ = target - nums[i]
        if(numMap.has(differ)) {
            return [numMap.get(differ),i]
        }
        numMap.set(nums[i],i)
    }
};
console.log(twoSum([2,7,11,15],9));
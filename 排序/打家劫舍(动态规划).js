// https://leetcode.cn/problems/house-robber/description/
/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if(nums.length === 0) return 0
    const dp = [0,nums[0]]
    for (let i = 2; i <= nums.length; i++) {
        dp[i] = Math.max(dp[i-1],dp[i-2] + nums[i-1])
        // 注意这里的 i=2 所有i<= nums.length 等于向前移一位，所以 nums[i-1]
    }
    console.log(111,dp);
    return dp[dp.length -1]
};
console.log(rob([1,2,3,1]));



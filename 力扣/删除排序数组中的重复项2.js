https://leetcode.cn/problems/remove-duplicates-from-sorted-array-ii/description/?envType=study-plan-v2&envId=top-interview-150

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len = nums.length
    if(len < 2) return  len
    let fast = 2
    let slow = 2
    while (fast < len) {
        if(nums[slow -2] !== nums[fast]){
            nums[slow] = nums[fast]
            slow++
        }
    }
    fast++
    return slow
};
// 好难 
// 虽然代码能写下来 但是完全理解不了 太抽象 无法想象

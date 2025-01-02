// https://leetcode.cn/problems/remove-duplicates-from-sorted-array/description/?envType=study-plan-v2&envId=top-interview-150


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    const len  = nums.length
    if(len===0) return 0
    let fast = 1
    let slow = 1
    while (fast < len) {
        if(nums[fast - 1] !== nums[fast]){
            nums[slow] = nums[fast]
            slow++
        }
        fast++
    }
    return slow
};
// 双指针 前面指针判断 

// 上一个数和下一个数不相等就 将前指针赋慢指针 赋值  
// 相等就跳过
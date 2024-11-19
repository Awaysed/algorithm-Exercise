// 给定一个字符串 s ，请你找出其中不含有重复字符的 最长连续子字符串 的长度。

// https://leetcode.cn/problems/wtcaE1/description/
/**
 * @param {string}   
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const map = new Map() // 设置一个字典
    let lIndex = 0 //后指针位置
    let maxLength = 0// 最大无重复字符串
    for (let i = 0; i < s.length; i++) {
        const val = s[i];
        if(map.has(val) && map.get(val) >= lIndex){ // 有重复 并且在当前指针之间
            lIndex = map.get(val) + 1 // 后指针移到重复元素的位置
            maxLength = Math.max(maxLength,i-lIndex +1)// 更新最大字符串长度
        }
        map.set(val,i) // 设置当前元素进字典
    }
    return maxLength
    //
};




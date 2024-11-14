
// https://leetcode.cn/problems/unique-number-of-occurrences/submissions/580615036/
// 给你一个整数数组 arr，如果每个数的出现次数都是独一无二的，就返回 true；否则返回 false
/**
 * @param {number[]} arr
 * @return {boolean}
 */
var uniqueOccurrences = function(arr) {
    const map = new Map()
    arr.forEach(val => {
        if(map.has(val)){
            map.set(val,map.get(val)+1) // 有则数量加一
        }else{
            map.set(val,1) // 无则设置数量
        }
    });
    const set = new Set()
    for (let [key,val] of map) {
        set.add(val) // 设置set,去重
    }
    return set.size === map.size // 相同长度证明次数相同
};




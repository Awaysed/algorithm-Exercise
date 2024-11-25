// https://leetcode.cn/problems/same-tree/description/
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function(p, q) {
   if(p === null && q === null) return true
   if(p === null || q === null) return false
   if(p.val !== q.val)  return false // 注意这里查找到最后，遇到不同才断掉
   return isSameTree(p.left,q.left) && isSameTree(p.right,q.right) // 递归
};
console.log(isSameTree([1,2],[1,null,2]));
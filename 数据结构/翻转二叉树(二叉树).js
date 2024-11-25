
// https://leetcode.cn/problems/invert-binary-tree/description/
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    if(!root)  return null
    const temp = root.left // 保存 类似于冒泡
    root.left = root.right // 翻转
    root.right = temp
    invertTree(root.left)  //递归，子节点 处理
    invertTree(root.right)
    return  root

};

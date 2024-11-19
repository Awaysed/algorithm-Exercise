// https://leetcode.cn/problems/binary-tree-preorder-traversal/
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//递归
var preorderTraversal = function (root) {
  const valArray = [];
  const fun1 = (node) => {
    if (node) {
      valArray.push(node.val); //当节点值加入
      fun1(node.left); // 处理左边的值
      fun1(node.right); // 处理右边的值
    }
  };
  fun1(root);
  return valArray;
};
// 栈
var preorderTraversal1 = function (root) {
  const valArray = [];
  const stack = [root]; // 当前栈
  while (stack.length) { // 当前栈有值就循环
    const result = stack.pop();// 出栈
    valArray.push(result.val);// 收集当前值
    result.right && stack.push(result.right); // 右边入栈(因为出栈后面先出)
    result.left && stack.push(result.left); // 左边入栈
  }
  return valArray;
};
const root = {
  val: 1,
  left: {
    val: 11,
    left: {
      val: 31,
    },
    right: {
      val: 32,
    },
  },
  right: {
    val: 12,
    left: {
      val: 41,
    },
    right: {
      val: 42,
      left: {
        val: 23,
      },
    },
  },
};

console.log(preorderTraversal1(root));

//leetcode.cn/problems/maximum-depth-of-binary-tree/description/
/**
 * @param {TreeNode} root
 * @return {number}
 */
https: var minDepth = function (root) {
  if (!root) return 0;
  // let o = root
  const stack = [root];
  let num = 0;// 记录深度
  while (stack.length) {
    num++;
    let length = stack.length;
    while (length--) { // 之前上一轮的所有储存值 都循环完
      let o = stack.shift(); // 先进先出
      if (o.left) stack.push(o.left); // 加入新的
      if (o.right) stack.push(o.right);
    }
  }
  return num
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

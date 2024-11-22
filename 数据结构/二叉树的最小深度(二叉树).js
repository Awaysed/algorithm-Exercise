// https://leetcode.cn/problems/minimum-depth-of-binary-tree/description/
/**
 * @param {TreeNode} root
 * @return {number}
 */
var minDepth = function (root) {
  if (!root) return 0;
  // let o = root
  const stack = [[root, 0]];
  while (stack.length) {
    const [o, n] = stack.shift(); // 这里为什么用shift(先进先出) 画个图 用pop 子节点的优先级高于 上一个父节点
    if (!o.left && !o.right) {
      return n;
    }
    if (o.left) {
      stack.push([o.left, n + 1]);
    }
    if (o.right) {
      stack.push([o.right, n + 1]);
    }
  }
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

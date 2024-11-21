// https://leetcode.cn/problems/binary-tree-inorder-traversal/

/**
 * @param {TreeNode} root
 * @return {number[]}
 */
//递归
var inorderTraversal = function (root) {
    const arr = []
    const fun = (root)=>{
        if(root){
            fun(root.left)
            arr.push(root.val)
            fun(root.right)
        }
    }
    fun(root)
    return arr
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

// console.log(inorderTraversal(root));

var inorderTraversal = function (root) {
    const arr = []
    let o = root
    const stack = [] // 栈
    while (stack.length || o) {
        while (o) {
            stack.push(o)
            o = o.left
        }
        const sl = stack.pop()
        arr.push(sl.val)
        o  = sl.right
    }
    return arr
};



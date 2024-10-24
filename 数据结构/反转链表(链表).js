// 假设链表为 1→2→3→∅，我们想要把它改成 ∅←1←2←3。
// https://leetcode.cn/problems/reverse-linked-list/solutions/551596/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//迭代
var reverseList = function (head) {
  let prev = null;
  let curr = head;
  while (curr) {
    const next = curr.next;
    // 将next保存起来
    curr.next = prev;
    // 将之前的prev放到curr链表后面
    prev = curr;
    // 置换
    curr = next;
    // 继续后面的链表置换
  }
  return prev;
};
const list = {
  a: 1,
  next: {
    a: 2,
    next: {
      a: 3,
      next: {
        a: 4,
      },
    },
  },
};
console.log(reverseList(list));

//递归
var reverseList = function (head) {
  if (head == null || head.next == null) {
    return head;
  }
//   最后是5->null
  const newHead = reverseList(head.next)
//   curr head : 4->5->null
  head.next.next = head
  // curr head : 4<->5
  head.next = null
  // curr head : 4<-5
  // 此时的总head为 1->2->3->4<-5
  return newHead
};
// 递归有点绕，看官方下面评论&自己画图
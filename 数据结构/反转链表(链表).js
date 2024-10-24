// 假设链表为 1→2→3→∅，我们想要把它改成 ∅←1←2←3。
// https://leetcode.cn/problems/reverse-linked-list/solutions/551596/fan-zhuan-lian-biao-by-leetcode-solution-d1k2/


/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//迭代
var reverseList = function(head) {
    let prev = null
    let curr = head
    while (curr) {
        const next  = curr.next
        // 将next保存起来
        curr.next = prev
        // 将之前的prev放到curr链表后面
        prev= curr
        // 置换
        curr = next
        // 继续后面的链表置换
    }
    return prev
};
const list = {
    a:1,
    next:{
        a:2,
        next:{
            a:3,
            next:{
                a:4
            }

        }
    }
}
console.log(reverseList(list))
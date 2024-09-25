// 如果链表中有某个节点，可以通过连续跟踪 next 指针再次到达，则链表中存在环
// https://leetcode.cn/problems/linked-list-cycle/description/
var hasCycle = function(head) {
    let b = head // 后指针
    let p = head  // 前指针
    while (p.next !== null && p !== null) {
        b = b.next
        p = p.next.next
        if(b == p){
            return true // 表示前指针追上了后指针
        }
    }
    return false
};

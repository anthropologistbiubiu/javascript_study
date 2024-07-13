




function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

var swapPairs = function(head) {
    let cur = head
    let pre = ListNode(0, cur)
    // 1,2,3,4
    if (cur.next === null) {
        return head;
    }
    while (pre.next !== null && cur.next !== null) {
        pre.next = cur.next
        cur.next = cur.next.next
        pre.next.next = cur
        pre = cur
        cur = cur.next
    };
    return head;

};
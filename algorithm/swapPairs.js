




function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {

    if (head === null || head.next === null) {
        return head;
    }
    let cur = head
    let dummy = new ListNode(0, cur)
    let pre = dummy
    while (pre.next !== null && cur.next !== null) {
        pre.next = cur.next
        cur.next = cur.next.next
        pre.next.next = cur
        pre = cur
        cur = cur.next
    };
    return dummy.next;
};
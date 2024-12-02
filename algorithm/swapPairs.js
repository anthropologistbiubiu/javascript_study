
function ListNode(val, next) {
     this.val = (val===undefined ? 0 : val)
     this.next = (next===undefined ? null : next)
}


var swapPairs = function(head) {
    // 如果链表为空或只有一个节点，直接返回
    if (head === null || head.next === null) {
        return head;
    }

    // 创建一个虚拟节点
    let dummy = new ListNode(0);
    dummy.next = head;

    // 初始化 pre 和 cur 指针
    let pre = dummy;
    let cur = head;

    // 遍历链表，交换每一对相邻节点
    while (cur !== null && cur.next !== null) {
        // 保存下一组要处理的起始节点
        let nextPair = cur.next.next;

        // 指向当前组的第二个节点
        let second = cur.next;

        // 交换节点
        second.next = cur;       // 第二个节点指向第一个节点
        cur.next = nextPair;     // 第一个节点指向下一组的起始节点
        pre.next = second;       // 前一个节点连接到当前组的第二个节点

        // 移动 pre 和 cur 指针到下一组
        pre = cur;
        cur = nextPair;
    }

    // 返回交换后的链表
    return dummy.next;
};
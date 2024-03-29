class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}


class LinkedList{
   constructor() {
       this.head = null
       this.length = 0
   }

    append(data){
        const node = new Node(data)
        if (this.head == null) {
            this.head = node
            this.length++
            return
        } else {
            let head = this.head
            while (head.next != null) {
                head = head.next
            }
            head.next = node
        }
        this.length++
    }
    remove(data){
        if (this.head == null) {
            return
        }
        let pre = null
        let cur = this.head
        if (cur.data == data) {
            this.head = this.head.next
            this.length--
            return
        }
        while (cur != null && cur.data != data) {
            pre = cur
            cur = cur.next
        }
        if (cur) {
           pre.next = cur.next
        }
        this.length--
    }
    find(data){
        let cur = this.head
        while (cur != null && cur.data != data) {
            cur = cur.next
        }
        if (cur) {
            return cur
        }
        return null
    }
    update(old_data,new_data){
        let pr = this.find(old_data)
        if (pr != null) {
            pr.data = new_data
        }
    }
    print() {
        let cur = this.head
        for ( let i = 0;i < this.length;i++) {
            console.log(cur.data)
            cur = cur.next

        }
    }
}


list1 = new LinkedList()
list1.append(1)
list1.append(2)
list1.append(3)
console.log("-----------")
list1.print()
list1.remove(3)
console.log("after remove")
list1.print()
console.log('--------')
console.log(list1.find(1))
list1.update(11,10)
console.log('------------update')
list1.print()





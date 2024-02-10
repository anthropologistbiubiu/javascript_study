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
    remove(){

    }
    update(){

    }
    find(){

    }
    print() {
        let head = this.head
        for ( let i = 0;i < this.length;i++) {
            console.log(head.data)
            head = head.next

        }
    }
}


list1 = new LinkedList()
list1.append(1)
list1.append(2)
list1.append(3)
list1.print()





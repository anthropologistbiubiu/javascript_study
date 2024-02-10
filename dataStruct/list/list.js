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
        node = new (Node(data))
        if (this.head == null) {
            this.head = node
            tihs.length++
            return
        } else {
            head = this.head
            while (head.next != null) {
                head = head.next
            }
            head.next = node
        }
        tihs.length++
    }
    remove(){

    }
    update(){

    }
    find(){

    }
    print() {
        for ( i = 0;i < this.length;i++) {
            console.log(this.head.data)
        }
    }
}


list1 = new(LinkedList())
list.append(1)
list.append(2)
list.append(3)
list.print()





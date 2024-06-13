class Node {
    constructor(data) {
        this.data = data
        this.next = null
    }
}

class LinkedList {
    constructor(head = null) {
        this.head = head;
    }

    size() {
        let count = 0
        let node = this.head
        while (node) {
            count++
            node = node.next
        }
        return count
    }

    clear() {
        this.head = null
    }

    getFirst() {
        return this.head
    }

    getLast() {
        let lastNode = this.head
        if (lastNode) {
            while (lastNode.next) {
                lastNode = lastNode.next
            }
        }
        return lastNode
    }
}

let node1 = new Node(2)
let node2 = new Node(5)
node1.next = node2

let linkedList = new LinkedList(node1)
console.log(linkedList.getLast())
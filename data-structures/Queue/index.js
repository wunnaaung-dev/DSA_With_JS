class Queue {
    constructor() {
        this.items = {}
        this.head = 0
        this.tail = 0
    }

    isEmpty() {
        return this.head === this.tail
    }

    enqueue(item) {
        this.items[this.tail] = item
        this.tail++
        return item + ' inserted'
    }

    dequeue() {
        if(this.isEmpty()) {
            return "Empty"
        }
        const deletedItem = this.items[this.head]
        delete this.items[this.head]
        this.head++
        return deletedItem
    }

    peek() {
        return this.items[this.head]
    }
}

const queue = new Queue()
queue.enqueue("Wunna")
queue.enqueue("Aung")
queue.dequeue()
queue.enqueue("Someone")
console.log(queue.peek())
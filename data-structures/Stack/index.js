class Stack {
    constructor() {
        this.stack = []
    }

    isEmpty() {
        return this.stack.length == 0
    }

    pop() {
        if(this.isEmpty()) {
            console.log("Stack is empty")
        }
        return this.stack.pop()
    }

    push(item) {
        this.stack.push(item)
    }

    peek() {
        if(this.isEmpty()) {
            console.log("Stack is empty")
        }
        return this.stack[this.stack.length - 1]
    }
}

let stack = new Stack()
stack.push("Coffee")
stack.push("Tea")
const myFav = stack.peek()
console.log(myFav)

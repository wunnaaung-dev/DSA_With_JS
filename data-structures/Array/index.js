class Array {
    constructor(initialArr = []) {
        this.arr = initialArr
    }

    iterate() {
        for (let elem of this.arr) {
            console.log(elem)
        }
    }

    insert(index, elem) {
        if (index < 0 || index > this.arr.length) {
            console.error("Index out of bounds")
            return;
        }
        //shift elements to the right to make space for new elemes
        for (let i = this.arr.length; i > index; i--) {
            this.arr[i] = this.arr[i - 1] // create next space and move one after another
        }
        this.arr[index] = elem
    }

    delete(index) {
        if (index < 0 || index >= this.arr.length) {
            console.error("Index out of bounds")
            return;
        }
        for(let i = index; i < this.arr.length; i++) {
            this.arr[i] = this.arr[i + 1] //replace the value of index to be deleted with the value of next index
        }
        this.arr.length-- //reduce the size
    }


    update(index, newValue) {
        if (index < 0 || index >= this.arr.length) {
            return;  // Index out of bounds
        }
        this.arr[index] = newValue;
    }
}

const arr1 = new Array([1, 2, 3, 4])
console.log(arr1)

arr1.delete(2)
console.log(arr1)

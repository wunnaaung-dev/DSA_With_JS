function reverseArray(arr) {
    const result = []
    for(let element of arr) {
        result.unshift(element) // unshift ==> insert data from the start
    }
    return result;
}



function mergeSort(arr) {
    if(arr.length === 1) {
        return arr;
    }
    const midIndex = Math.floor(arr.length / 2)
    const leftArr = arr.slice(0, midIndex)
    const rightArr = arr.slice(midIndex, arr.length)

    return merge(mergeSort(leftArr), mergeSort(rightArr))
}

function merge(leftArr, rightArr) {
    let result = []
    let leftIndex = 0
    let rightIndex = 0
    while(leftIndex < leftArr.length && rightIndex < rightArr.length) {
        if(leftArr[leftIndex] < rightArr[rightIndex]) {
            result.push(leftArr[leftIndex])
            leftIndex += 1
        } else {
            result.push(rightArr[rightIndex])
            rightIndex += 1
        }
    }
    return result.concat(leftArr.slice(leftIndex)).concat(rightArr.slice(rightIndex))
}

const result = [12, 1, 3, 11, 15]
console.log(mergeSort(result))
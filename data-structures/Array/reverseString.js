
function reverseString(str) {
    let reversed = ''
    for (let char of str) {
        reversed = char + reversed;
    }
    return reversed;
}

console.log(reverseString("Wunna"))
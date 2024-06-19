function reversearray(arr) {
    return arr.slice().reverse();
}
const originalarray = [1, 2, 3, 4, 5];
const reversedarray = reversearray(originalarray);
console.log(reversedarray);
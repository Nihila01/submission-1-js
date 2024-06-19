const numbers = [1, 2, 3, 4, 5, 6];
function filterEvenNumbers(arr) {
  return arr.filter(num => num % 2 === 0);
}
console.log(filterEvenNumbers(numbers));


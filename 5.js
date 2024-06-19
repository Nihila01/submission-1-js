const array = [4, 'hello', 3, true, 'Uki', 5];
function squaredno(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      total += arr[i] * arr[i];
    }
  }
  return total;
}
console.log(squaredno(array));
const strings = ["hello", "", "world", "", "javascript"];
function removeEmptyStrings(arr) {
  return arr.filter(str => str !== "");
}
console.log(removeEmptyStrings(strings));
const sentence = ["hello", "world", "javascript"];
function concatenateWithSpace(arr) {
  return arr.reduce((accumulator, currentValue) => accumulator + " " + currentValue);
}
console.log(concatenateWithSpace(sentence));
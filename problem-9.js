// problem 9 : Find the Lergest Number in an Array

// Without Function
let array = [541, 541, 2454, 2454, 254000, 4, 5451, 5454, 10];
let lergest = array[0];

for (let i = 1; i < array.length; i++) {
  let cerrentElement = array[i];
  if (cerrentElement > lergest) {
    lergest = cerrentElement;
  }
  console.log("cerrentElement ==>", correntElement);
}
console.log("lergest =>>", lergest);



// With Function
function lergestNumber(arr) {
  let lergest = arr[0];
  for (let i = 1; i < arr.length; i++) {
    let cerrentElement = arr[i];
    if (cerrentElement > lergest) {
      lergest = cerrentElement;
    }
  }
  return lergest;
}
console.log("The Largest Number is: ", lergestNumber([2000, 564, 456, 455, 55]));

// problem 9 : Find the Lergest Number in an Array

// Without Function
let array = [541, 541, 2454, 2454, 254000, 4, 5451, 5454, 10];
let lergest = array[0];

for (let i = 1; i < array.length; i++) {
  let correntElement = array[i];
  if (correntElement > lergest) {
    lergest = correntElement;
  }
  console.log("correntElement ==>", correntElement);
}
console.log("lergest =>>", lergest);

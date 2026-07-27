// problem-11: Sum and Average of an Arrya

// Without Function
// let arr = [1, 2, 5, 10, 5];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
//   console.log("arrya of value: ", arr[i]);
//   sum = sum + arr[i];
// }
// console.log("Total Sum: ", sum);
// let average = sum / arr.length;
// console.log("Total Average: ", average);

// With Function
function average(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  let average = sum / arr.length;
  return average;
}
console.log( "Total Average: ", average([50, 15, 12, 14, 15, 5]));

// problem-12: Filte Number Greater Than a Value

// Without Function
// let arr = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
// let value = 30;
// let filterArrya = [];
// for (let i = 0; i < arr.length; i++) {
//   console.log(arr[i]);
//   if (value <= arr[i]) {
//     filterArrya.push(arr[i]);
//   }
// }
// console.log("Filter Value: ", filterArrya);

// With Function
function getFilterArrya(arr, value) {
  let filterArrya = [];

  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    if (value <= arr[i]) {
      filterArrya.push(arr[i]);
    }
  }
  return filterArrya;
}
console.log(getFilterArrya([10, 20, 30, 40, 50, 60, 70, 80, 90, 100], 20));

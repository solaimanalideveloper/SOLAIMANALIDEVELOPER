// problem-15: Return All Even Numbers, Then  Their Sum

// // New Version
// const arr = [56, 44, 43, 46, 754, 34, 870, 65];

// const totalSum = arr
//   .filter((num) => num % 2 === 0) // ধাপ ১: শুধু জোড় সংখ্যা রাখলো
//   .reduce((acc, curr) => acc + curr, 0); // ধাপ ২: জোড় সংখ্যা গুলোর যোগফল বানালো

// console.log("Total Sum:", totalSum); // 1804

// //  Old Version
// let arr = [56, 44, 43, 46, 754, 34, 870, 65];
// let evenNumber = [];
// // Without Function
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] % 2 === 0) {
// // console.log("total even number: ", arr[i]);
//     evenNumber.push(arr[i]);
//   }
// }
// console.log("total even numbers arrya: ", evenNumber);

// let sum = 0;
// for (let key of evenNumber) {
//   console.log(key);
//   sum += key;
// }
// console.log("Total Sum Number: ", sum);

//  //With Function

// let arr = [56, 44, 43, 46, 754, 34, 870, 65];

// function getEvenNumber(arr) {
//   let evenNumber = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       evenNumber.push(arr[i]);
//     }
//   }
//   return evenNumber;
// }

// function getSum(arr) {
//   let sum = 0;
//   for (let key of arr) {
//     console.log(key);
//     sum += key;
//   }
//   return sum;
// }
// let evenNumber = getEvenNumber(arr);
// let sum = getSum(evenNumber);

// console.log("Total Sum Number: ", sum);

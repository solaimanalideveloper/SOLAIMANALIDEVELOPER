// // 1.
// function sayHi(name) {
//   console.log("Hi, " + name);
// }
// sayHi("Mira");

// // 2.
// let word = "hello";
// console.log(word.toUpperCase());

// 3.
// function square(num) {
//   return num ** 2; // find the bug
// }
// console.log(square(4)); // should be 16

// // 4.
// // Bug type: ___
// function sayHi(name) {
//   console.log("Hi, " + name);
// }
// sayHi("Mira");

// // Bug type: ___
// let word = "hello";
// console.log(word.toUpperCase());

// // Bug type: ___
// function square(num) {
//   return num ** 2;
// }
// console.log(square(4));

// function checkScore(score) {
//   if (score >= 50) {
//     return "Pass";
//   } else {
//     return "Fail";
//   }
// }
// console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
// console.log(checkScore(40)); // Expected: "Fail"

// function countUpTo(n) {
//   let count = 0;
//   for (let i = 1; i <= n; i++) {
//     count = count + 1;
//   }
//   return count;
// }
// console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)

// function getFirstElement(arr) {
//   return arr[0]; // find the bug
// }
// console.log(getFirstElement([10, 20, 30])); // Expected: 10 (currently returns 20)

// function subtract(a, b) {
//   return a - b; // find the bug
// }
// console.log(subtract(10, 3)); // Expected: 7 (currently returns -7)

// function isEmpty(str) {
//   if ((str.length == 0)) {
//     // find the bug
//     return true;
//   } else {
//     return false;
//   }
// }
// console.log(isEmpty("")); // Expected: true
// console.log(isEmpty("hi")); // Expected: false

// function getOddNumbers(numbers) {
//   let odds = [];
//   for (let i = 0; i <= numbers.length; i++) {
//     // bug #1 is here
//     if (numbers[i] % 2 == 1) {
//       // bug #2 is here
//       odds.push(numbers[i]);
//     }
//   }
//   return odds;
// }
// console.log(getOddNumbers([1, 2, 3, 4, 5, 6])); // Expected: [1, 3, 5]

// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let i = 0; i <= str.length; i++) {
//     // find the bug
//     if (vowels.includes(str[i])) {
//       count = count + 1;
//     }
//   }
//   return count;
// }
// console.log(countVowels("orange")); // Expected: 3

// function celsiusToFahrenheit(celsius) {
//   return (celsius * 9) / 5 + 32; // find the bug
// }
// console.log(celsiusToFahrenheit(0)); // Expected: 32


// Perblem number 14-9B

function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    // find the bug
    total = total + numbers[i];
  }
  return total;
}
console.log(sumArray([1, 2, 3, 4])); // Expected: 10

// Task 13-2A: Hot, Cold, or Normal

// function checkTemperature(temp) {
//   if (temp >= 35) {
//     return "Hot";
//   } else if (temp <= 15) {
//     return "Cold";
//   } else {
//     return "Normal";
//   }
// }
// console.log(checkTemperature(40));
// console.log(checkTemperature(15));
// console.log(checkTemperature(20));

// Task 13-2B: Reverse a Number

// function reverseNumber(num) {
//   let str = num.toString();
//   let string = str.split("").reverse().join("");
//   return string;
// }
// console.log(reverseNumber(1234));
// console.log(reverseNumber(7));

// Task 13-3A: Product of Digits

// function productOfDigits(num) {
//   let str = num.toString();
//   let total = 1;

//   for (let i = 0; i < str.length; i++) {
//     let multiply = Number(str[i]);
//     total = total * multiply;
//   }
//   return total;
// }
// console.log(productOfDigits(123)); // Expected: 6
// console.log(productOfDigits(4040)); // Expected: 0

// Task 13-3B: Odd Numbers Up To N

// function getOddNumbers(n) {
//   let odds = [];
//   for (let i = 0; i < n; i++) {
//     if (i % 2 !== 0) {
//       odds.push(i);
//     }
//   }

//   return odds;
// }

// console.log(getOddNumbers(10));
// Expected: [1, 3, 5, 7, 9]

// Task 13-4A: Count Vowels

// function countVowels(str) {
//   let vowels = "aeiou";
//   let count = 0;
//   for (let i = 0; i < str.length; i++) {
//     let letter = str[i];
//     // console.log(i, letter);
//     if (vowels.includes(letter)) {
//       //   console.log("vowels");
//       count++;
//     }
//   }
//   return count;
// }
// console.log(countVowels("javascript")); // Expected: 3

// Task 13-4B: Remove First and Last Character

// function removeFirstAndLast(str) {
//   return str.slice(1, str.length - 1);
// }
// console.log(removeFirstAndLast("hello")); // Expected: "ell"
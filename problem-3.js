// problem 3: Factorial of a number

// Whithout Function
// let number = 8;
// let ruselt = 1;

// for (let i = 1; i <= 8; i++) {
//   console.log("Factorial ansare: ", i);
//   ruselt = ruselt * i;
// }
// console.log("Reyal Factorial: ", ruselt);

// Whith Function

function number(a) {
  let ruselt = 1;
  for (let i = 1; i <= a; i++) {
    console.log(i)
    ruselt = ruselt * i;
  }
  return ruselt
}console.log(number(5))



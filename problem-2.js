// problem 2 : Sum of a Range of Number (1 to N)

// let number = 8;
// let sum = 0;
// whithout function

// for (let i = 1; i <= number; i++) {
//   sum = sum + i;
//   console.log("i =>>", i);
// }
// console.log("sum ");

// whith function

function sumOfAange(number) {
  let sum = 1;

  for (let i = 1; i <= number; i++) {
    sum = sum + i;
    console.log(i);
  }
  return sum;
}
console.log(sumOfAange(9));

// // 1.
// // Bug: find why score = 50 doesn't return "Pass"

// function checkScore(score) {
//   if (score >= 50) {
//     return "Pass";
//   } else {
//     return "Fail";
//   }
// }

// console.log(checkScore(50)); // Expected: "Pass" (currently wrong)
// console.log(checkScore(40)); // Expected: "Fail"

2;
// Bug: this loop never ends — find the missing piece

function countUpTo(n) {
  let count = 0;

  for (let i = 1; i <= n; i++) {
    // something is missing here
    count = count + 1;
  }

  return count;
  console.log(countUpTo(5)); // Expected: 5 (currently freezes/never finishes)

  99;
}

// problem-7 : Chack if a String in a Plaingdom

// Without Functon

// let str = "dad";
// let reversStr = "";

// for (let i = str.length - 1; i >= 0; i--) {
//   let letter = str[i];
//   reversStr += letter;
// }
// console.log(reversStr);

// if (str === reversStr) {
//   console.log("Plaingdom Word");
// } else {
//   console.log("Not a Plaingdom Word");
// }

// With Function

function isPlaingdom(str) {
  let reverseStr = "";
  
  for (let i = str.length - 1; i >= 0; i--) {
    let letter = str[i];
    reverseStr += letter;
  }
  console.log(reverseStr);
  if (str === reverseStr) {
    return true;
  } else {
    return false;
  }
}

console.log(isPlaingdom("madam"));

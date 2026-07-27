// problem-8: Cound Word in a Sentence

// let str = ["code", "bangladesh", "rongpur"];
// console.log(str.length);

// Without Function

// let str = "Hello Bangladesh, How are you";
// // console.log(str.split(" ").length);

// let strSplit = str.split(" ");
// console.log(strSplit.length);

// With Function

function wordCound(str) {
  let strSplit = str.split(" ");
  return strSplit.length;
}
console.log(wordCound("Hello Bangladesh"));

//problem-5 : Raverse a String

// Without Function

// let str = "Bangladesh";
// console.log(str);
// let hello = "";
// for (let i = str.length - 1; i >= 0; i--) {
//   console.log(i);
//   hello += str[i];
// }
// console.log(hello);

// With Function

function reverseWord(word) {
  let reverseWord = "";

  for (let i = word.length - 1; i >= 0; i--) {
    let letter = word[i];
    console.log("i-> ", i, letter);
    reverseWord += letter;
  }
  return reverseWord;
}

console.log(reverseWord("Programming"));
console.log(reverseWord("Bangladesh"));

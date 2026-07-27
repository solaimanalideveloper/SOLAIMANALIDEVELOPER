// problem-6 : Count Vowels in a String

// Without  Function
// vawels  ==>  a, e, i, o, u

let str = "Programing Hero";
let vawels = "aeiou";
console.log(str, " : ", "Length number : ", str.length);
let count = 0;
for (let i = 0; i < str.length; i++) {
  let letter = str[i];
  if (vawels.includes(letter)) {
    console.log("Vawels: ", letter);
    count++;
  }
  console.log(i, letter);
}
console.log("count: ", count);

// With Function

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    let letter = str[i];
    console.log("i,  --> letter ->>>>", i, letter);
    if (vowels.includes(letter)) {
      console.log("vowels");
      count++;
    }
  }
  return count;
}
console.log();

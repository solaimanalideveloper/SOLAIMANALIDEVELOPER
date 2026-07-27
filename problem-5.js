//problem-5 : Raverse a String

// Without Function

let str = "Bangladesh";
console.log(str);
let hello = "";
for (let i = str.length - 1; i >= 0; i--) {
  console.log(i);
  hello += str[i];
}
console.log(hello);

// With Function

function str(password) {
  let hello = "";
  for (let i = password.length -1; i >= 0; i--) {
   hello += password[i];
  }
  return hello
}console.log(str("bangladesh"));

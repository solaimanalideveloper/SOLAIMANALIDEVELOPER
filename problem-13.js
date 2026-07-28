// problem-13: Loop Through an Object's Properties

// let monitor = {
//   color: "black",
//   brand: "LG",
//   display: "Something",
//   size: "Something",
// };
// console.log(monitor["color"]); // bracet notetion
// console.log(monitor.brand); //dot notetion

// // for in loop
// for (let key in monitor) {
//   console.log(key, ": ", monitor[key]);
// }

let monitor = {
  color: "black",
  brand: "LG",
  display: "Something",
  size: "Something",
};

// Using key method
let objectKey = Object.keys(monitor);
console.log(objectKey);

for (let i = 0; i < objectKey.length; i++) {
  let key = objectKey[i];
  console.log(key, ": ", objectKey[i]);
}

// for of loop
// for (let key of objectKey) {
//   console.log(key, ": ", objectKey);
// }

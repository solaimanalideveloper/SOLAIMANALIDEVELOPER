// Problem 14: You are given an object containing information about a student.

// ---- Tasks ----
// Print all keys.
// Print all values.
// Print each key-value pair.
// Use for...in to display:
// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Count the total number of properties in the object.
// Check if the object contains a property named "email".

//---- Expected input:
// const student = {
//   name: "Utsho",
//   age: 26,
//   university: "DIU",
//   department: "CSE",
// };

// ------------------------------------

//---- Expected output:
// name age university department

// Utsho 26 DIU CSE

// name: Utsho
// age: 26
// university: DIU
// department: CSE

// Total Properties: 4
// Has Email: false



const student = {
  name: "Solaiman",
  age: 19,
  university: "KPI",
  department: "CST",
};

function objectKeyValue(obj) {
  // 1. Print all keys on a single line
  console.log(Object.keys(obj).join(" "));

  // 2. Print all values on a single line
  console.log(Object.values(obj).join(" "));

  // 3. Print each key-value pair using for...in
  for (let key in obj) {
    console.log(key, ": ", obj[key]);
  }

  // 4. Count total properties
  let objectKeyCount = Object.keys(student); //["name", "age","university","department"]
  console.log("Total Properties: ", objectKeyCount.length);

  // 5. Check for property "email"
  let hasEmailProperty = obj.hasOwnProperty("email");
  console.log("Has Email: ", hasEmailProperty);
}
objectKeyValue(student);

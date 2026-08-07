function promoteEmployee(employee, newTitle) {
  return { ...employee, title: newTitle }; // Spread + Immutable Update
}

// console.log(
//   promoteEmployee({ name: "Rafi", title: "Junior Dev" }, "Senior Dev"),
// );

const employee = { name: "Rafi", title: "Junior Dev" };
const promoted = promoteEmployee(employee, "Senior Dev");

console.log(employee);
console.log(promoted);

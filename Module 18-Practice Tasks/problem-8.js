function getManagerName(employee) {
  return employee?.manager?.name;  //  Optional Chaining 
}
console.log(getManagerName({ name: "Mim", manager: { name: "Tanvir" } }));
console.log(getManagerName({ name: "Rafi" }));
console.log(getManagerName(undefined))

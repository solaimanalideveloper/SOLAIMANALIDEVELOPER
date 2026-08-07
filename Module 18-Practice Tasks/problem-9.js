// function splitFirstRest(arr) {
//   const [first, ...rest] = arr;  // Split,  First,  Rest
//   return { first, rest };
// }
// console.log(splitFirstRest([10, 20, 30, 40]));


const splitFirstRest = ([first, ...rest]) => ({ first, rest });
console.log(splitFirstRest([10, 20, 30, 40]));

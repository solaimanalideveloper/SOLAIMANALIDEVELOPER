function getLowestPrice(prices) {
  return Math.min(...prices); // Spread Operator and Math.min
}
console.log(getLowestPrice([340, 120, 560, 90]));
console.log(getLowestPrice([340, 120, 560, 500, 300, 6646]));

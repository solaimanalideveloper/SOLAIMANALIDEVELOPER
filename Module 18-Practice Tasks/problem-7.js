function sumAllPrices(prices) {
  let sum = 0;

  for (const price of prices) {    // for....of  (Loop)
    sum += price;
  }
  return sum;
}
console.log(sumAllPrices([100, 250, 75]));
console.log(sumAllPrices([100, 250, 75,400,500,750]));

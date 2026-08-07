// function nameOfFunction(param1, param2 = defaultValue) { }

function calculateBill(amount, taxRate = 0.05) {
  let taxAmount = amount * taxRate;
  let totalAmount = amount + taxAmount;
  return totalAmount;
}
console.log(calculateBill(1000));
console.log(calculateBill(1000, 0.1));

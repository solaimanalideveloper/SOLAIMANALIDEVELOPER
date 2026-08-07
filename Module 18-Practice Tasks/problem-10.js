function cloneAndUpdate(arr, index, newValue) {
  const copyArray = [...arr]; // Spread (Immutable Array

  copyArray[index] = newValue;
  return copyArray;
}
console.log(cloneAndUpdate([5, 10, 15], 1, 99));

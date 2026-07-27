// problem 10 : Find the  Smallest Number in a Array

// Without Function
let arr = [450, 250, 20, 50, 25, 30, 15];
let smallest = arr[0];
for (let i = 1; i < arr.length; i++) {
  let currentElement = arr[i];
  if (currentElement < smallest) {
    smallest = currentElement;
  }
  console.log("currentElement: ", currentElement);
}
console.log("Smallest: ", smallest);


// With Functin
function smallestNumber (arr){
    let smallest = arr[0]
    for (let i = 1; i < arr.length; i++){
        let currentElement = arr[i]
        if (currentElement < smallest){
            smallest = currentElement
        }
    }
    return smallest;
}console.log( "The Smallset Number: " ,smallestNumber([142,654,985,10,454,42,2,78]));

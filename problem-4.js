// problem 4: FizzBuzz (1 to N)
// Loop through numbers from 1 to n. If a number is divisible by 3, pront "Fizz"; if divisible by 5, pront "Buzz" if drvisiwies number itself.

// Whithout Function

let number = 15;
for (let i = 1; i <= number; i++) {
  console.log(i);
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log("i=>> ", i);
  }
}

// Whith Function

function itself(number){
  for (let i = 1; i<= number; i++){
    console.log(i)
    if(i % 3 === 0 && i % 5 === 0){
      console.log("FizzBuzz");
    }
    else if (i % 3 === 0 ){
      console.log("Fizz");
    }
    else if (i % 5 === 0){
      console.log("Buzz");
    }
    else{
      console.log("==> ",i)
    }
  }
}itself (20)

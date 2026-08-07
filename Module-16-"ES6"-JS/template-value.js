// function greed(roll="geast") {
//   return `Solaiman is  ${roll}`;
// }
// console.log(greed("student"));

// function greed(roll = "geast") {
//   return `Solaiman is  ${roll}`;
// }
// console.log(greed());

// let name = "Solaiman Ali";
// let age = 19;
// let massage = `Hello ${name}. my age is ${age}`;
// console.log(massage);

// let name = "Solaiman Ali";
// let prich = 150;
// let quntity = 4;
// let amountMassage = `Hello ${name}.  Your bill is => ${prich * quntity}`;
// console.log(amountMassage);

// function amountMassage(name = "Guest", quntity = "1") {
//   // let name = "Solaiman Ali";
//   let prich = 150;
// // let quntity = 4;
//   let amountMassages = `Hello ${name}.  Your bill is => ${prich * quntity}`;
//   return amountMassages;
// }
// console.log(amountMassage());

// function test(...numbers) {
//   console.log(numbers);
// }
// test(1, 2, 3, 4);

// let person = {
//   name: "Solaiman",
//   age: 20,
//   country: "BD",
// };
// let {name, ...others }=person
// console.log(name);
// console.log(person);

// function demo (a,...b){
//   console.log(a)
//   console.log(b)
// }
// demo(45,34,56,3)

// let object = {
//   name: "Solaiman",
//   print: function () {
//     console.log(this.name);
//   },
// };
// let fn = object.print;
// fn();

// let person = {
//   name: "Solaiman",
//   show: function () {
//     console.log(this.name);
//   },
// };
// person.show();

// let person = {
//   name: "Solaiman",
//   show: () => {
//     console.log(this.name);
//   }};
// person.show();

// let student = {
//   name: "Rahim",
//   age : 20,
//   sayName() {
//     console.log(this.name,this.age);
//   }
// };
// student.sayName();

// let car = {
//   name: "BMW",
//   show() {
//     console.log(this.name);
//   }
// };
// car.show();

// let car = {
//   name: "BMW",
//   show() {
//     console.log(this.name);
//  }
// };
// let fn = car.show;
// fn();

// let obj = {
//   name: "JS",
//   print() {
//     return function () {
//       console.log(this.name);
//     };
//   }
// };
// obj.print()();   // undifiend

// let obj = {
//   name: "JS",
//   print() {
//     return () => {
//       console.log(this.name);
//     };
//   }
// };
// obj.print()();  // JS

// const numbers = [10, 20, 30, 40, 50];
// const ten = numbers[0];
// console.log(ten);

//  Distructuring
// const numbers = [10, 20, 30, 40, 50];
// const [a, b, , , e] = numbers;
// console.log(a,b,e);

//  Traditional oya

// const student = {
//   name: "Solaiman",
//   roll: 7,
//   age: 19,
// };
// const name = student.name;
// const roll = student.roll;
// console.log(name, roll);

// const user = {
//   name: "Solaiman",
//   age: 20,
//   id: 40003,
// };
// const entries = Object.entries(user);

// //  ruls--3
// for (let elem of entries) {
//   const [key, value] = elem;
//   console.log(key, value);
// }

// //  ruls--2
// for (let [key, value] of Object.entries(user)) {
//   console.log(key, value);
// }

// Object.seal(user);
// user.subject = "math";
// user.name ="Abir";
// console.log(user);

// Object.freeze(user);
// user.subject = "math";
// user.name ="Abir";
// console.log(user);

// function greet(name = "Guest") {
//   return `Hello, ${name}`;
// }
// console.log(greet());

// const user = {
//   name: "Solaiman",
// };
// const key = "name";
// console.log(user[key]);

// ✔ সব key print করো
// ✔ সব value print করো
// ✔ key + value এ

// const student = {
//   name: "Ali",
//   age: 18,
//   city: "Dhaka",
// };
// console.log(Object.keys(student));
// console.log(Object.values(student));
// console.log(Object.entries(student));

// const obj = {
//   a: 1,
//   b: 2,
// };
// const result = Object.entries(obj);
// console.log(result[1][1]);

// const obj = {
//   a: 1,
//   b: 2,
// };
// console.log(Object.entries(obj)[0]); // sotkat

// const result = Object.entries(obj);  // bistarito
// console.log(result[0]);

// let a = 10;
// let b = a; // value copy হলো
// b = 20;
// console.log(typeof a); // 10 — a অপরিবর্তিত
// console.log(a)

// let obj1 = { name: "Rahim" };
// let obj2 = obj1;
// obj2.name = "Karim";
// console.log(obj1.name);
// console.log(typeof obj1, typeof obj2.name, typeof obj2)

// let user = null;
// console.log(user)  //  null

// let x;
// console.log(x)  //  undefiend

// const number = [10];
// const [a = 1, b = a + 5, c = b + 5] = number;
// console.log(a, b, c);

// var x = 1;
// function outer() {
//   var x = 2;
//   function inner() {
//     var x = 3;
//     console.log(x);
//   }
//   inner();
//   console.log(x);
// }
// outer();
// console.log(x);

// ver status = "Order Placed";

// for (var i = 1; i <= 3; i++) {
//   ver status = "Procossing Item: " + i;
//   console.log(status);
// }
// console.log("Final Status: ", status);

// let status = "Order Placed";

// for (let i = 1; i <= 3; i++) {
//   let status = "Procossing Item: " + i;
//   console.log(status);
// }
// console.log("Final Status: ", status);

/*
  Problem 3: Const বাগ ফিক্স করুন
  কেন এটা crash করছে ব্যাখ্যা করুন, তারপর let/const সঠিকভাবে ব্যবহার করে ফিক্স করুন।
*/
// let student = ["solaiman ", "abir", "kola"];
// let students = [...student, "shawon", "jodu", "modu"];
// let spridStudents = [student, "shawon", "jodu"];
// console.log(students);
// console.log(spridStudents);

/*
  Problem 4: 'this' বাগ ফিক্স করুন
  Arrow function ব্যবহার করে rewrite করুন যাতে 'this.name' ঠিকমতো কাজ করে।
*/
// const user = {
//   name: "Rafiq",
//   greet: function () {
//     setTimeout(() => {
//       //   console.log(`Hello ${(this.name)}`);
//       console.log("Hello, " + this.name);
//     }, 1000);
//     console.log(this.name);
//   },
// };
// user.greet();

/*
  Problem 5: অবজেক্ট Destructure করুন
  name, age, আর city (না থাকলে ডিফল্ট "Rangpur") — এক লাইনে destructuring দিয়ে বের করুন।
*/

// const student = { name: "Karim", age: 22,};
// console.log(student)

// প্রত্যাশিত আউটপুট: Karim is 22 years old, lives in Rangpur

// function calculateTotal(discount, ...proces) {
//   let total = 0;
//   for (let i = 0; i < proces.length; i++) {
//     total += proces[i];
//   }

// //   let total = proces.reduce(
// //     (accmulator, currentValue) => accmulator + currentValue,
// //     0,
// //   );

//   let discountAmount = (total * discount) / 100;
//   let totalAfterDiscounApply = total - discountAmount;
//   return totalAfterDiscounApply;
// }
// console.log(calculateTotal(10, 100, 200, 300, 400,700));



// let arr1 = [10, 20, 30, 40, 50];
// let arr2 = [50, 60, 20, 70, 80, 90];

// let margeArr = [...arr1, ...arr2];
// console.log(margeArr);

// // let newArr = [...new Set(margeArr)];  // 2 wya
// let newArr = Array.from(new Set(margeArr));  // 

// console.log(newArr);





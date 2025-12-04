// console.log("Number to String conversion:-");
// console.log("5"+ 10)
// console.log("5"+ true)
// console.log(""+ 10)
// console.log("String to Number conversion:-");
// console.log("10"-2)
// console.log("10"*"2")
// console.log("10"/2)
// console.log(true-1)
// console.log("Explicit Number conversion:-");
// console.log(Number("123"))
// console.log(Number("abc"))
// console.log(String(123))
// console.log(Boolean(0))
// console.log(Boolean(""))
// console.log(Boolean("Hi"))
// console.log("If condition checker:-");
// if (0) console.log("No");
// else if (NaN) console.log("No");
// else console.log("Yes");
// console.log("== and ===:-");
// console.log("== is used for comparing values and auto convert it and === is for compare value and memeory conversion.");
// console.log(5=="5");
// console.log(5==="5");
// console.log("Variables:-");
// let age=25;
// age=30;
// console.log("Age :"+age);
// // 'Let' keywords - We cannot redeclare the variable again
// var Age=25;
// var Age=30;
// console.log("Age :"+Age);
// // 'var' keywords - We can redeclare the variable again
// const AGE=25;
// // AGE=30; Throw compile time error
// console.log("Age :"+AGE);
// // 'Let' keywords - We cannot reassign and redeclare the variable again
// Hoisting is only for the 'var' keyword not for 'const' and 'let'
// console.log(x);
// var x=50
// console.log(x);

// 'function' example
// and function scope can be done by only "var" key word
// function example(){
//     if(1) var x = 10;
//     console.log(x);
// }
// example();

//hoisting in function
// greet();
// function greet(){
//     console.log("Hello World");
// }

//function expression:-
// const greet = function(){
//     console.log("Hello world");
// }
// greet();

// function process(callback){ //higher order function
//     console.log("Process started");
//     callback();
// }
// function callback(){
//     console.log("Callback function called");

// }
// process(callback);

// const greet = (name) => {
//   console.log(name);
// };
// const greet = (name) => {
//   return "Hello " + name;
// };
// console.log(greet("Raghul"));

// const add = (a, b) => {
//   return a + b;
// };
// const square = (a) => {
//   return a * a;
// };

// console.log(add(1, 2));
// console.log(square(2));

// const fruits = ["apple", "banana"];
// const f = fruits.push("orange");
// fruits.unshift(3);
// console.log(fruits);
// console.log(f);

// console.log(fruits.pop());
// console.log(fruits.shift());
// console.log(fruits);

// console.log([3, 5, 7, 8, 10].find((n) => n % 2 === 0));
// console.log(["abi", "mukesh", "kumar"].find((a) => a.length > 4));
// const students = [
//   { name: "Alice", age: 14, grade: "8th" },
//   { name: "Bob", age: 15, grade: "9th" },
//   { name: "Charlie", age: 13, grade: "7th" },
// ];
// names = students.map((s) => s.name);
// console.log(names);

// let students = [
//   { name: "Raghul", mark: 75 },
//   { name: "Rithik", mark: 80 },
//   { name: "Kalia", mark: 40 },
// ];
// let below50 = students.filter((s) => s.mark < 50);
// console.log(below50);

// let fruits = ["apple", "banana", "orange", "grape"];

// for (let k of fruits) console.log(k + " ");

// let nums = [10, 20, 30];
// let total = nums.reduce((s, c) => s * c, 1);
// console.log(total);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [7, 8, 9, 10];

// console.log(arr1.concat(arr2));
const comb = [...arr1, ...arr2, ...arr3];
console.log(comb);

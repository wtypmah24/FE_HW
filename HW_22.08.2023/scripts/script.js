//Task 1

let num = prompt("Type some number: ")
console.log(Number(0.1 * num));

//Task 2

let firstNum = prompt("Enter first number: ")
let secondNumber = prompt("Enter second number")

if (firstNum < secondNumber){
    console.log(firstNum);
}
else{
    console.log(secondNumber);
}

//Task 3

let digit = prompt("Type some number: ")

if(digit > 100){
    console.log("The number is greater than 100");
}
else if (digit < 100){
    console.log("The number is less than 100");
}
else {
    console.log("The number is equal to 100");
}

//Task 4

let name = prompt("Enter your name: ")
let age = prompt("Enter your age: ")

if (age >= 18){
    console.log("Hello, "+name);
} 
else{
    console.log("Hi, " +name);
}